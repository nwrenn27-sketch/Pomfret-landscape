// Pomfret School - 3D Isometric View with Hatching
// Architectural rendering with shaded faces and terrain contours

const D=[[[-0.0007,0.0007],[-0.0006,0.0007],[-0.0006,0.0007],[-0.0006,0.0007],[-0.0006,0.0007],[-0.0006,0.0007],[-0.0005,0.0006],[-0.0006,0.0006],[-0.0006,0.0006],[-0.0006,0.0006],[-0.0006,0.0005],[-0.0006,0.0005],[-0.0006,0.0005],[-0.0007,0.0005],[-0.0007,0.0005],[-0.0008,0.0005],[-0.0008,0.0006],[-0.0008,0.0006],[-0.0008,0.0007],[-0.0008,0.0007],[-0.0008,0.0007],[-0.0007,0.0007],[-0.0007,0.0008],[-0.0007,0.0008],[-0.0007,0.0007]],[[-0.0006,-0.0001],[-0.0006,-0.0002],[-0.0004,-0.0002],[-0.0004,-0.0003],[-0.0004,-0.0003],[-0.0004,-0.0003],[-0.0005,-0.0003],[-0.0005,-0.0004],[-0.0007,-0.0004],[-0.0007,-0.0003],[-0.0008,-0.0003],[-0.0008,-0.0004],[-0.0008,-0.0004],[-0.0008,-0.0004],[-0.0009,-0.0004],[-0.0009,-0.0003],[-0.001,-0.0003],[-0.001,-0.0003],[-0.0011,-0.0003],[-0.0011,-0.0003],[-0.0012,-0.0003],[-0.0012,-0.0004],[-0.0013,-0.0004],[-0.0013,-0.0002],[-0.0011,-0.0002],[-0.0011,-0.0002],[-0.001,-0.0002],[-0.001,-0.0002],[-0.0008,-0.0002],[-0.0008,-0.0001],[-0.0009,-0.0001],[-0.0009,0.0003],[-0.0005,0.0003],[-0.0005,-0.0001],[-0.0006,-0.0001]],[[0.0012,-0.0018],[0.0012,-0.0017],[0.0012,-0.0017],[0.0012,-0.0016],[0.0012,-0.0016],[0.0012,-0.0015],[0.0013,-0.0015],[0.0014,-0.0017],[0.0015,-0.0017],[0.0015,-0.0017],[0.0014,-0.0017],[0.0014,-0.0018],[0.0013,-0.0018],[0.0013,-0.0018],[0.0012,-0.0018]],[[0.0015,-0.0026],[0.0014,-0.0026],[0.0014,-0.0025],[0.0013,-0.0024],[0.0014,-0.0023],[0.0015,-0.0024],[0.0016,-0.0024],[0.0016,-0.0024],[0.0016,-0.0024],[0.0016,-0.0025],[0.0016,-0.0025],[0.0016,-0.0026],[0.0015,-0.0026]],[[0.0011,-0.002],[0.0014,-0.0022],[0.0012,-0.0023],[0.0009,-0.0021],[0.0011,-0.002]],[[0.0009,-0.0024],[0.0009,-0.0025],[0.0009,-0.0025],[0.001,-0.0026],[0.0007,-0.0026],[0.0007,-0.0025],[0.0007,-0.0025],[0.0007,-0.0024],[0.0007,-0.0024],[0.0007,-0.002],[0.0007,-0.002],[0.0007,-0.0019],[0.0009,-0.0019],[0.0009,-0.002],[0.0009,-0.002],[0.0009,-0.0024],[0.0009,-0.0024],[0.0009,-0.0024]],[[0.0,-0.0018],[-0.0002,-0.0019],[-0.0002,-0.0017],[-0.0002,-0.0017],[-0.0002,-0.0016],[-0.0002,-0.0016],[-0.0002,-0.0015],[0.0,-0.0015],[0.0,-0.0018]],[[-0.0003,-0.0013],[-0.0003,-0.0013],[-0.0003,-0.0012],[-0.0003,-0.0012],[-0.0003,-0.0012],[-0.0003,-0.0012],[-0.0003,-0.001],[0.0,-0.001],[0.0,-0.0011],[-0.0001,-0.0011],[-0.0001,-0.0012],[0.0,-0.0012],[0.0,-0.0013],[-0.0003,-0.0013]],[[0.0005,0.0],[0.0005,-0.0001],[0.0006,-0.0001],[0.0006,-0.0002],[0.0006,-0.0002],[0.0006,-0.0002],[0.0005,-0.0002],[0.0005,-0.0002],[0.0004,-0.0002],[0.0004,-0.0001],[0.0004,-0.0001],[0.0004,0.0],[0.0004,-0.0001],[0.0003,0.0002],[0.0004,0.0002],[0.0004,0.0003],[0.0003,0.0003],[0.0003,0.0006],[0.0005,0.0006],[0.0005,0.0003],[0.0005,0.0003],[0.0005,0.0]],[[0.0006,-0.0012],[0.0006,-0.0013],[0.0006,-0.0013],[0.0006,-0.0016],[0.0005,-0.0016],[0.0004,-0.0015],[0.0004,-0.0013],[0.0004,-0.0013],[0.0005,-0.0013],[0.0005,-0.0012],[0.0004,-0.0012],[0.0004,-0.0012],[0.0004,-0.0011],[0.0008,-0.0011],[0.0008,-0.0012],[0.0006,-0.0012]],[[0.0006,-0.0002],[0.0006,-0.0003],[0.0007,-0.0003],[0.0007,-0.0003],[0.0006,-0.0003],[0.0006,-0.0004],[0.0006,-0.0004],[0.0006,-0.0006],[0.0006,-0.0006],[0.0006,-0.0007],[0.0006,-0.0007],[0.0006,-0.001],[0.0004,-0.001],[0.0004,-0.0007],[0.0005,-0.0007],[0.0005,-0.0006],[0.0004,-0.0006],[0.0004,-0.0004],[0.0005,-0.0004],[0.0005,-0.0003],[0.0004,-0.0003],[0.0004,-0.0003],[0.0006,-0.0003],[0.0006,-0.0002],[0.0006,-0.0002]],[[0.0004,-0.0018],[0.0004,-0.0019],[0.0004,-0.0019],[0.0004,-0.0019],[0.0005,-0.0019],[0.0005,-0.002],[0.0001,-0.002],[0.0001,-0.0019],[0.0001,-0.0019],[0.0001,-0.0018],[0.0004,-0.0018]]];

const heights = [
  0.0011,  // Pyne Dormitory
  0.0010,  // Corzine Athletic Center/OSU
  0.0012,  // Clark Memorial Chapel
  0.0008,  // Building #21
  0.0009,  // Building #22
  0.0009,  // Pomfret Main House
  0.0008,  // Building #24
  0.0008,  // Centennial Academics
  0.0011,  // Plant/Bourne Dormitories
  0.00085, // Building #27
  0.0011,  // Dunworth/Pontefract Dorms
  0.0007   // Building #45
];

const angleX = 30 * Math.PI / 180;
const angleZ = 45 * Math.PI / 180;
const scale = 18000;
const offsetX = 10;
const offsetY = -8;

const hatching = 1; /// min=0 max=1 step=1 (No hatching, With hatching)
const contours = 1; /// min=0 max=1 step=1 (No contours, With contours)

const turtle = new Turtle();
let polygons;
let buildingIndex = 0;

function project3D(x, y, z) {
  const x1 = x * Math.cos(angleZ) - y * Math.sin(angleZ);
  const y1 = x * Math.sin(angleZ) + y * Math.cos(angleZ);
  const y2 = y1 * Math.cos(angleX) - z * Math.sin(angleX);
  return [x1, y2];
}

function walk(i) {
  if (i == 0) {
    polygons = new Polygons();
    buildingIndex = 0;

    // Draw terrain contour lines first
    if (contours == 1) {
      drawContours();
    }
  }

  if (buildingIndex >= D.length) return false;

  const p = D[buildingIndex];
  if (!p || p.length < 2) {
    buildingIndex++;
    return true;
  }

  const h = heights[buildingIndex] || 0.0006;

  // Draw each visible face as a polygon with hatching
  drawBuildingFaces(p, h);

  buildingIndex++;
  return true;
}

function drawBuildingFaces(p, h) {
  // Draw vertical faces (walls) that are visible
  for (let j = 0; j < p.length; j++) {
    const k = (j + 1) % p.length;

    // Check if this face is visible
    const dx = p[k][0] - p[j][0];
    const dy = p[k][1] - p[j][1];
    const normal = [-dy, dx];

    // Visibility check
    const viewDot = normal[0] * Math.cos(angleZ) + normal[1] * Math.sin(angleZ);

    if (viewDot > 0) {
      // This face is visible - create polygon for it
      const face = polygons.create();

      const [px0, py0] = project3D(p[j][0], p[j][1], 0);
      const [px1, py1] = project3D(p[k][0], p[k][1], 0);
      const [px2, py2] = project3D(p[k][0], p[k][1], h);
      const [px3, py3] = project3D(p[j][0], p[j][1], h);

      face.addPoints(
        [px0 * scale + offsetX, py0 * scale + offsetY],
        [px1 * scale + offsetX, py1 * scale + offsetY],
        [px2 * scale + offsetX, py2 * scale + offsetY],
        [px3 * scale + offsetX, py3 * scale + offsetY]
      );

      if (hatching == 1) {
        // Hatching angle based on face orientation
        const faceAngle = Math.atan2(dy, dx);
        const hatchAngle = faceAngle + Math.PI / 4;
        face.addHatching(hatchAngle, 2);
      }

      face.addOutline();
      polygons.draw(turtle, face, true);
    }
  }

  // Draw roof as outline only (lighter appearance)
  const roof = polygons.create();
  const roofPoints = [];
  for (let j = 0; j < p.length; j++) {
    const [px, py] = project3D(p[j][0], p[j][1], h);
    roofPoints.push([px * scale + offsetX, py * scale + offsetY]);
  }
  roof.addPoints(...roofPoints);
  roof.addOutline();
  polygons.draw(turtle, roof, true);
}

function drawContours() {
  // Draw subtle terrain contour lines around campus
  const centerX = -0.0003;
  const centerY = -0.001;

  for (let elevation = 0; elevation < 8; elevation++) {
    const radius = 0.0008 + elevation * 0.0003;
    const numPoints = 48;
    const contour = polygons.create();
    const points = [];

    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius * 0.8;
      const z = elevation * 0.00008;

      const [px, py] = project3D(x, y, z);
      points.push([px * scale + offsetX, py * scale + offsetY]);
    }

    contour.addPoints(...points);
    contour.addOutline();
    polygons.draw(turtle, contour, false);
  }
}

////////////////////////////////////////////////////////////////
// Polygon Clipping utility code - Created by Reinder Nijhoff 2019
// https://turtletoy.net/turtle/a5befa1f8d
////////////////////////////////////////////////////////////////
function Polygons(){let t=[];const s=class{constructor(){this.cp=[],this.dp=[],this.aabb=[]}addPoints(...t){let s=1e5,e=-1e5,h=1e5,i=-1e5;(this.cp=[...this.cp,...t]).forEach(t=>{s=Math.min(s,t[0]),e=Math.max(e,t[0]),h=Math.min(h,t[1]),i=Math.max(i,t[1])}),this.aabb=[(s+e)/2,(h+i)/2,(e-s)/2,(i-h)/2]}addSegments(...t){t.forEach(t=>this.dp.push(t))}addOutline(){for(let t=0,s=this.cp.length;t<s;t++)this.dp.push(this.cp[t],this.cp[(t+1)%s])}draw(t){for(let s=0,e=this.dp.length;s<e;s+=2)t.jump(this.dp[s]),t.goto(this.dp[s+1])}addHatching(t,e){const h=new s;h.cp.push([-1e5,-1e5],[1e5,-1e5],[1e5,1e5],[-1e5,1e5]);const i=Math.sin(t)*e,n=Math.cos(t)*e,a=200*Math.sin(t),p=200*Math.cos(t);for(let t=.5;t<150/e;t++)h.dp.push([i*t+p,n*t-a],[i*t-p,n*t+a]),h.dp.push([-i*t+p,-n*t-a],[-i*t-p,-n*t+a]);h.boolean(this,!1),this.dp=[...this.dp,...h.dp]}inside(t){let s=0;for(let e=0,h=this.cp.length;e<h;e++)this.segment_intersect(t,[.13,-1e3],this.cp[e],this.cp[(e+1)%h])&&s++;return 1&s}boolean(t,s=!0){if(s&&Math.abs(this.aabb[0]-t.aabb[0])-(t.aabb[2]+this.aabb[2])>=0&&Math.abs(this.aabb[1]-t.aabb[1])-(t.aabb[3]+this.aabb[3])>=0)return this.dp.length>0;const e=[];for(let h=0,i=this.dp.length;h<i;h+=2){const i=this.dp[h],n=this.dp[h+1],a=[];for(let s=0,e=t.cp.length;s<e;s++){const h=this.segment_intersect(i,n,t.cp[s],t.cp[(s+1)%e]);!1!==h&&a.push(h)}if(0===a.length)s===!t.inside(i)&&e.push(i,n);else{a.push(i,n);const h=n[0]-i[0],p=n[1]-i[1];a.sort((t,s)=>(t[0]-i[0])*h+(t[1]-i[1])*p-(s[0]-i[0])*h-(s[1]-i[1])*p);for(let h=0;h<a.length-1;h++)(a[h][0]-a[h+1][0])**2+(a[h][1]-a[h+1][1])**2>=.001&&s===!t.inside([(a[h][0]+a[h+1][0])/2,(a[h][1]+a[h+1][1])/2])&&e.push(a[h],a[h+1])}}return(this.dp=e).length>0}segment_intersect(t,s,e,h){const i=(h[1]-e[1])*(s[0]-t[0])-(h[0]-e[0])*(s[1]-t[1]);if(0===i)return!1;const n=((h[0]-e[0])*(t[1]-e[1])-(h[1]-e[1])*(t[0]-e[0]))/i,a=((s[0]-t[0])*(t[1]-e[1])-(s[1]-t[1])*(t[0]-e[0]))/i;return n>=0&&n<=1&&a>=0&&a<=1&&[t[0]+n*(s[0]-t[0]),t[1]+n*(s[1]-t[1])]}};return{list:()=>t,create:()=>new s,draw:(s,e,h=!0)=>{for(let s=0;s<t.length&&e.boolean(t[s]);s++);e.draw(s),h&&t.push(e)}}}
