// Pomfret School - Architectural Line Drawing
// Based on actual building photographs - view from southwest

const buildings = [
  // VISTA - Modern with vertical metal panels, 3 stories
  {
    name:"VISTA",
    coords:[[-0.0008793,-0.0009797],[-0.0006057,-0.001156],[-0.0007841,-0.00131],[-0.0010577,-0.0011342],[-0.0008793,-0.0009797]],
    h:0.0009,
    style:"modern",
    floors:3,
    features:"vertical_panels"
  },

  // Centennial - Red brick with multiple peaked roofs and cupola
  {
    name:"Centennial",
    coords:[[-0.0022814,-0.0003526],[-0.0023107,-0.0003519],[-0.0023165,-0.0001843],[-0.0022872,-0.000185],[-0.00229,-0.0000477],[-0.0023066,-0.0000473],[-0.0023127,0.0001877],[-0.0020485,0.000194],[-0.0020426,0.0000602],[-0.0020734,0.0000594],[-0.0020702,-0.0001853],[-0.0020429,-0.000186],[-0.0020374,-0.0003585],[-0.0022814,-0.0003526]],
    h:0.0008,
    style:"peaked",
    floors:2,
    features:"cupola"
  },

  // The Bricks - Georgian with dormers and chimneys
  {
    name:"The Bricks",
    coords:[[-0.0013853,-0.0002533],[-0.0013852,-0.0002442],[-0.0013351,-0.0002447],[-0.0013337,-0.0003589],[-0.0014268,-0.000358],[-0.0014264,-0.0003385],[-0.0014137,-0.0003386],[-0.001409,-0.000661],[-0.0014466,-0.0006606],[-0.0014454,-0.0006852],[-0.0013966,-0.0006856],[-0.001392,-0.0009101],[-0.0015561,-0.0009085],[-0.0015607,-0.0006819],[-0.0015298,-0.0006822],[-0.001531,-0.0006563],[-0.0015734,-0.0006559],[-0.0015781,-0.0003335],[-0.0015332,-0.0003339],[-0.0015336,-0.0003556],[-0.0015503,-0.0003555],[-0.0015517,-0.0002413],[-0.0014366,-0.0002424],[-0.0014368,-0.0002528],[-0.0013853,-0.0002533]],
    h:0.0011,
    style:"georgian",
    floors:3,
    features:"dormers"
  },

  // School Building - Collegiate Georgian with cupola
  {
    name:"School Building",
    coords:[[-0.0019714,-0.0008506],[-0.0021652,-0.0008479],[-0.0021691,-0.0006018],[-0.0021858,-0.0006015],[-0.0021873,-0.000535],[-0.0021716,-0.0005352],[-0.0021755,-0.0003193],[-0.0019806,-0.000322],[-0.0019714,-0.0008506]],
    h:0.0012,
    style:"peaked",
    floors:4,
    features:"cupola_tower"
  },

  // Chapel - Stone Norman with simple peaked roof
  {
    name:"Chapel",
    coords:[[-0.0007671,-0.0007431],[-0.0007674,-0.000758],[-0.0008163,-0.0007575],[-0.0008184,-0.0006579],[-0.0007719,-0.0006584],[-0.0007755,-0.0004338],[-0.0006536,-0.0004352],[-0.0006497,-0.0006445],[-0.0004879,-0.0006464],[-0.0004868,-0.0006943],[-0.0006465,-0.0006924],[-0.0006455,-0.0007439],[-0.0006799,-0.0007206],[-0.0007351,-0.00072],[-0.0007671,-0.0007431]],
    h:0.0012,
    style:"chapel_stone",
    floors:1,
    features:"peaked_simple"
  }
];

// View from southwest looking northeast
const angleX = 25 * Math.PI / 180;
const angleZ = 225 * Math.PI / 180;
const scale = 25000;
const centerX = 0.0001641;
const centerY = -0.0009395;

function project3D(x, y, z) {
  const xc = x - centerX;
  const yc = y - centerY;
  const x1 = xc * Math.cos(angleZ) - yc * Math.sin(angleZ);
  const y1 = xc * Math.sin(angleZ) + yc * Math.cos(angleZ);
  const y2 = y1 * Math.cos(angleX) - z * Math.sin(angleX);
  return [x1, y2];
}

function walk(i) {
  const t = new Turtle();
  if (i >= buildings.length) return false;

  const bld = buildings[i];
  const p = bld.coords;
  const h = bld.h;

  // Draw base footprint
  let [px, py] = project3D(p[0][0], p[0][1], 0);
  t.jump(px * scale, py * scale);
  for (let j = 1; j < p.length; j++) {
    [px, py] = project3D(p[j][0], p[j][1], 0);
    t.goto(px * scale, py * scale);
  }

  // Draw walls - only visible faces
  for (let j = 0; j < p.length; j++) {
    const k = (j + 1) % p.length;
    const dx = p[k][0] - p[j][0];
    const dy = p[k][1] - p[j][1];
    const normal = [-dy, dx];

    if (normal[0] * Math.cos(angleZ) + normal[1] * Math.sin(angleZ) > 0) {
      let [px0, py0] = project3D(p[j][0], p[j][1], 0);
      let [px1, py1] = project3D(p[j][0], p[j][1], h);
      t.jump(px0 * scale, py0 * scale);
      t.goto(px1 * scale, py1 * scale);
    }
  }

  // ROOF STYLES based on actual photos
  if (bld.style === "chapel_stone") {
    // Simple peaked roof
    const center = p.reduce((acc, pt) => [acc[0] + pt[0]/p.length, acc[1] + pt[1]/p.length], [0, 0]);
    const ridgeH = h * 1.3;
    let [cx, cy] = project3D(center[0], center[1], ridgeH);

    for (let j = 0; j < p.length; j++) {
      const k = (j + 1) % p.length;
      const dx = p[k][0] - p[j][0];
      const dy = p[k][1] - p[j][1];
      const normal = [-dy, dx];

      if (normal[0] * Math.cos(angleZ) + normal[1] * Math.sin(angleZ) > 0) {
        let [px, py] = project3D(p[j][0], p[j][1], h);
        t.jump(px * scale, py * scale);
        t.goto(cx * scale, cy * scale);
      }
    }

  } else if (bld.style === "peaked" || bld.style === "georgian") {
    // Multiple peaked sections (like photos show)
    const segments = 3; // Multiple roof peaks
    const segLen = p.length / segments;

    for (let seg = 0; seg < segments; seg++) {
      const start = Math.floor(seg * segLen);
      const end = Math.floor((seg + 1) * segLen);

      let segCenter = [0, 0];
      let count = 0;
      for (let j = start; j < end && j < p.length; j++) {
        segCenter[0] += p[j][0];
        segCenter[1] += p[j][1];
        count++;
      }
      if (count > 0) {
        segCenter[0] /= count;
        segCenter[1] /= count;

        const peakH = h * 1.2;
        let [cx, cy] = project3D(segCenter[0], segCenter[1], peakH);

        for (let j = start; j < end && j < p.length; j++) {
          const k = (j + 1) % p.length;
          const dx = p[k][0] - p[j][0];
          const dy = p[k][1] - p[j][1];
          const normal = [-dy, dx];

          if (normal[0] * Math.cos(angleZ) + normal[1] * Math.sin(angleZ) > 0) {
            let [px, py] = project3D(p[j][0], p[j][1], h);
            t.jump(px * scale, py * scale);
            t.goto(cx * scale, cy * scale);
          }
        }
      }
    }

  } else {
    // VISTA - flat roof with visible edges
    for (let j = 0; j < p.length; j++) {
      const k = (j + 1) % p.length;
      const dx = p[k][0] - p[j][0];
      const dy = p[k][1] - p[j][1];
      const normal = [-dy, dx];

      if (normal[0] * Math.cos(angleZ) + normal[1] * Math.sin(angleZ) > 0) {
        let [px0, py0] = project3D(p[j][0], p[j][1], h);
        let [px1, py1] = project3D(p[k][0], p[k][1], h);
        t.jump(px0 * scale, py0 * scale);
        t.goto(px1 * scale, py1 * scale);
      }
    }
  }

  // FLOOR/DETAIL LINES based on building features
  if (bld.features === "vertical_panels") {
    // VISTA - vertical panel lines
    for (let j = 0; j < p.length; j++) {
      const k = (j + 1) % p.length;
      const dx = p[k][0] - p[j][0];
      const dy = p[k][1] - p[j][1];
      const edgeLen = Math.sqrt(dx*dx + dy*dy);
      const normal = [-dy, dx];

      if (normal[0] * Math.cos(angleZ) + normal[1] * Math.sin(angleZ) > 0 && edgeLen > 0.0002) {
        const numPanels = 8;
        for (let pan = 1; pan < numPanels; pan++) {
          const t1 = pan / numPanels;
          const wx = p[j][0] + dx * t1;
          const wy = p[j][1] + dy * t1;

          let [wpx0, wpy0] = project3D(wx, wy, 0);
          let [wpx1, wpy1] = project3D(wx, wy, h);
          t.jump(wpx0 * scale, wpy0 * scale);
          t.goto(wpx1 * scale, wpy1 * scale);
        }
      }
    }

  } else if (bld.features === "cupola" || bld.features === "cupola_tower") {
    // Draw cupola/bell tower on top
    const center = p.reduce((acc, pt) => [acc[0] + pt[0]/p.length, acc[1] + pt[1]/p.length], [0, 0]);
    const cupW = 0.0001;
    const cupH = h * 1.4;

    let [c1x, c1y] = project3D(center[0] - cupW, center[1] - cupW, h * 1.15);
    let [c2x, c2y] = project3D(center[0] + cupW, center[1] - cupW, h * 1.15);
    let [c3x, c3y] = project3D(center[0] + cupW, center[1] + cupW, h * 1.15);
    let [c4x, c4y] = project3D(center[0] - cupW, center[1] + cupW, h * 1.15);
    let [ctx, cty] = project3D(center[0], center[1], cupH);

    // Draw cupola base
    t.jump(c1x * scale, c1y * scale);
    t.goto(c2x * scale, c2y * scale);
    t.goto(c3x * scale, c3y * scale);
    t.goto(c4x * scale, c4y * scale);
    t.goto(c1x * scale, c1y * scale);

    // Draw cupola spire
    t.jump(c1x * scale, c1y * scale);
    t.goto(ctx * scale, cty * scale);
    t.goto(c3x * scale, c3y * scale);

    // Floor lines
    for (let floor = 1; floor < bld.floors; floor++) {
      const floorH = (floor / bld.floors) * h;
      for (let j = 0; j < p.length; j++) {
        const k = (j + 1) % p.length;
        const dx = p[k][0] - p[j][0];
        const dy = p[k][1] - p[j][1];
        const edgeLen = Math.sqrt(dx*dx + dy*dy);
        const normal = [-dy, dx];

        if (normal[0] * Math.cos(angleZ) + normal[1] * Math.sin(angleZ) > 0 && edgeLen > 0.0003) {
          let [px0, py0] = project3D(p[j][0], p[j][1], floorH);
          let [px1, py1] = project3D(p[k][0], p[k][1], floorH);
          t.jump(px0 * scale, py0 * scale);
          t.goto(px1 * scale, py1 * scale);
        }
      }
    }

  } else if (bld.features === "dormers") {
    // Georgian dormers and floor lines
    for (let floor = 1; floor < bld.floors; floor++) {
      const floorH = (floor / bld.floors) * h;
      for (let j = 0; j < p.length; j++) {
        const k = (j + 1) % p.length;
        const dx = p[k][0] - p[j][0];
        const dy = p[k][1] - p[j][1];
        const edgeLen = Math.sqrt(dx*dx + dy*dy);
        const normal = [-dy, dx];

        if (normal[0] * Math.cos(angleZ) + normal[1] * Math.sin(angleZ) > 0 && edgeLen > 0.0003) {
          let [px0, py0] = project3D(p[j][0], p[j][1], floorH);
          let [px1, py1] = project3D(p[k][0], p[k][1], floorH);
          t.jump(px0 * scale, py0 * scale);
          t.goto(px1 * scale, py1 * scale);
        }
      }
    }
  }

  return true;
}
