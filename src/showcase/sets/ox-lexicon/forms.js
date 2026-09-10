export function hornPath(bx, by, tx, ty, baseW, tipW, bow) {
  const mx = (bx + tx) / 2
  const my = (by + ty) / 2
  const dx = tx - bx
  const dy = ty - by
  const len = Math.hypot(dx, dy) || 1
  const px = -dy / len
  const py = dx / len
  const cx = mx + px * bow
  const cy = my + py * bow

  const point = (t) => {
    const u = 1 - t
    return [u * u * bx + 2 * u * t * cx + t * t * tx, u * u * by + 2 * u * t * cy + t * t * ty]
  }

  const steps = 12
  const outer = []
  const inner = []

  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps
    const [x, y] = point(t)
    const [nx2, ny2] = point(Math.min(1, t + 0.01))
    const ddx = nx2 - x
    const ddy = ny2 - y
    const dl = Math.hypot(ddx, ddy) || 1
    const ux = -ddy / dl
    const uy = ddx / dl
    const w = (baseW * (1 - t) + tipW * t) / 2
    outer.push([x + ux * w, y + uy * w])
    inner.push([x - ux * w, y - uy * w])
  }

  const fmt = (p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`
  const outerD = outer.map(fmt).join(' L')
  const innerD = inner
    .slice()
    .reverse()
    .map(fmt)
    .join(' L')

  return `M${outerD} L${innerD} Z`
}
