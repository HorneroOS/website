// GFM task lists render `<input type="checkbox" disabled>` with no accessible
// name, which fails axe `label`. Name each checkbox from its list item text so
// the docs checklists (for example the interaction contract) stay accessible.
const textOf = (node) => {
  if (node.type === 'text') return node.value;
  if (node.tagName === 'input' || node.tagName === 'ul' || node.tagName === 'ol') return '';
  return (node.children ?? []).map(textOf).join('');
};

export default function rehypeTaskLabels() {
  return (tree) => {
    const walk = (node) => {
      if (node.tagName === 'li') {
        const input = (node.children ?? []).find(
          (c) => c.tagName === 'input' && c.properties?.type === 'checkbox',
        ) ?? (node.children ?? []).flatMap((c) => c.children ?? []).find(
          (c) => c.tagName === 'input' && c.properties?.type === 'checkbox',
        );
        if (input && !input.properties['aria-label'] && !input.properties.ariaLabel) {
          const label = (node.children ?? []).map(textOf).join('').replace(/\s+/g, ' ').trim();
          if (label) input.properties.ariaLabel = label;
        }
      }
      (node.children ?? []).forEach(walk);
    };
    walk(tree);
  };
}
