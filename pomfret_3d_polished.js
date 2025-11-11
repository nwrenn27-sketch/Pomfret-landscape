// Pomfret School Campus - 3D Polished View
// Architectural details: foundations, cornices, mullions, eaves, chimneys

const D=[[[-0.0006607,0.0007375],[-0.0006216,0.0007379],[-0.0006206,0.0006785],[-0.0006076,0.0006786],[-0.0006072,0.0006579],[-0.0005503,0.0006584],[-0.0005498,0.0006286],[-0.0006083,0.000628],[-0.0006079,0.0006073],[-0.0006212,0.0006072],[-0.0006202,0.0005498],[-0.0006422,0.0005496],[-0.000642,0.0005344],[-0.0007044,0.0005338],[-0.0007047,0.0005479],[-0.0007612,0.0005474],[-0.0007622,0.0006057],[-0.000786,0.0006055],[-0.0007873,0.0006766],[-0.0007621,0.0006768],[-0.0007631,0.0007363],[-0.0006944,0.000737],[-0.0006946,0.0007521],[-0.000661,0.0007525],[-0.0006607,0.0007375]],[[-0.0006272,-7.58e-05],[-0.0006216,-0.0001757],[-0.0004463,-0.0001703],[-0.0004378,-0.0003216],[-0.0004117,-0.0003208],[-0.0004105,-0.000342],[-0.0004873,-0.0003443],[-0.0004862,-0.000364],[-0.0007299,-0.0003716],[-0.0007319,-0.0003358],[-0.0007832,-0.0003374],[-0.0007809,-0.0003778],[-0.0008473,-0.0003799],[-0.000848,-0.000368],[-0.0009128,-0.0003701],[-0.0009144,-0.0003414],[-0.0009562,-0.0003427],[-0.0009568,-0.0003314],[-0.0010592,-0.0003346],[-0.0010587,-0.0003441],[-0.0011623,-0.0003474],[-0.0011583,-0.0004175],[-0.0013091,-0.0004222],[-0.001319,-0.0002463],[-0.001092,-0.0002393],[-0.0010931,-0.0002199],[-0.0009614,-0.0002158],[-0.000963,-0.0001869],[-0.0007561,-0.0001804],[-0.0007618,-7.88e-05],[-0.0008714,-8.22e-05],[-0.0008904,0.0002544],[-0.0005497,0.000265],[-0.0005308,-7.28e-05],[-0.0006272,-7.58e-05]],[[0.0012329,-0.0017569],[0.0012326,-0.001742],[0.0011837,-0.0017425],[0.0011816,-0.0016421],[0.0012281,-0.0016416],[0.0012245,-0.0014662],[0.0013464,-0.0014648],[0.0013503,-0.0016555],[0.0015121,-0.0016536],[0.0015132,-0.0017057],[0.0013535,-0.0017076],[0.0013545,-0.0017561],[0.0013201,-0.0017794],[0.0012649,-0.00178],[0.0012329,-0.0017569]],[[0.0015051,-0.0025612],[0.0014426,-0.0025617],[0.001441,-0.002451],[0.0013105,-0.0023764],[0.0013599,-0.0023267],[0.0015079,-0.002413],[0.0016002,-0.0024123],[0.0016006,-0.0024463],[0.0016463,-0.0024459],[0.0016472,-0.0025097],[0.0016013,-0.0025101],[0.001602,-0.0025604],[0.0015051,-0.0025612]],[[0.0011207,-0.0019803],[0.0013943,-0.002156],[0.0012159,-0.00231],[0.0009423,-0.0021342],[0.0011207,-0.0019803]],[[0.0009098,-0.0024444],[0.0009128,-0.0024945],[0.0009457,-0.0024935],[0.0009533,-0.0026238],[0.0007173,-0.0026314],[0.0007096,-0.0024997],[0.0007251,-0.0024992],[0.0007188,-0.0023918],[0.0006943,-0.0023926],[0.0006729,-0.0020251],[0.0007103,-0.0020238],[0.0007037,-0.0019112],[0.0008856,-0.0019053],[0.0008924,-0.0020209],[0.0009049,-0.0020205],[0.0009262,-0.0023849],[0.0009064,-0.0023856],[0.0009098,-0.0024444]],[[2.86e-05,-0.0018494],[-0.0001652,-0.0018521],[-0.0001691,-0.0016982],[-0.0001858,-0.0016985],[-0.0001873,-0.001635],[-0.0001716,-0.0016348],[-0.0001755,-0.0014807],[1.94e-05,-0.001478],[2.86e-05,-0.0018494]],[[-0.0002814,-0.0013474],[-0.0003107,-0.0013481],[-0.0003165,-0.0012157],[-0.0002872,-0.001215],[-0.00029,-0.0011523],[-0.0003066,-0.0011527],[-0.0003127,-0.0010123],[-4.85e-05,-0.001006],[-4.26e-05,-0.0011398],[-7.34e-05,-0.0011406],[-7.02e-05,-0.0012147],[-4.29e-05,-0.001214],[-3.74e-05,-0.0013415],[-0.0002814,-0.0013474]],[[0.0005185,-4.18e-05],[0.0005197,-6.79e-05],[0.0006123,-6.56e-05],[0.0006163,-0.0001539],[0.0005548,-0.0001554],[0.0005552,-0.000166],[0.0005112,-0.0001671],[0.0005106,-0.0001534],[0.0003995,-0.0001562],[0.0003956,-6.96e-05],[0.0004041,-6.94e-05],[0.0004032,-4.99e-05],[0.0003559,-5.11e-05],[0.0003435,0.0002229],[0.0003772,0.0002238],[0.0003738,0.0003001],[0.0003345,0.0002991],[0.000322,0.0005745],[0.00048,0.0005785],[0.0004921,0.0003121],[0.0005025,0.0003123],[0.0005185,-4.18e-05]],[[0.000592,-0.0012142],[0.0005945,-0.0012957],[0.0006143,-0.0012954],[0.0006234,-0.0015817],[0.0004515,-0.0015847],[0.000449,-0.0015054],[0.000444,-0.0013484],[0.0004425,-0.0012987],[0.000511,-0.0012975],[0.0005086,-0.0012212],[0.0004321,-0.0012226],[0.0003855,-0.0012234],[0.0003804,-0.0010642],[0.0008449,-0.0010561],[0.0008498,-0.0012097],[0.000592,-0.0012142]],[[0.0006147,-0.0002467],[0.0006148,-0.0002558],[0.0006649,-0.0002553],[0.0006663,-0.0003411],[0.0005732,-0.000342],[0.0005736,-0.0003615],[0.0005863,-0.0003614],[0.000591,-0.000639],[0.0005534,-0.0006394],[0.0005546,-0.0007148],[0.0006034,-0.0007144],[0.000608,-0.0009899],[0.0004439,-0.0009915],[0.0004393,-0.0007181],[0.0004702,-0.0007178],[0.000469,-0.0006437],[0.0004266,-0.0006441],[0.0004219,-0.0003665],[0.0004668,-0.0003661],[0.0004664,-0.0003444],[0.0004497,-0.0003445],[0.0004483,-0.0002587],[0.0005634,-0.0002576],[0.0005632,-0.0002472],[0.0006147,-0.0002467]],[[0.0003536,-0.0018023],[0.0003548,-0.0018603],[0.0004104,-0.0018596],[0.0004114,-0.0019062],[0.0004864,-0.0019053],[0.0004889,-0.0020236],[9.59e-05,-0.0020283],[9.24e-05,-0.001865],[0.000108,-0.0018648],[0.0001067,-0.0018052],[0.0003536,-0.0018023]]];
const H=[9.91e-05,9.01e-05,0.0001081,7.21e-05,7.21e-05,8.11e-05,7.21e-05,7.66e-05,9.91e-05,7.21e-05,9.91e-05,7.21e-05];
const T=["historic","traditional","chapel","traditional","traditional","traditional","traditional","modern","historic","traditional","historic","traditional"];

// Interactive parameters
const viewPreset=0;/// min=0 max=4 step=1 (Standard, Aerial, Architectural, Dramatic, Visitor)
const animTour=0;/// min=0 max=1 step=0.01 (Camera tour)
const timeOfDay=0.5;/// min=0 max=1 step=0.01 (Dawn to dusk)
const showWindows=1;/// min=0 max=1 step=1
const showRoofs=1;/// min=0 max=1 step=1
const showDoors=1;/// min=0 max=1 step=1
const explodeView=0;/// min=0 max=1 step=0.01
const detailLevel=1;/// min=0 max=2 step=1 (Low, Medium, High)

// View configurations [angleX, angleZ, scale, heightMult, offsetX, offsetY]
const views=[[35,45,42000,2,-35,10],[15,45,45000,2.5,-20,30],[45,30,40000,1.8,-40,5],[55,60,38000,2.2,-30,15],[25,90,43000,2,-35,20]];
const v=views[~~viewPreset];
const aX=v[0]*Math.PI/180,aZ=(v[1]+animTour*360)*Math.PI/180,S=v[2],heightMult=v[3];
const lightIntensity=0.4+0.6*Math.sin(timeOfDay*Math.PI);
const offsetX=v[4]+Math.sin(animTour*2*Math.PI)*20,offsetY=v[5]+Math.cos(animTour*2*Math.PI)*15;

// Helper: 3D to 2D projection
function proj(x,y,z,bldgIdx){
  const explodeZ=explodeView>0?bldgIdx*0.00015*explodeView:0;
  const x1=x*Math.cos(aZ)-y*Math.sin(aZ),y1=x*Math.sin(aZ)+y*Math.cos(aZ);
  return[x1,y1*Math.cos(aX)-(z+explodeZ)*Math.sin(aX)];
}

// Helper: Draw polygon from projected points
function drawPoly(t,points,bldgIdx,zOffset){
  const proj_pts=points.map(v=>proj(v[0],v[1],zOffset,bldgIdx)).map(v=>[v[0]*S+offsetX,v[1]*S+offsetY]);
  t.jump(proj_pts[0]);
  proj_pts.slice(1).forEach(v=>t.goto(v));
  t.goto(proj_pts[0]);
}

// Helper: Calculate centroid of polygon
function centroid(points){
  return points.reduce((acc,v)=>[acc[0]+v[0]/points.length,acc[1]+v[1]/points.length],[0,0]);
}

// Helper: Find longest edge index
function longestEdge(points){
  let mx=0,mi=0;
  for(let j=0;j<points.length;j++){
    const k=(j+1)%points.length;
    const ln=Math.sqrt((points[k][0]-points[j][0])**2+(points[k][1]-points[j][1])**2);
    if(ln>mx){mx=ln;mi=j;}
  }
  return mi;
}

// Render single building
function walk(i){
  const t=new Turtle();
  if(i>=D.length)return false;
  const p=D[i],h=(H[i]||1e-4)*heightMult,type=T[i];
  if(!p||p.length<2)return true;

  // Foundation line
  drawPoly(t,p,i,-0.000005);

  // Walls with materials
  for(let j=0;j<p.length;j++){
    const k=(j+1)%p.length,dx=p[k][0]-p[j][0],dy=p[k][1]-p[j][1];

    // Backface culling
    if((-dy*Math.cos(aZ)+dx*Math.sin(aZ))<=0)continue;

    const [x0,y0]=proj(p[j][0],p[j][1],0,i),[x1,y1]=proj(p[k][0],p[k][1],0,i),
          [x2,y2]=proj(p[k][0],p[k][1],h,i),[x3,y3]=proj(p[j][0],p[j][1],h,i);
    t.jump([x0*S+offsetX,y0*S+offsetY]);
    t.goto([x1*S+offsetX,y1*S+offsetY]);
    t.goto([x2*S+offsetX,y2*S+offsetY]);
    t.goto([x3*S+offsetX,y3*S+offsetY]);
    t.goto([x0*S+offsetX,y0*S+offsetY]);

    // Windows
    if(showWindows){
      const wl=Math.sqrt(dx*dx+dy*dy);
      const [cols,rows,mH,mV,wW,wH]=type==='chapel'?[Math.max(3,~~(wl*S/10)),3,0.15,0.1,0.02,0.25]:
        type==='modern'?[Math.max(4,~~(wl*S/8)),3,0.1,0.15,0.08,0.15]:
        type==='historic'?[Math.max(2,~~(wl*S/12)),2,0.25,0.2,0.03,0.18]:
        [Math.max(3,~~(wl*S/10)),2,0.2,0.2,0.04,0.12];

      for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){
        const tH=mH+(c+0.5)*(1-2*mH)/cols,tV=mV+(r+0.5)*(1-2*mV)/rows;
        const cx=p[j][0]+dx*tH,cy=p[j][1]+dy*tH,cz=h*tV;
        const [w0,w1]=proj(cx-dx*wW*0.5,cy-dy*wW*0.5,cz-h*wH*0.5,i),
              [w2,w3]=proj(cx+dx*wW*0.5,cy+dy*wW*0.5,cz-h*wH*0.5,i),
              [w4,w5]=proj(cx+dx*wW*0.5,cy+dy*wW*0.5,cz+h*wH*0.5,i),
              [w6,w7]=proj(cx-dx*wW*0.5,cy-dy*wW*0.5,cz+h*wH*0.5,i);
        t.jump([w0*S+offsetX,w1*S+offsetY]);
        t.goto([w2*S+offsetX,w3*S+offsetY]);
        t.goto([w4*S+offsetX,w5*S+offsetY]);
        t.goto([w6*S+offsetX,w7*S+offsetY]);
        t.goto([w0*S+offsetX,w1*S+offsetY]);

        // Window mullions
        if((type==='historic'||type==='traditional')&&detailLevel>0){
          const [wMx,wMy]=proj(cx,cy,cz,i);
          t.jump([wMx*S+offsetX,w1*S+offsetY]);t.goto([wMx*S+offsetX,w5*S+offsetY]);
          t.jump([w0*S+offsetX,wMy*S+offsetY]);t.goto([w2*S+offsetX,wMy*S+offsetY]);
        }
      }
    }

    // Material textures
    if(detailLevel>0){
      const wl=Math.sqrt(dx*dx+dy*dy);
      const drawVLines=(n,zMin,zMax)=>{
        for(let m=1;m<n;m++){
          const t1=m/n;
          const [hx0,hy0]=proj(p[j][0]+dx*t1,p[j][1]+dy*t1,h*zMin,i);
          const [hx1,hy1]=proj(p[j][0]+dx*t1,p[j][1]+dy*t1,h*zMax,i);
          t.jump([hx0*S+offsetX,hy0*S+offsetY]);t.goto([hx1*S+offsetX,hy1*S+offsetY]);
        }
      };
      const drawHLines=(n,zMin,zMax,inset)=>{
        for(let v=1;v<n;v++){
          const zH=h*(zMin+(zMax-zMin)*v/n);
          const [mx0,my0]=proj(p[j][0]+dx*inset,p[j][1]+dy*inset,zH,i);
          const [mx1,my1]=proj(p[k][0]-dx*inset,p[k][1]-dy*inset,zH,i);
          t.jump([mx0*S+offsetX,my0*S+offsetY]);t.goto([mx1*S+offsetX,my1*S+offsetY]);
        }
      };

      if(type==='modern'){
        drawHLines(~~(h*S*0.25*lightIntensity),0.1,0.9,0);
      }else if(type==='chapel'){
        drawVLines(~~(wl*S*0.03*(2-lightIntensity)),0.15,0.85);
        if(detailLevel>1)drawHLines(~~(h*S*0.15*(2-lightIntensity)),0.15,0.85,0);
      }else if(type==='historic'){
        drawVLines(~~(wl*S*0.04*(2-lightIntensity)),0.1,0.9);
        drawHLines(~~(h*S*0.15*(2-lightIntensity)),0.15,0.85,0.05);
      }else{
        drawVLines(~~(wl*S*0.03*(1.5-lightIntensity*0.5)),0.15,0.85);
      }
    }

    // Door
    if(showDoors&&j===0){
      const [dH,dW,dZ]=type==='chapel'?[0.5,0.12,h*0.45]:type==='modern'?[0.5,0.15,h*0.4]:[0.5,0.1,h*0.35];
      const [d0,d1]=proj(p[j][0]+dx*dH-dx*dW*0.5,p[j][1]+dy*dH-dy*dW*0.5,0,i);
      const [d2,d3]=proj(p[j][0]+dx*dH+dx*dW*0.5,p[j][1]+dy*dH+dy*dW*0.5,0,i);
      const [d4,d5]=proj(p[j][0]+dx*dH+dx*dW*0.5,p[j][1]+dy*dH+dy*dW*0.5,dZ,i);
      const [d6,d7]=proj(p[j][0]+dx*dH-dx*dW*0.5,p[j][1]+dy*dH-dy*dW*0.5,dZ,i);
      t.jump([d0*S+offsetX,d1*S+offsetY]);
      t.goto([d2*S+offsetX,d3*S+offsetY]);
      t.goto([d4*S+offsetX,d5*S+offsetY]);
      t.goto([d6*S+offsetX,d7*S+offsetY]);
      t.goto([d0*S+offsetX,d1*S+offsetY]);
    }
  }

  // Roof outline and architectural details
  drawPoly(t,p,i,h);

  // Cornice
  if(detailLevel>0)drawPoly(t,p,i,h*0.95);

  // Roof eaves
  if(showRoofs&&detailLevel>0){
    const c=centroid(p);
    const eaves=p.map(v=>[c[0]+(v[0]-c[0])*1.02,c[1]+(v[1]-c[1])*1.02]);
    drawPoly(t,eaves,i,h*0.98);
  }


  // Chimneys
  if((type==='historic'||type==='traditional')&&showRoofs&&detailLevel>0){
    const rH=h*1.1,cH=rH+h*0.15,cw=0.000008;
    const c=centroid(p);
    const chX=c[0]+(p[0][0]-c[0])*0.3,chY=c[1]+(p[0][1]-c[1])*0.3;

    const [c0x,c0y]=proj(chX-cw,chY-cw,rH,i),[c1x,c1y]=proj(chX+cw,chY-cw,rH,i);
    const [c2x,c2y]=proj(chX+cw,chY+cw,rH,i);
    const [t0x,t0y]=proj(chX-cw,chY-cw,cH,i),[t1x,t1y]=proj(chX+cw,chY-cw,cH,i);
    const [t2x,t2y]=proj(chX+cw,chY+cw,cH,i),[t3x,t3y]=proj(chX-cw,chY+cw,cH,i);

    // Front and right faces
    t.jump([c0x*S+offsetX,c0y*S+offsetY]);t.goto([t0x*S+offsetX,t0y*S+offsetY]);
    t.goto([t1x*S+offsetX,t1y*S+offsetY]);t.goto([c1x*S+offsetX,c1y*S+offsetY]);
    t.jump([c1x*S+offsetX,c1y*S+offsetY]);t.goto([t1x*S+offsetX,t1y*S+offsetY]);
    t.goto([t2x*S+offsetX,t2y*S+offsetY]);t.goto([c2x*S+offsetX,c2y*S+offsetY]);

    // Top
    t.jump([t0x*S+offsetX,t0y*S+offsetY]);t.goto([t1x*S+offsetX,t1y*S+offsetY]);
    t.goto([t2x*S+offsetX,t2y*S+offsetY]);t.goto([t3x*S+offsetX,t3y*S+offsetY]);
    t.goto([t0x*S+offsetX,t0y*S+offsetY]);
  }

  return true;
}
