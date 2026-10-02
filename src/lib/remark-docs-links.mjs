// Rewrite links inside HorneroOS/docs pages so they work on the site while
// the Markdown stays GitHub-readable in its own repository:
//   desktop/appearance.md#x  -> /docs/desktop/appearance/#x
//   ../architecture/README.md -> /docs/architecture/
//   LICENSE, scripts/...      -> GitHub blob at the pinned docs commit
// Only files under the docs checkout are touched; absolute URLs, anchors and
// images (handled by Astro's asset pipeline) are left alone.
import { posix, relative, resolve, sep } from 'node:path';

export function docsRoute(relPath) {
  const clean = relPath.replace(/\.md$/i, '');
  if (clean === 'README') return '/docs/';
  if (clean.endsWith('/README')) return `/docs/${clean.slice(0, -'/README'.length)}/`;
  return `/docs/${clean}/`;
}

export default function remarkDocsLinks({ docsRoot, repo, sha }) {
  const root = resolve(docsRoot);
  return (tree, file) => {
    const filePath = file?.history?.[0] ?? file?.path;
    if (!filePath || !resolve(filePath).startsWith(root + sep)) return;
    const fromDir = posix.dirname(relative(root, resolve(filePath)).split(sep).join('/'));
    const walk = (node) => {
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
