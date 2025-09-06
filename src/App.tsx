import React, { useEffect, useRef } from 'react'

// Declare Unity WebGL types
declare global {
  interface Window {
    createUnityInstance: (canvas: HTMLCanvasElement, config: any, onProgress?: (progress: number) => void) => Promise<any>
  }
}

function App() {
  const gameContainerRef = useRef<HTMLDivElement>(null)
  const unityInstanceRef = useRef<any>(null)

  useEffect(() => {
    const loadUnityGame = async () => {
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

      try {
        // Load Unity WebGL framework first
        const frameworkScript = document.createElement('script')
        frameworkScript.src = '/NFT-Air-Hockey/game/Webgl.framework.js'
        
        await new Promise((resolve, reject) => {
          frameworkScript.onload = resolve
          frameworkScript.onerror = reject
          document.head.appendChild(frameworkScript)
        })

        // Load Unity WebGL loader
        const loaderScript = document.createElement('script')
        loaderScript.src = '/NFT-Air-Hockey/game/Webgl.loader.js'
        
        await new Promise((resolve, reject) => {
          loaderScript.onload = resolve
          loaderScript.onerror = reject
          document.head.appendChild(loaderScript)
        })

        // Create Unity instance
        if (window.createUnityInstance) {
          unityInstanceRef.current = await window.createUnityInstance(canvas, {
            dataUrl: '/NFT-Air-Hockey/game/Webgl.data',
            frameworkUrl: '/NFT-Air-Hockey/game/Webgl.framework.js',
            codeUrl: '/NFT-Air-Hockey/game/Webgl.wasm',
            streamingAssetsUrl: 'StreamingAssets',
            companyName: 'NFT Air Hockey',
            productName: 'NFT Air Hockey',
            productVersion: '1.0',
          }, (progress: number) => {
            console.log(`Loading progress: ${Math.round(progress * 100)}%`)
          })
          
          console.log('Unity WebGL game loaded successfully!')
        } else {
          throw new Error('Unity WebGL not available')
        }
      } catch (error) {
        console.error('Failed to load Unity WebGL game:', error)
        gameContainer.innerHTML = '<p style="color: white; text-align: center;">Failed to load game. Please refresh the page.</p>'
      }
    }

    loadUnityGame()

    // Cleanup function
    return () => {
      if (unityInstanceRef.current) {
        unityInstanceRef.current.Quit()
        unityInstanceRef.current = null
      }
      
      // Remove scripts
      const scripts = document.querySelectorAll('script[src*="/NFT-Air-Hockey/game/"]')
      scripts.forEach(script => script.remove())
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
