"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  AdditiveBlending,
  Color,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  ShaderMaterial,
  TextureLoader,
} from "three";

const lotusSrc = "/images/hero-lotus-cutout.png";

type UniformMaterial = ShaderMaterial & {
  uniforms: {
    uTime: { value: number };
    uTexture?: { value: unknown };
  };
};

function WaterSurface() {
  const materialRef = useRef<UniformMaterial | null>(null);

  const material = useMemo(
    () =>
      new ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
          uDeep: { value: new Color("#020605") },
          uGlow: { value: new Color("#c9a96c") },
          uTeal: { value: new Color("#304844") },
        },
        vertexShader: `
          uniform float uTime;
          varying vec2 vUv;
          varying float vWave;

          void main() {
            vUv = uv;
            vec3 transformed = position;
            float waveA = sin((position.x * 1.9 + uTime * 0.42)) * 0.035;
            float waveB = sin((position.y * 2.7 - uTime * 0.34)) * 0.025;
            float waveC = sin((position.x + position.y) * 3.2 + uTime * 0.22) * 0.018;
            vWave = waveA + waveB + waveC;
            transformed.z += vWave;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform vec3 uDeep;
          uniform vec3 uGlow;
          uniform vec3 uTeal;
          varying vec2 vUv;
          varying float vWave;

          float ring(vec2 uv, vec2 center, float radius, float width) {
            float d = distance(uv, center);
            return smoothstep(width, 0.0, abs(d - radius));
          }

          void main() {
            vec2 uv = vUv;
            float shimmer =
              sin((uv.x * 72.0) + uTime * 1.2) * 0.018 +
              sin((uv.y * 92.0) - uTime * 0.9) * 0.014;
            float horizon = smoothstep(0.28, 0.95, uv.y);
            float centerLight = 1.0 - smoothstep(0.0, 0.54, distance(uv, vec2(0.5, 0.58)));
            float ripples =
              ring(uv, vec2(0.5, 0.55), 0.08 + mod(uTime * 0.018, 0.34), 0.006) +
              ring(uv, vec2(0.5, 0.55), 0.18 + mod(uTime * 0.014, 0.38), 0.005) * 0.65 +
              ring(uv, vec2(0.5, 0.55), 0.30 + mod(uTime * 0.011, 0.32), 0.004) * 0.42;

            vec3 color = mix(uDeep, uTeal, horizon * 0.48);
            color += uGlow * (centerLight * 0.16 + ripples * 0.18 + shimmer + vWave * 1.4);
            float alpha = 0.92 - smoothstep(0.0, 0.18, uv.y) * 0.12;

            gl_FragColor = vec4(color, alpha);
          }
        `,
      }),
    []
  );

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -0.16, 0.08]}>
      <planeGeometry args={[38, 38, 180, 180]} />
      <primitive object={material} attach="material" ref={materialRef} />
    </mesh>
  );
}

function ReflectionLotus() {
  const texture = useLoader(TextureLoader, lotusSrc);
  const materialRef = useRef<UniformMaterial | null>(null);

  const material = useMemo(
    () =>
      new ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: DoubleSide,
        uniforms: {
          uTime: { value: 0 },
          uTexture: { value: texture },
        },
        vertexShader: `
          uniform float uTime;
          varying vec2 vUv;

          void main() {
            vUv = uv;
            vec3 transformed = position;
            transformed.x += sin((position.y * 8.0) + uTime * 1.15) * 0.035;
            transformed.y += sin((position.x * 7.0) - uTime * 0.85) * 0.018;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
          }
        `,
        fragmentShader: `
          uniform sampler2D uTexture;
          uniform float uTime;
          varying vec2 vUv;

          void main() {
            vec2 uv = vUv;
            uv.x += sin((uv.y * 34.0) + uTime * 1.7) * 0.018;
            uv.y += sin((uv.x * 24.0) - uTime * 1.1) * 0.01;
            vec4 tex = texture2D(uTexture, uv);
            float fade = smoothstep(0.02, 0.3, uv.y) * (1.0 - smoothstep(0.62, 1.0, uv.y));
            float broken = 0.78 + sin((uv.y * 72.0) + uTime * 2.0) * 0.12;
            vec3 waterTint = vec3(0.53, 0.42, 0.23);

            gl_FragColor = vec4(mix(tex.rgb, waterTint, 0.45), tex.a * fade * broken * 0.38);
          }
        `,
      }),
    [texture]
  );

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <mesh position={[0, -1.08, -0.08]} scale={[3.3, -1.9, 1]} rotation-x={-0.18}>
      <planeGeometry args={[1.35, 1]} />
      <primitive object={material} attach="material" ref={materialRef} />
    </mesh>
  );
}

function FloatingLotus() {
  const texture = useLoader(TextureLoader, lotusSrc);
  const meshRef = useRef<Mesh<PlaneGeometry, MeshBasicMaterial> | null>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) {
      return;
    }

    const time = clock.elapsedTime;
    meshRef.current.position.y = -0.22 + Math.sin(time * 0.84) * 0.035;
    meshRef.current.rotation.z = Math.sin(time * 0.46) * 0.018;
    meshRef.current.rotation.x = -0.18 + Math.sin(time * 0.62) * 0.012;
  });

  return (
    <mesh ref={meshRef} position={[0, -0.22, 0.06]} scale={[3.35, 2.85, 1]} rotation-x={-0.18}>
      <planeGeometry args={[1.35, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        depthWrite={false}
        toneMapped={false}
        side={DoubleSide}
      />
    </mesh>
  );
}

function ContactRipples() {
  const materialRef = useRef<UniformMaterial | null>(null);

  const material = useMemo(
    () =>
      new ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: AdditiveBlending,
        uniforms: { uTime: { value: 0 } },
        vertexShader: `
          varying vec2 vUv;

          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime;
          varying vec2 vUv;

          float ellipseRing(vec2 uv, float radius, float width) {
            vec2 p = (uv - 0.5) * vec2(1.0, 2.55);
            float d = length(p);
            return smoothstep(width, 0.0, abs(d - radius));
          }

          void main() {
            float r1 = ellipseRing(vUv, 0.15 + mod(uTime * 0.035, 0.38), 0.012);
            float r2 = ellipseRing(vUv, 0.32 + mod(uTime * 0.026, 0.34), 0.01);
            float r3 = ellipseRing(vUv, 0.48 + mod(uTime * 0.018, 0.24), 0.008);
            float fade = 1.0 - smoothstep(0.0, 0.72, length((vUv - 0.5) * vec2(1.0, 2.2)));
            vec3 color = vec3(0.78, 0.62, 0.36);
            gl_FragColor = vec4(color, (r1 + r2 * 0.62 + r3 * 0.42) * fade * 0.45);
          }
        `,
      }),
    []
  );

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -0.635, 0.18]} scale={[4.2, 2.2, 1]}>
      <planeGeometry args={[1, 1]} />
      <primitive object={material} attach="material" ref={materialRef} />
    </mesh>
  );
}

function StillnessScene() {
  return (
    <>
      <ambientLight intensity={0.28} />
      <pointLight position={[0, 3.2, 2.2]} color="#f2c878" intensity={7.2} distance={7} />
      <WaterSurface />
      <ReflectionLotus />
      <ContactRipples />
      <FloatingLotus />
    </>
  );
}

export function WaterLotusScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 2.15, 5.45], fov: 38, near: 0.1, far: 60 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <StillnessScene />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(255,224,164,0.11),transparent_21rem),linear-gradient(180deg,rgba(0,0,0,0.3),transparent_38%,rgba(0,0,0,0.48))]" />
    </div>
  );
}
