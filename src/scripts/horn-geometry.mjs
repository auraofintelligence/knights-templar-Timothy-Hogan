export const ROWS=12, COLUMNS=24, SHELLS=7, ADDRESS_COUNT=4032;
// Canonical formula from the supplied man-and-mind/scripts/horn-torus.js.
// Equal major and minor radii. All longitudes meet at v = pi.
export function hornPoint(u,v){const r=1+Math.cos(v);return {x:r*Math.cos(u),y:Math.sin(v),z:r*Math.sin(u)}}
export function address(shell,side,row,column){return `Shell ${shell} / ${side} / row ${row} / column ${column}`}
