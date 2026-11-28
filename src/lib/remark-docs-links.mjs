// Rewrite links inside HorneroOS/docs pages so they work on the site while
// the Markdown stays GitHub-readable in its own repository:
//   desktop/appearance.md#x  -> /docs/desktop/appearance/#x
//   ../architecture/README.md -> /docs/architecture/
//   LICENSE, scripts/...      -> GitHub blob at the pinned docs commit
// Only files under the docs checkout are touched; absolute URLs and anchors
// are left alone. Images that pointed at the website's removed showcase
// captures (`/images/apps/...`, deleted pending real host captures) map to
// a capture slot (src/data/capture-slots.json): once the slot is captured
// they render the real asset served from /captures/<slot-file> (a copy of
// src/assets/captures/<slot-file> kept for docs), keeping the slot id in
// data-capture-slot; until then they render a labelled pending-capture
// note instead of a broken link.
import { posix, relative, resolve, sep } from 'node:path';

export function docsRoute(relPath) {
  // Spanish translations mirror English paths under es/; they serve at
  // the same canonical /docs/ route as their English counterpart.
  const clean = relPath.replace(/\.md$/i, '').replace(/^es\//, '').replace(/^es$/, 'README');
  if (clean === 'README') return '/docs/';
  if (clean.endsWith('/README')) return `/docs/${clean.slice(0, -'/README'.length)}/`;
  return `/docs/${clean}/`;
}

export default function remarkDocsLinks({ docsRoot, repo, sha, capturedFiles = {} }) {
  const root = resolve(docsRoot);
  return (tree, file) => {
    const filePath = file?.history?.[0] ?? file?.path;
    if (!filePath || !resolve(filePath).startsWith(root + sep)) return;
    const relFile = relative(root, resolve(filePath)).split(sep).join('/');
    const fromDir = posix.dirname(relFile);
    const spanish = relFile.startsWith('es/');
    const pendingSlots = {
      '/images/apps/thunar-wallpapers.webp': 'CAP-TERM-06',
      '/images/apps/yazi-wallpapers.webp': 'CAP-TERM-06',
      '/images/apps/kitty-appearance.webp': 'CAP-TERM-01',
    };
    const walk = (node) => {
      if (node.type === 'image' && typeof node.url === 'string') {
        if (node.url.startsWith('/images/apps/')) {
          const slot = pendingSlots[node.url];
          const label = spanish ? 'Pendiente — captura en el equipo' : 'Pending — host capture';
          const alt = (node.alt ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
          const capturedFile = slot ? capturedFiles[slot] : undefined;
          node.type = 'html';
          node.value = capturedFile
            ? `<img data-capture-slot="${slot}" src="/captures/${capturedFile}" alt="${alt}" loading="lazy" />`
            : slot
              ? `<span data-capture-slot="${slot}"><em>${label} (${slot}): ${alt}</em></span>`
              : `<span><em>${label}: ${alt}</em></span>`;
          delete node.url;
          delete node.alt;
          delete node.title;
          delete node.children;
          return;
        }
        // Production CSP (img-src 'self' data:) blocks external badge images such as
        // shields.io and github.com/.../badge.svg. Render clean inline text instead.
        if (/^https?:\/\//i.test(node.url)) {
          const label = (node.alt || '').trim();
          node.type = 'text';
          node.value = label ? `[${label}]` : '';
          delete node.url;
          delete node.alt;
          delete node.title;
          delete node.children;
          return;
        }
      }
      if (node.type === 'link' && typeof node.url === 'string') {
        const url = node.url;
        if (!/^(?:[a-z][a-z0-9+.-]*:|#|\/)/i.test(url)) {
          const [path, hash = ''] = url.split('#');
          const target = posix.normalize(posix.join(fromDir, path));
          if (target.startsWith('..')) {
            // Leaves the docs repository: point at GitHub instead.
            node.url = `${repo}/blob/${sha}/${target}`;
          } else if (/\.md$/i.test(target)) {
            node.url = docsRoute(target) + (hash ? `#${hash}` : '');
          } else {
            node.url = `${repo}/blob/${sha}/${target}${hash ? `#${hash}` : ''}`;
          }
        }
      }
      for (const child of node.children ?? []) walk(child);
    };
    walk(tree);
  };
}
