// Pomfret School - 3D Isometric View (12 buildings)
// Isometric perspective with architectural detail
const D=[[[-0.0007,0.0007],[-0.0006,0.0007],[-0.0006,0.0007],[-0.0006,0.0007],[-0.0006,0.0007],[-0.0006,0.0007],[-0.0005,0.0006],[-0.0006,0.0006],[-0.0006,0.0006],[-0.0006,0.0006],[-0.0006,0.0005],[-0.0006,0.0005],[-0.0006,0.0005],[-0.0007,0.0005],[-0.0007,0.0005],[-0.0008,0.0005],[-0.0008,0.0006],[-0.0008,0.0006],[-0.0008,0.0007],[-0.0008,0.0007],[-0.0008,0.0007],[-0.0007,0.0007],[-0.0007,0.0008],[-0.0007,0.0008],[-0.0007,0.0007]],[[-0.0006,-0.0001],[-0.0006,-0.0002],[-0.0004,-0.0002],[-0.0004,-0.0003],[-0.0004,-0.0003],[-0.0004,-0.0003],[-0.0005,-0.0003],[-0.0005,-0.0004],[-0.0007,-0.0004],[-0.0007,-0.0003],[-0.0008,-0.0003],[-0.0008,-0.0004],[-0.0008,-0.0004],[-0.0008,-0.0004],[-0.0009,-0.0004],[-0.0009,-0.0003],[-0.001,-0.0003],[-0.001,-0.0003],[-0.0011,-0.0003],[-0.0011,-0.0003],[-0.0012,-0.0003],[-0.0012,-0.0004],[-0.0013,-0.0004],[-0.0013,-0.0002],[-0.0011,-0.0002],[-0.0011,-0.0002],[-0.001,-0.0002],[-0.001,-0.0002],[-0.0008,-0.0002],[-0.0008,-0.0001],[-0.0009,-0.0001],[-0.0009,0.0003],[-0.0005,0.0003],[-0.0005,-0.0001],[-0.0006,-0.0001]],[[0.0012,-0.0018],[0.0012,-0.0017],[0.0012,-0.0017],[0.0012,-0.0016],[0.0012,-0.0016],[0.0012,-0.0015],[0.0013,-0.0015],[0.0014,-0.0017],[0.0015,-0.0017],[0.0015,-0.0017],[0.0014,-0.0017],[0.0014,-0.0018],[0.0013,-0.0018],[0.0013,-0.0018],[0.0012,-0.0018]],[[0.0015,-0.0026],[0.0014,-0.0026],[0.0014,-0.0025],[0.0013,-0.0024],[0.0014,-0.0023],[0.0015,-0.0024],[0.0016,-0.0024],[0.0016,-0.0024],[0.0016,-0.0024],[0.0016,-0.0025],[0.0016,-0.0025],[0.0016,-0.0026],[0.0015,-0.0026]],[[0.0011,-0.002],[0.0014,-0.0022],[0.0012,-0.0023],[0.0009,-0.0021],[0.0011,-0.002]],[[0.0009,-0.0024],[0.0009,-0.0025],[0.0009,-0.0025],[0.001,-0.0026],[0.0007,-0.0026],[0.0007,-0.0025],[0.0007,-0.0025],[0.0007,-0.0024],[0.0007,-0.0024],[0.0007,-0.002],[0.0007,-0.002],[0.0007,-0.0019],[0.0009,-0.0019],[0.0009,-0.002],[0.0009,-0.002],[0.0009,-0.0024],[0.0009,-0.0024],[0.0009,-0.0024]],[[0.0,-0.0018],[-0.0002,-0.0019],[-0.0002,-0.0017],[-0.0002,-0.0017],[-0.0002,-0.0016],[-0.0002,-0.0016],[-0.0002,-0.0015],[0.0,-0.0015],[0.0,-0.0018]],[[-0.0003,-0.0013],[-0.0003,-0.0013],[-0.0003,-0.0012],[-0.0003,-0.0012],[-0.0003,-0.0012],[-0.0003,-0.0012],[-0.0003,-0.001],[0.0,-0.001],[0.0,-0.0011],[-0.0001,-0.0011],[-0.0001,-0.0012],[0.0,-0.0012],[0.0,-0.0013],[-0.0003,-0.0013]],[[0.0005,0.0],[0.0005,-0.0001],[0.0006,-0.0001],[0.0006,-0.0002],[0.0006,-0.0002],[0.0006,-0.0002],[0.0005,-0.0002],[0.0005,-0.0002],[0.0004,-0.0002],[0.0004,-0.0001],[0.0004,-0.0001],[0.0004,0.0],[0.0004,-0.0001],[0.0003,0.0002],[0.0004,0.0002],[0.0004,0.0003],[0.0003,0.0003],[0.0003,0.0006],[0.0005,0.0006],[0.0005,0.0003],[0.0005,0.0003],[0.0005,0.0]],[[0.0006,-0.0012],[0.0006,-0.0013],[0.0006,-0.0013],[0.0006,-0.0016],[0.0005,-0.0016],[0.0004,-0.0015],[0.0004,-0.0013],[0.0004,-0.0013],[0.0005,-0.0013],[0.0005,-0.0012],[0.0004,-0.0012],[0.0004,-0.0012],[0.0004,-0.0011],[0.0008,-0.0011],[0.0008,-0.0012],[0.0006,-0.0012]],[[0.0006,-0.0002],[0.0006,-0.0003],[0.0007,-0.0003],[0.0007,-0.0003],[0.0006,-0.0003],[0.0006,-0.0004],[0.0006,-0.0004],[0.0006,-0.0006],[0.0006,-0.0006],[0.0006,-0.0007],[0.0006,-0.0007],[0.0006,-0.001],[0.0004,-0.001],[0.0004,-0.0007],[0.0005,-0.0007],[0.0005,-0.0006],[0.0004,-0.0006],[0.0004,-0.0004],[0.0005,-0.0004],[0.0005,-0.0003],[0.0004,-0.0003],[0.0004,-0.0003],[0.0006,-0.0003],[0.0006,-0.0002],[0.0006,-0.0002]],[[0.0004,-0.0018],[0.0004,-0.0019],[0.0004,-0.0019],[0.0004,-0.0019],[0.0005,-0.0019],[0.0005,-0.002],[0.0001,-0.002],[0.0001,-0.0019],[0.0001,-0.0019],[0.0001,-0.0018],[0.0004,-0.0018]]];

// Building heights (REALISTIC - based on architectural research)
// Heights in coordinate units converted from meters
// Building order: Pyne, OSU/Corzine, Chapel, Building #21, #22, Main House, #24,
//                 Centennial, Plant/Bourne, #27, Dunworth/Pontefract, #45
const heights = [
  0.0011,  // Pyne Dormitory - 3 stories, 11m
  0.0010,  // Corzine Athletic Center/OSU - 2 stories, 10m (high ceilings)
  0.0012,  // Clark Memorial Chapel - 1 story, 12m (vaulted ceiling)
  0.0008,  // Building #21 (likely academic) - 2 stories, 8m
  0.0009,  // Building #22 (likely VISTA) - 2 stories, 9m
  0.0009,  // Pomfret Main House - 2 stories, 9m
  0.0008,  // Building #24 (likely academic) - 2 stories, 8m
  0.0008,  // Centennial Academics and Art - 2 stories, 8.5m
  0.0011,  // Plant/Bourne Dormitories - 3 stories, 11m
  0.00085, // Building #27 (likely du Pont Library) - 2 stories, 8.5m
  0.0011,  // Dunworth/Pontefract Dorms (The Bricks) - 3 stories, 11m
  0.0007   // Building #45 (likely smaller facility) - 1-2 stories, 7m
];

// Isometric projection angles (similar to Grand Canyon view)
const angleX = 30 * Math.PI / 180;  // Tilt down
const angleZ = 45 * Math.PI / 180;  // Rotate around vertical

const scale = 80000;  // Much larger scale
const offsetX = 0;     // Center offset X
const offsetY = 200;   // Center offset Y (move up slightly)

// 3D to 2D isometric projection
function project3D(x, y, z) {
  // Rotate around Z axis
  const x1 = x * Math.cos(angleZ) - y * Math.sin(angleZ);
  const y1 = x * Math.sin(angleZ) + y * Math.cos(angleZ);

  // Tilt down (rotate around X axis)
  const y2 = y1 * Math.cos(angleX) - z * Math.sin(angleX);
  const z2 = y1 * Math.sin(angleX) + z * Math.cos(angleX);

  return [x1, y2];
}

function walk(i) {
  const turtle = new Turtle();
  if (i >= D.length) return false;

  const p = D[i];
  if (!p || p.length < 2) return true;

  const h = heights[i] || 0.0006;

  // Draw base (ground floor)
  let [px, py] = project3D(p[0][0], p[0][1], 0);
  turtle.jump(px * scale + offsetX, py * scale + offsetY);
  for (let j = 1; j < p.length; j++) {
    [px, py] = project3D(p[j][0], p[j][1], 0);
    turtle.goto(px * scale + offsetX, py * scale + offsetY);
  }
  [px, py] = project3D(p[0][0], p[0][1], 0);
  turtle.goto(px * scale + offsetX, py * scale + offsetY);

  // Draw top (roof)
  [px, py] = project3D(p[0][0], p[0][1], h);
  turtle.jump(px * scale + offsetX, py * scale + offsetY);
  for (let j = 1; j < p.length; j++) {
    [px, py] = project3D(p[j][0], p[j][1], h);
    turtle.goto(px * scale + offsetX, py * scale + offsetY);
  }
  [px, py] = project3D(p[0][0], p[0][1], h);
  turtle.goto(px * scale + offsetX, py * scale + offsetY);

  // Draw vertical edges (walls)
  for (let j = 0; j < p.length; j++) {
    let [px0, py0] = project3D(p[j][0], p[j][1], 0);
    let [px1, py1] = project3D(p[j][0], p[j][1], h);
    turtle.jump(px0 * scale + offsetX, py0 * scale + offsetY);
    turtle.goto(px1 * scale + offsetX, py1 * scale + offsetY);
  }

  // Add architectural detail - horizontal lines on walls
  const numFloors = Math.floor(h / 0.0002);
  for (let floor = 1; floor < numFloors; floor++) {
    const floorHeight = (floor / numFloors) * h;

    // Draw floor lines on visible faces
    for (let j = 0; j < p.length; j++) {
      const k = (j + 1) % p.length;

      // Determine if this edge is "visible" (facing towards viewer)
      const midX = (p[j][0] + p[k][0]) / 2;
      const midY = (p[j][1] + p[k][1]) / 2;

      // Simple visibility check based on edge orientation
      const dx = p[k][0] - p[j][0];
      const dy = p[k][1] - p[j][1];
      const normal = [-dy, dx];

      // If facing towards viewer (rough check)
      if (normal[0] * Math.cos(angleZ) + normal[1] * Math.sin(angleZ) > 0) {
        let [px0, py0] = project3D(p[j][0], p[j][1], floorHeight);
        let [px1, py1] = project3D(p[k][0], p[k][1], floorHeight);
        turtle.jump(px0 * scale + offsetX, py0 * scale + offsetY);
        turtle.goto(px1 * scale + offsetX, py1 * scale + offsetY);
      }
    }
  }

  return true;
}
