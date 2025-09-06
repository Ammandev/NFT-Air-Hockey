import React, { useEffect, useRef } from 'react'

function App() {
  const gameContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadUnityGame = () => {
      if (!gameContainerRef.current) return

      // Clear any existing content
      gameContainerRef.current.innerHTML = ''

      // Create the Unity WebGL container
      const gameContainer = document.createElement('div')
      gameContainer.id = 'unity-container'
      gameContainer.style.width = '100%'
      gameContainer.style.height = '100%'
      gameContainer.style.display = 'flex'
      gameContainer.style.alignItems = 'center'
      gameContainer.style.justifyContent = 'center'

      // Create the Unity canvas
      const canvas = document.createElement('canvas')
      canvas.id = 'unity-canvas'
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      canvas.style.maxWidth = '100vw'
      canvas.style.maxHeight = '100vh'

      gameContainer.appendChild(canvas)
      gameContainerRef.current.appendChild(gameContainer)

      // Load Unity WebGL
      const script = document.createElement('script')
      script.src = '/NFT-Air-Hockey/game/Webgl.loader.js'
      script.onload = () => {
        // The Unity loader will automatically initialize the game
        console.log('Unity WebGL loader loaded successfully')
      }
      script.onerror = () => {
        console.error('Failed to load Unity WebGL loader')
        gameContainer.innerHTML = '<p style="color: white; text-align: center;">Failed to load game. Please refresh the page.</p>'
      }
      document.head.appendChild(script)
    }

    loadUnityGame()

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[src="/NFT-Air-Hockey/game/Webgl.loader.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div style={{ 
      height: '100vh', 
      width: '100vw',
      backgroundColor: '#1a1a1a',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden'
    }}>
      <div style={{ 
        position: 'absolute',
        top: '10px',
        left: '10px',
        zIndex: 1000,
        background: 'rgba(0,0,0,0.7)',
        padding: '10px',
        borderRadius: '5px'
      }}>
        <h1 style={{ margin: '0 0 5px 0', fontSize: '18px' }}>NFT Air Hockey</h1>
        <p style={{ margin: '0', fontSize: '12px', opacity: 0.8 }}>Loading game...</p>
      </div>
      
      <div 
        ref={gameContainerRef}
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'relative'
        }}
      />
    </div>
  )
}

export default App
