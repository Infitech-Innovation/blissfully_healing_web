"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
export default function AlchemyForms() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(38, 1, .1, 100); camera.position.z = 7;
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6)); renderer.outputColorSpace = THREE.SRGBColorSpace; el.appendChild(renderer.domElement);
        scene.add(new THREE.AmbientLight(0x6b3d12, 2.1));
        const k = new THREE.PointLight(0xffd37c, 30, 18); k.position.set(2.8, 3.4, 5); scene.add(k);
        const r = new THREE.PointLight(0x9b4d0e, 18, 14); r.position.set(-4, -1, 2); scene.add(r);
        const mat = new THREE.MeshPhysicalMaterial({ color: 0xc88a2e, metalness: .92, roughness: .12, clearcoat: 1, clearcoatRoughness: .05 });
        const geo = new THREE.TorusKnotGeometry(1.05, .34, 220, 42, 2, 3);
        const a = new THREE.Mesh(geo, mat), b = new THREE.Mesh(geo, mat); scene.add(a, b);
        a.scale.set(.75, 1.2, .72); b.scale.set(.75, 1.2, .72); a.rotation.z = .55; b.rotation.z = -.55;
        let p = 0, mx = 0, my = 0;
        const update = () => { const s = el.closest(".alchemy") as HTMLElement | null; if (!s) return; const r = s.getBoundingClientRect(); p = Math.max(0, Math.min(1, 1 - (r.top / (innerHeight * .7)))) };
        const move = (e: PointerEvent) => { const q = el.getBoundingClientRect(); mx = (e.clientX - q.left) / q.width - .5; my = (e.clientY - q.top) / q.height - .5 };
        addEventListener("scroll", update, { passive: true }); el.addEventListener("pointermove", move); update();
        const resize = () => { renderer.setSize(el.clientWidth, el.clientHeight, false); camera.aspect = el.clientWidth / el.clientHeight; camera.updateProjectionMatrix() }; resize(); const ro = new ResizeObserver(resize); ro.observe(el);
        let raf = 0; const clock = new THREE.Clock();
        const tick = () => {
            const t = clock.getElapsedTime(); const gap = 1.75 - (p * 1.18); a.position.x = -gap; b.position.x = gap; a.position.y = Math.sin(t * .5) * .05; b.position.y = -Math.sin(t * .45) * .05; a.rotation.y += .002; b.rotation.y -= .002;
            a.rotation.x += (my * .08 - a.rotation.x) * .02; b.rotation.x += (-my * .08 - b.rotation.x) * .02; scene.rotation.y += (mx * .12 - scene.rotation.y) * .02;
            k.intensity = 22 + p * 25; renderer.render(scene, camera); raf = requestAnimationFrame(tick)
        }; tick();
        return () => { cancelAnimationFrame(raf); ro.disconnect(); removeEventListener("scroll", update); el.removeEventListener("pointermove", move); geo.dispose(); mat.dispose(); renderer.dispose(); renderer.domElement.remove() }
    }, []);
    return <div className="alchemyWorld return-alchemyWorld" ref={ref} />;
}
