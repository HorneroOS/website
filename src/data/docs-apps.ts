// Featured tools per docs page: the applications Hornero actually
// configures or integrates on that page, shown as logo chips under the
// docs header (see src/pages/docs/[...slug].astro). Prose-only mentions
// (SDDM, Calamares, Waybar, PipeWire, CLI backends and similar) carry no
// chip by policy — see docs/DESIGN_SYSTEM_199X.md, "Artwork provenance".
// Ids resolve through src/components/AppLogo.astro; keep to at most
// three chips per page.
export const docsApps: Record<string, { id: string; name: string }[]> = {
  'desktop/compositors': [
    { id: 'hyprland', name: 'Hyprland' },
    { id: 'niri', name: 'Niri' },
  ],
  'architecture/editions': [
    { id: 'hyprland', name: 'Hyprland' },
    { id: 'niri', name: 'Niri' },
  ],
  'applications/terminal': [
    { id: 'kitty', name: 'Kitty' },
    { id: 'alacritty', name: 'Alacritty' },
    { id: 'ghostty', name: 'Ghostty' },
  ],
  'applications/default-apps': [
    { id: 'kitty', name: 'Kitty' },
    { id: 'alacritty', name: 'Alacritty' },
    { id: 'ghostty', name: 'Ghostty' },
  ],
  'desktop/appearance': [
    { id: 'kitty', name: 'Kitty' },
    { id: 'alacritty', name: 'Alacritty' },
    { id: 'ghostty', name: 'Ghostty' },
  ],
  'applications/files': [
    { id: 'yazi', name: 'Yazi' },
    { id: 'thunar', name: 'Thunar' },
  ],
  'applications/clipboard': [{ id: 'copyq', name: 'CopyQ' }],
  'applications/media-audio': [{ id: 'cava', name: 'Cava' }],
  'applications/system-utilities': [
    { id: 'btop', name: 'btop' },
    { id: 'cava', name: 'Cava' },
  ],
  applications: [
    { id: 'btop', name: 'btop' },
    { id: 'cava', name: 'Cava' },
  ],
  'applications/catalogue': [
    { id: 'kitty', name: 'Kitty' },
    { id: 'btop', name: 'btop' },
    { id: 'cava', name: 'Cava' },
  ],
};
