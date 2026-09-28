export const metadata = {
  title: 'Roots — Hornero OS',
  description:
    'Where Hornero OS comes from, what it credits, and how it compares.',
};

type Row = { area: string; hornero: string; ryoku: string; omarchy: string };

const rows: Row[] = [
  {
    area: 'Origin',
    hornero: 'Years of dotfiles craft, rebuilt as a system',
    ryoku: 'Hand-built distro, Omarchy-descended',
    omarchy: 'Arch/Hyprland distro by Basecamp',
  },
  {
    area: 'System CLI',
    hornero: 'horneroctl: presets, appearance, snapshots, doctor',
    ryoku: 'ryoku CLI: update, rollback, snapshots, doctor',
    omarchy: 'Theme-first scripts',
  },
  {
    area: 'Shell',
    hornero: 'Quickshell shell, 11 layout presets',
    ryoku: 'Quickshell shell, bar styles + rices',
    omarchy: 'Wayland stack with themes',
  },
  {
    area: 'Themes',
    hornero: '15 token-driven packs, offline catalogue',
    ryoku: 'Wallpaper-generated palette (matugen)',
    omarchy: 'Theme folders, one active at a time',
  },
  {
    area: 'Delivery',
    hornero: 'Release manifests + AUR',
    ryoku: 'Signed [ryoku] pacman repo',
    omarchy: 'Git + packages',
  },
  {
    area: 'Compositors',
    hornero: 'Hyprland, deeply integrated',
    ryoku: 'Hyprland + niri via provider seam',
    omarchy: 'Hyprland',
  },
  {
    area: 'Identity',
    hornero: 'Argentine soul: hornero, pampa, neon-city nights',
    ryoku: 'Japanese craft aesthetic (power and beauty)',
    omarchy: 'Opinionated minimalism',
  },
];

export default function Roots() {
  return (
    <>
      <section className="section">
        <h2>Roots</h2>
        <p>
          HorneroOS grows out of years of dotfiles work — open-source projects
          studied line by line, and the unixporn community&apos;s endless
          screenshots. When the desktop moved to Quickshell, two projects were
          studied closely: <strong>Caelestia</strong> and{' '}
          <strong>Dank Shell</strong>.
        </p>
        <p>
          Credit where it is due: the Hornero shell adapts{' '}
          <a href="https://github.com/caelestia-dots/shell">caelestia-dots/shell</a>{' '}
          (GPL-3.0), with attribution preserved in{' '}
          <code className="inline">shell/NOTICE</code>. Everything else is
          Hornero-owned: the <code className="inline">horneroctl</code> CLI, the
          config packs, the greeter, the installer contract, the release
          manifests.
        </p>
        <p>
          What HorneroOS is <strong>not</strong>: it is not based on Omarchy —
          nothing in its history derives from it — and it is not a pile of
          dotfiles with a installer stapled on. The dotfiles were the sketch;
          the system is the work.
        </p>
      </section>

      <section className="section">
        <h2>How we compare</h2>
        <p>
          An honest table against two projects we respect:{' '}
          <a href="https://github.com/Ryoku-dev/ryoku">Ryoku</a> (whose docs and
          engineering we studied for this very comparison) and Omarchy. Rows
          are facts, not adjectives.
        </p>
        <table className="compare">
          <thead>
            <tr>
              <th>Area</th>
              <th>HorneroOS</th>
              <th>Ryoku</th>
              <th>Omarchy</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.area}>
                <td>{r.area}</td>
                <td>{r.hornero}</td>
                <td>{r.ryoku}</td>
                <td>{r.omarchy}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ marginTop: '1rem' }}>
          Our opinion, stated plainly: for a user who wants a finished,
          controllable desktop rather than homework, HorneroOS is the better
          system — one CLI for everything, presets and themes that survive
          updates, and an identity of its own. Ryoku&apos;s provider seam and
          update lanes are excellent engineering; ideas we admire are credited
          above and tracked in our public issues.
        </p>
      </section>
    </>
  );
}
