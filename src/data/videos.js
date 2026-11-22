const files = import.meta.glob('../../assets/*.mp4', { eager: true, query: '?url', import: 'default' });
export const videos = Object.entries(files).sort(([a], [b]) => a.localeCompare(b)).map(([, src], index) => ({ src, number: String(index + 1).padStart(2, '0'), title: `Proyecto ${String(index + 1).padStart(2, '0')}` }));
