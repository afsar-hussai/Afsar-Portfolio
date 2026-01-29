'use client'

import { useEffect, useRef } from 'react'

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const canvas = canvasRef.current
    if (!canvas) return

    // Dynamically import Three.js only on client side
    import('three').then((THREE) => {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      
      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
      })
      
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)

      // Create Monitor
      const monitorGeometry = new THREE.BoxGeometry(3, 2, 0.3)
      const monitorMaterial = new THREE.MeshBasicMaterial({
        color: 0x00FF41,
        wireframe: true
      })
      const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial)
      scene.add(monitor)

      // Create Screen
      const screenGeometry = new THREE.PlaneGeometry(2.6, 1.6)
      const screenMaterial = new THREE.MeshBasicMaterial({
        color: 0x00FF41,
        opacity: 0.3,
        transparent: true
      })
      const screen = new THREE.Mesh(screenGeometry, screenMaterial)
      screen.position.z = 0.16
      monitor.add(screen)

      camera.position.z = 5

      // Animation
      function animate() {
        requestAnimationFrame(animate)
        monitor.rotation.y += 0.003
        monitor.rotation.x = Math.sin(Date.now() * 0.001) * 0.1
        renderer.render(scene, camera)
      }
      animate()

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    })
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-screen -z-10 opacity-30"
    />
  )
}
