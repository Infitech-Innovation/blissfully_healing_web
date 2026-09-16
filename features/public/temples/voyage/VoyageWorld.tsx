"use client";

import {useEffect,useRef} from "react";
import * as THREE from "three";

const IMG = {
  clouds:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=82&w=2400",
  ocean:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=82&w=2400",
  mountains:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=82&w=2400",
  forest:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=82&w=2400",
  desert:"https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=82&w=2400",
  sanctuary:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=82&w=2400"
};

function curvedPlane(w:number,h:number,bend=.06){
  const geo=new THREE.PlaneGeometry(w,h,48,16);
  const pos=geo.attributes.position;
  for(let i=0;i<pos.count;i++){
    const x=pos.getX(i);
    pos.setZ(i,-Math.pow(x/(w/2),2)*w*bend);
  }
  pos.needsUpdate=true;
  geo.computeVertexNormals();
  return geo;
}

export default function VoyageWorld(){
  const mount=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const el=mount.current; if(!el) return;
    const scene=new THREE.Scene();
    scene.background=new THREE.Color(0x030705);
    scene.fog=new THREE.FogExp2(0x07120d,.014);

    const camera=new THREE.PerspectiveCamera(47,1,.1,800);
    const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.7));
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure=1.0;
    el.appendChild(renderer.domElement);

    const hemi=new THREE.HemisphereLight(0xc4d8cb,0x07100b,1.4); scene.add(hemi);
    const sun=new THREE.DirectionalLight(0xffdfad,2.2); sun.position.set(30,45,20); scene.add(sun);
    const emerald=new THREE.PointLight(0x5aa77a,11,180); emerald.position.set(-15,8,-180); scene.add(emerald);

    const loader=new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");

    function makePortal(url:string,z:number,w:number,h:number,x=0,y=4,rotY=0){
      const tex=loader.load(url);
      tex.colorSpace=THREE.SRGBColorSpace;
      const mat=new THREE.MeshBasicMaterial({map:tex,side:THREE.DoubleSide,toneMapped:false});
      const m=new THREE.Mesh(curvedPlane(w,h,.08),mat);
      m.position.set(x,y,z); m.rotation.y=rotY; scene.add(m);

      // depth frame
      const frameMat=new THREE.MeshBasicMaterial({color:0x07120d,transparent:true,opacity:.7,side:THREE.DoubleSide});
      const frame=new THREE.Mesh(new THREE.PlaneGeometry(w+4,h+4),frameMat);
      frame.position.set(x,y,z+.18); frame.rotation.y=rotY; scene.add(frame);
      m.renderOrder=2; frame.renderOrder=1;
      return m;
    }

    // Real-image worlds become portals the camera physically travels toward.
    const ocean=makePortal(IMG.ocean,-105,72,40,0,2.5,-.02);
    const mountains=makePortal(IMG.mountains,-205,76,42,-3,4,.03);
    const forest=makePortal(IMG.forest,-300,74,42,4,4,-.03);
    const desert=makePortal(IMG.desert,-395,78,44,-2,3,.015);
    const sanctuary=makePortal(IMG.sanctuary,-500,80,45,0,3,0);

    // Foreground layered planes create 2.5D depth around each destination.
    const veilMat=new THREE.MeshBasicMaterial({color:0x0c1a12,transparent:true,opacity:.28,side:THREE.DoubleSide});
    [[-105,0],[-205,0],[-300,0],[-395,0],[-500,0]].forEach(([z])=>{
      const left=new THREE.Mesh(new THREE.PlaneGeometry(13,48),veilMat.clone());
      left.position.set(-33,4,z+10); left.rotation.y=.16; scene.add(left);
      const right=left.clone(); right.position.x=33; right.rotation.y=-.16; scene.add(right);
    });

    // reflective "water" strip linking the first chapters
    const waterMat=new THREE.MeshPhysicalMaterial({color:0x0b2c23,roughness:.18,metalness:.25,clearcoat:1,transparent:true,opacity:.83});
    const water=new THREE.Mesh(new THREE.PlaneGeometry(90,260),waterMat);
    water.rotation.x=-Math.PI/2; water.position.set(0,-4,-175); scene.add(water);

    // Atmospheric particles/clouds
    const cloudGroup=new THREE.Group(); scene.add(cloudGroup);
    const cloudMat=new THREE.MeshBasicMaterial({color:0xe8eee8,transparent:true,opacity:.055,depthWrite:false});
    for(let i=0;i<70;i++){
      const c=new THREE.Mesh(new THREE.PlaneGeometry(12+Math.random()*26,4+Math.random()*11),cloudMat.clone());
      c.position.set((Math.random()-.5)*100,4+Math.random()*35,-15-Math.random()*500);
      c.rotation.y=(Math.random()-.5)*.65;
      cloudGroup.add(c);
    }
    const p=[];
    for(let i=0;i<450;i++) p.push((Math.random()-.5)*90,-1+Math.random()*30,-10-Math.random()*520);
    const pg=new THREE.BufferGeometry(); pg.setAttribute("position",new THREE.Float32BufferAttribute(p,3));
    const motes=new THREE.Points(pg,new THREE.PointsMaterial({color:0xc7d9c7,size:.11,transparent:true,opacity:.42}));
    scene.add(motes);

    // Healing alignment object
    const orb=new THREE.Group(); orb.position.set(0,4,-445); scene.add(orb);
    const gold=new THREE.MeshPhysicalMaterial({color:0xb18a52,metalness:.92,roughness:.13,clearcoat:1});
    const glass=new THREE.MeshPhysicalMaterial({color:0x276a4a,transmission:.58,transparent:true,opacity:.82,roughness:.04,thickness:1.3});
    const rings:THREE.Mesh[]=[];
    [8.2,6.4,4.8,3.2].forEach((r,i)=>{
      const q=new THREE.Mesh(new THREE.TorusGeometry(r,.12,18,180),gold);
      q.rotation.set(.5+i*.4,.2+i*.65,.15*i);orb.add(q);rings.push(q);
    });
    orb.add(new THREE.Mesh(new THREE.IcosahedronGeometry(1.8,3),glass));

    // Camera path: travel through destinations instead of scrolling past them.
    const curve=new THREE.CatmullRomCurve3([
      new THREE.Vector3(0,18,28),
      new THREE.Vector3(0,13,-35),
      new THREE.Vector3(0,7,-82),
      new THREE.Vector3(0,2,-122),
      new THREE.Vector3(-2,5,-175),
      new THREE.Vector3(-3,4,-220),
      new THREE.Vector3(2,4,-270),
      new THREE.Vector3(4,4,-320),
      new THREE.Vector3(0,5,-365),
      new THREE.Vector3(-2,5,-410),
      new THREE.Vector3(0,4,-445),
      new THREE.Vector3(0,4,-475),
      new THREE.Vector3(0,4,-530)
    ],false,"catmullrom",.2);

    let target=0,progress=0,mx=0,my=0;
    const onScroll=()=>{
      const max=Math.max(document.documentElement.scrollHeight-innerHeight,1);
      target=Math.max(0,Math.min(1,scrollY/max));
    };
    const onMove=(e:PointerEvent)=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5};
    addEventListener("scroll",onScroll,{passive:true});
    addEventListener("pointermove",onMove,{passive:true});
    onScroll();

    const resize=()=>{
      renderer.setSize(el.clientWidth,el.clientHeight,false);
      camera.aspect=el.clientWidth/el.clientHeight;
      camera.updateProjectionMatrix();
    };
    const ro=new ResizeObserver(resize); ro.observe(el); resize();

    const clock=new THREE.Clock(); let raf=0;
    const tick=()=>{
      const t=clock.getElapsedTime();
      progress+=(target-progress)*.035;
      const u=Math.min(.998,Math.max(0,progress));
      const pos=curve.getPointAt(u);
      const ahead=curve.getPointAt(Math.min(.999,u+.018));
      camera.position.lerp(pos,.12);
      camera.lookAt(ahead.clone().add(new THREE.Vector3(mx*1.8,-my*1.1,0)));

      water.position.x=Math.sin(t*.18)*.28;
      cloudGroup.children.forEach((c:any,i)=>{c.position.x+=Math.sin(t*.12+i*.4)*.003});
      motes.rotation.y=t*.0022;

      // Healing orb alignment
      const align=Math.max(0,Math.min(1,(progress-.73)/.12));
      rings.forEach((q,i)=>{
        const tx=(1-align)*(.5+i*.4);
        const ty=(1-align)*(.2+i*.65);
        q.rotation.x+=(tx-q.rotation.x)*.03;
        q.rotation.y+=(ty-q.rotation.y)*.03;
        q.rotation.z+=.001*(i+1)*(i%2?1:-1);
      });
      orb.rotation.y=Math.sin(t*.2)*.08;

      // Gradually warm and open world near arrival
      if(progress>.82){
        const q=Math.min(1,(progress-.82)/.13);
        scene.fog!.color.lerpColors(new THREE.Color(0x07120d),new THREE.Color(0x5f725d),q);
        renderer.toneMappingExposure=1+q*.4;
      }else{
        scene.fog!.color.set(0x07120d);
        renderer.toneMappingExposure=1.0;
      }
      renderer.render(scene,camera);
      raf=requestAnimationFrame(tick);
    };
    tick();

    return()=>{
      cancelAnimationFrame(raf);ro.disconnect();
      removeEventListener("scroll",onScroll);removeEventListener("pointermove",onMove);
      renderer.dispose();renderer.domElement.remove();
    };
  },[]);

  return <div className="voyage-world" data-voyage-world ref={mount}/>;
}
