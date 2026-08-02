"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const BAR_COUNT = 84;
const RADIUS = 3.4;
const ACCENT_CYAN = "#22d3ee";
const ACCENT_VIOLET = "#a78bfa";
const BAR_COLOR = "#3f3f46";

export default function SoundVisualizer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let raf = 0;
    let renderer: THREE.WebGLRenderer | null = null;

    try {
      const width = container.clientWidth || 1;
      const height = container.clientHeight || 1;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
      camera.position.set(0, 4.6, 10);
      camera.lookAt(0, 0.8, 0);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      const bars: THREE.Mesh[] = [];
      const speeds: number[] = [];
      const phases: number[] = [];
      const heights: number[] = [];
      const targets: number[] = [];

      const cyan = new THREE.Color(ACCENT_CYAN);
      const violet = new THREE.Color(ACCENT_VIOLET);
      const base = new THREE.Color(BAR_COLOR);
      const color = new THREE.Color();

      for (let i = 0; i < BAR_COUNT; i++) {
        const angle = (i / BAR_COUNT) * Math.PI * 2;
        const geometry = new THREE.BoxGeometry(0.14, 1, 0.14);
        const material = new THREE.MeshBasicMaterial();
        const bar = new THREE.Mesh(geometry, material);
        bar.position.x = Math.cos(angle) * RADIUS;
        bar.position.z = Math.sin(angle) * RADIUS;
        bar.rotation.y = -angle;

        color.copy(base).lerp(cyan, Math.abs(Math.sin(angle * 3)));
        color.lerp(violet, Math.abs(Math.cos(angle * 2)) * 0.5);
        material.color.copy(color);

        group.add(bar);
        bars.push(bar);
        speeds.push(0.9 + Math.random() * 1.5);
        phases.push(Math.random() * Math.PI * 2);
        heights.push(1);
        targets.push(1);
      }

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(RADIUS, 0.035, 8, 120),
        new THREE.MeshBasicMaterial({ color: ACCENT_VIOLET, transparent: true, opacity: 0.5 })
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.02;
      group.add(ring);

      const innerRing = new THREE.Mesh(
        new THREE.TorusGeometry(RADIUS * 0.62, 0.02, 8, 120),
        new THREE.MeshBasicMaterial({ color: ACCENT_CYAN, transparent: true, opacity: 0.35 })
      );
      innerRing.rotation.x = Math.PI / 2;
      innerRing.position.y = 0.02;
      group.add(innerRing);

      const grid = new THREE.GridHelper(RADIUS * 3.4, 20, 0x1f1f26, 0x16161b);
      grid.position.y = -0.02;
      scene.add(grid);

      const clock = new THREE.Clock();

      const animate = () => {
        raf = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        for (let i = 0; i < BAR_COUNT; i++) {
          const wave =
            Math.sin(t * speeds[i] + phases[i]) * 0.5 +
            Math.sin(t * 1.9 + i * 0.35) * 0.5;
          targets[i] = 0.55 + (wave * 0.5 + 0.5) * 1.6;
          heights[i] += (targets[i] - heights[i]) * 0.12;
          bars[i].scale.y = heights[i];
          bars[i].position.y = heights[i] / 2;
        }

        ring.scale.setScalar(1 + Math.sin(t * 0.9) * 0.05);
        innerRing.rotation.z = t * 0.2;

        group.rotation.y = t * 0.12;
        camera.position.x = Math.sin(t * 0.14) * 1.2;
        camera.position.z = 10 + Math.cos(t * 0.14) * 1.2;
        camera.lookAt(0, 0.8, 0);

        renderer?.render(scene, camera);
      };

      animate();

      const onResize = () => {
        const w = container.clientWidth || 1;
        const h = container.clientHeight || 1;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer?.setSize(w, h);
      };

      const resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(container);
      window.addEventListener("resize", onResize);

      const dispose = () => {
        cancelAnimationFrame(raf);
        resizeObserver.disconnect();
        window.removeEventListener("resize", onResize);
        bars.forEach((bar) => {
          bar.geometry.dispose();
          (bar.material as THREE.Material).dispose();
        });
        ring.geometry.dispose();
        (ring.material as THREE.Material).dispose();
        innerRing.geometry.dispose();
        (innerRing.material as THREE.Material).dispose();
        grid.dispose();
        renderer?.dispose();
        renderer?.domElement.remove();
      };

      return dispose;
    } catch (error) {
      console.error("SoundVisualizer: WebGL could not be initialized", error);
      return undefined;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="md:ml-150 sm:ml-50 absolute inset-0 pointer-events-none"
    />
  );
}
