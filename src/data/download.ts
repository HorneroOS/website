// The published ISO record (src/data/download.json), typed. Pages read the
// version, URLs and checksum from here instead of repeating them.
import record from './download.json';
import { releases } from './product';

export const download = record;
export const downloadRelease = releases.find((r) => r.version === record.version && r.status === 'tagged');
if (!downloadRelease) throw new Error(`download.json names ${record.version}, which is not a tagged release in the pinned data`);
export const downloadTag = `v${record.version}`;
