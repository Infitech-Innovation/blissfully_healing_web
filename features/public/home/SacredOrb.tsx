"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
function Orb() { const r = useRef<THREE.Mesh>(null); useFrame((s, d) => { if (!r.current) return; r.current.rotation.y += d * .08; r.current.position.x = THREE.MathUtils.damp(r.current.position.x, s.pointer.x * .18, 2, d); r.current.position.y = THREE.MathUtils.damp(r.current.position.y, s.pointer.y * .12, 2, d) }); return <Float speed={.7} rotationIntensity={.08} floatIntensity={.18}><mesh ref={r}><sphereGeometry args={[1.55, 96, 96]} /><meshPhysicalMaterial color="#17130e" metalness={.08} roughness={.04} transmission={.92} thickness={2.5} ior={1.45} clearcoat={1} /></mesh><pointLight color="#d8ae68" intensity={16} distance={8} position={[.2, .1, 1]} /></Float> }
export default function SacredOrb() { return <div className="orb"><Canvas camera={{ position: [0, 0, 6], fov: 40 }}><ambientLight intensity={.45} /><directionalLight position={[-4, 5, 4]} intensity={4} color="#f0d29c" /><Orb /><Environment preset="night" /></Canvas></div> }
