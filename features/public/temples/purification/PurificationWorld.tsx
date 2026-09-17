"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PurificationWorld() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(38, 1, .1, 100); camera.position.set(0, .25, 7.2);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7)); renderer.outputColorSpace = THREE.SRGBColorSpace; el.appendChild(renderer.domElement);
        scene.add(new THREE.HemisphereLight(0xffffff, 0xb8ccca, 2.2));
        const key = new THREE.PointLight(0xffffff, 18, 18); key.position.set(3, 4, 5); scene.add(key);
        const rim = new THREE.PointLight(0xbdd8d6, 12, 15); rim.position.set(-4, 0, 3); scene.add(rim);
        const group = new THREE.Group(); scene.add(group);

        const geo = new THREE.SphereGeometry(1.35, 96, 96);
        const pos = geo.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < pos.count; i++) { const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i); const n = 1 + .055 * Math.sin(y * 4.2) + .025 * Math.sin(x * 5 + z * 3); pos.setXYZ(i, x * n, y * (1.12 + .035 * Math.cos(x * 3)), z * n) }
        geo.computeVertexNormals();
        const glass = new THREE.MeshPhysicalMaterial({ color: 0xf7ffff, transmission: .93, transparent: true, opacity: .88, roughness: .035, thickness: 1.6, ior: 1.28, clearcoat: 1, clearcoatRoughness: .03 });
        const vessel = new THREE.Mesh(geo, glass); group.add(vessel);

        const liquidGeo = new THREE.SphereGeometry(1.15, 72, 72);
        const liquidMat = new THREE.MeshPhysicalMaterial({ color: 0xcbdedc, transparent: true, opacity: .34, roughness: .05, transmission: .45 });
        const liquid = new THREE.Mesh(liquidGeo, liquidMat); liquid.scale.y = .82; liquid.position.y = -.18; group.add(liquid);

        const ringMat = new THREE.MeshBasicMaterial({ color: 0x9eb4b1, transparent: true, opacity: .24 });
        const rings: THREE.Mesh[] = [];
        [1.8, 2.15].forEach((r, i) => { const m = new THREE.Mesh(new THREE.TorusGeometry(r, .008, 8, 160), ringMat); m.rotation.x = 1.35 + i * .18; m.rotation.y = i * .4; group.add(m); rings.push(m) });

        const shadow = new THREE.Mesh(new THREE.CircleGeometry(2.1, 80), new THREE.MeshBasicMaterial({ color: 0x90aaa7, transparent: true, opacity: .12 }));
        shadow.scale.y = .18; shadow.position.y = -2.05; shadow.rotation.x = -Math.PI / 2; scene.add(shadow);

        let progress = 0, mx = 0, my = 0;
        const scroll = () => { const max = Math.max(document.documentElement.scrollHeight - innerHeight, 1); progress = scrollY / max };
        const move = (e: PointerEvent) => { const r = el.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - .5; my = (e.clientY - r.top) / r.height - .5 };
        addEventListener("scroll", scroll, { passive: true }); el.addEventListener("pointermove", move); scroll();

        const resize = () => { const w = el.clientWidth, h = el.clientHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix() }; resize(); const ro = new ResizeObserver(resize); ro.observe(el);
        const clock = new THREE.Clock(); let raf = 0;
        const tick = () => {
            const t = clock.getElapsedTime(); group.rotation.y += (mx * .22 - group.rotation.y) * .025; group.rotation.x += ((-my * .08 + Math.min(progress / .24, 1) * .34) - group.rotation.x) * .025; group.position.y = Math.sin(t * .45) * .035;
            liquid.rotation.z = -group.rotation.x * .65; rings[0].rotation.z += .0008; rings[1].rotation.z -= .0006;
            renderer.render(scene, camera); raf = requestAnimationFrame(tick)
        }; tick();
        return () => { cancelAnimationFrame(raf); ro.disconnect(); removeEventListener("scroll", scroll); el.removeEventListener("pointermove", move); renderer.dispose(); geo.dispose(); liquidGeo.dispose(); glass.dispose(); liquidMat.dispose(); ringMat.dispose(); renderer.domElement.remove() }
    }, []);
    return <div className="purity-world" ref={ref} />;
}
