const FRAME_COUNT = 169;

export function getFramePath(index) {
  const frame = Math.min(Math.max(index, 0), FRAME_COUNT - 1) + 1;
  return `/frames/ezgif-frame-${String(frame).padStart(3, '0')}.jpg`;
}

export function getFramePaths() {
  return Array.from({ length: FRAME_COUNT }, (_, i) => getFramePath(i));
}

export { FRAME_COUNT };
