const FRAME_COUNT = 169;
const HERO_PREVIEW_FRAME = 84;

export function getFramePath(index) {
  const frame = Math.min(Math.max(index, 0), FRAME_COUNT - 1) + 1;
  return `/frames/ezgif-frame-${String(frame).padStart(3, '0')}.jpg`;
}

export { FRAME_COUNT, HERO_PREVIEW_FRAME };
