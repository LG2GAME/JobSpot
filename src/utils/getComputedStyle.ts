export const getGapInPx = (clampValue: string): number => {
  const el = document.createElement("div");
  el.style.width = clampValue;
  document.body.appendChild(el);
  const width = el.offsetWidth;
  document.body.removeChild(el);
  return width;
};
