// Pomfret School Campus - Simplified Building Outlines
// Based on LL's terrain renderer approach

// Building footprints as SVG path data (5 key buildings)
const buildingData = "M -0.0008793 -0.0009797 L -0.0006057 -0.001156 L -0.0007841 -0.00131 L -0.0010577 -0.0011342 L -0.0008793 -0.0009797 M -0.0022814 -0.0003526 L -0.0023107 -0.0003519 L -0.0023165 -0.0001843 L -0.0022872 -0.000185 L -0.00229 -0.0000477 L -0.0023066 -0.0000473 L -0.0023127 0.0001877 L -0.0020485 0.000194 L -0.0020426 0.0000602 L -0.0020734 0.0000594 L -0.0020702 -0.0001853 L -0.0020429 -0.000186 L -0.0020374 -0.0003585 L -0.0022814 -0.0003526 M -0.0013853 -0.0002533 L -0.0013852 -0.0002442 L -0.0013351 -0.0002447 L -0.0013337 -0.0003589 L -0.0014268 -0.000358 L -0.0014264 -0.0003385 L -0.0014137 -0.0003386 L -0.001409 -0.000661 L -0.0014466 -0.0006606 L -0.0014454 -0.0006852 L -0.0013966 -0.0006856 L -0.001392 -0.0009101 L -0.0015561 -0.0009085 L -0.0015607 -0.0006819 L -0.0015298 -0.0006822 L -0.001531 -0.0006563 L -0.0015734 -0.0006559 L -0.0015781 -0.0003335 L -0.0015332 -0.0003339 L -0.0015336 -0.0003556 L -0.0015503 -0.0003555 L -0.0015517 -0.0002413 L -0.0014366 -0.0002424 L -0.0014368 -0.0002528 L -0.0013853 -0.0002533 M -0.0019714 -0.0008506 L -0.0021652 -0.0008479 L -0.0021691 -0.0006018 L -0.0021858 -0.0006015 L -0.0021873 -0.000535 L -0.0021716 -0.0005352 L -0.0021755 -0.0003193 L -0.0019806 -0.000322 L -0.0019714 -0.0008506 M -0.0007671 -0.0007431 L -0.0007674 -0.000758 L -0.0008163 -0.0007575 L -0.0008184 -0.0006579 L -0.0007719 -0.0006584 L -0.0007755 -0.0004338 L -0.0006536 -0.0004352 L -0.0006497 -0.0006445 L -0.0004879 -0.0006464 L -0.0004868 -0.0006943 L -0.0006465 -0.0006924 L -0.0006455 -0.0007439 L -0.0006799 -0.0007206 L -0.0007351 -0.00072 L -0.0007671 -0.0007431";

const turtle = new Turtle();

let paths;
let polygons;

const scale = 30000; // Scale factor for buildings

function walk(i) {
    if (i == 0) {
        polygons = new Polygons();
        paths = [];

        // Parse SVG path data for each building
        buildingData.split('M').forEach(path => {
            if (path.trim().length > 0) {  // Skip empty paths
                paths.push([]);
                path.split('L').forEach(coord => {
                    xy = coord.split(' ');
                    if (xy.length >= 2) {
                        x = parseFloat(xy[1]);
                        y = parseFloat(xy[2]);
                        paths[paths.length-1].push([x, y]);
                    }
                });
            }
        });
    }

    // Manually position each building for nice composition
    const positions = [
        {x: -40, y: 30},    // VISTA - top left
        {x: 20, y: 35},     // Centennial - top right
        {x: -35, y: -15},   // The Bricks - center left
        {x: 15, y: -20},    // School Building - center right
        {x: -10, y: -50}    // Chapel - bottom center
    ];

    const buildingIndex = paths.length - 1 - i;
    const pos = positions[buildingIndex];

    var points = [];
    paths[buildingIndex].forEach(point => {
        x = point[0] * scale + pos.x;
        y = point[1] * scale + pos.y;
        points.push([x, y]);
    });
    drawPoints(points);

    return i + 1 < paths.length;
}

function drawPoints(points) {
    const p1 = polygons.create();
    p1.addPoints(...points);
    p1.addOutline();
    polygons.draw(turtle, p1, true);
}

////////////////////////////////////////////////////////////////
// Polygon Clipping utility code - Created by Reinder Nijhoff 2019
// https://turtletoy.net/turtle/a5befa1f8d
////////////////////////////////////////////////////////////////
function Polygons(){let t=[];const s=class{constructor(){this.cp=[],this.dp=[],this.aabb=[]}addPoints(...t){let s=1e5,e=-1e5,h=1e5,i=-1e5;(this.cp=[...this.cp,...t]).forEach(t=>{s=Math.min(s,t[0]),e=Math.max(e,t[0]),h=Math.min(h,t[1]),i=Math.max(i,t[1])}),this.aabb=[(s+e)/2,(h+i)/2,(e-s)/2,(i-h)/2]}addSegments(...t){t.forEach(t=>this.dp.push(t))}addOutline(){for(let t=0,s=this.cp.length;t<s;t++)this.dp.push(this.cp[t],this.cp[(t+1)%s])}draw(t){for(let s=0,e=this.dp.length;s<e;s+=2)t.jump(this.dp[s]),t.goto(this.dp[s+1])}addHatching(t,e){const h=new s;h.cp.push([-1e5,-1e5],[1e5,-1e5],[1e5,1e5],[-1e5,1e5]);const i=Math.sin(t)*e,n=Math.cos(t)*e,a=200*Math.sin(t),p=200*Math.cos(t);for(let t=.5;t<150/e;t++)h.dp.push([i*t+p,n*t-a],[i*t-p,n*t+a]),h.dp.push([-i*t+p,-n*t-a],[-i*t-p,-n*t+a]);h.boolean(this,!1),this.dp=[...this.dp,...h.dp]}inside(t){let s=0;for(let e=0,h=this.cp.length;e<h;e++)this.segment_intersect(t,[.13,-1e3],this.cp[e],this.cp[(e+1)%h])&&s++;return 1&s}boolean(t,s=!0){if(s&&Math.abs(this.aabb[0]-t.aabb[0])-(t.aabb[2]+this.aabb[2])>=0&&Math.abs(this.aabb[1]-t.aabb[1])-(t.aabb[3]+this.aabb[3])>=0)return this.dp.length>0;const e=[];for(let h=0,i=this.dp.length;h<i;h+=2){const i=this.dp[h],n=this.dp[h+1],a=[];for(let s=0,e=t.cp.length;s<e;s++){const h=this.segment_intersect(i,n,t.cp[s],t.cp[(s+1)%e]);!1!==h&&a.push(h)}if(0===a.length)s===!t.inside(i)&&e.push(i,n);else{a.push(i,n);const h=n[0]-i[0],p=n[1]-i[1];a.sort((t,s)=>(t[0]-i[0])*h+(t[1]-i[1])*p-(s[0]-i[0])*h-(s[1]-i[1])*p);for(let h=0;h<a.length-1;h++)(a[h][0]-a[h+1][0])**2+(a[h][1]-a[h+1][1])**2>=.001&&s===!t.inside([(a[h][0]+a[h+1][0])/2,(a[h][1]+a[h+1][1])/2])&&e.push(a[h],a[h+1])}}return(this.dp=e).length>0}segment_intersect(t,s,e,h){const i=(h[1]-e[1])*(s[0]-t[0])-(h[0]-e[0])*(s[1]-t[1]);if(0===i)return!1;const n=((h[0]-e[0])*(t[1]-e[1])-(h[1]-e[1])*(t[0]-e[0]))/i,a=((s[0]-t[0])*(t[1]-e[1])-(s[1]-t[1])*(t[0]-e[0]))/i;return n>=0&&n<=1&&a>=0&&a<=1&&[t[0]+n*(s[0]-t[0]),t[1]+n*(s[1]-t[1])]}};return{list:()=>t,create:()=>new s,draw:(s,e,h=!0)=>{for(let s=0;s<t.length&&e.boolean(t[s]);s++);e.draw(s),h&&t.push(e)}}}
