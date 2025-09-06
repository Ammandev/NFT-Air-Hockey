import React from 'react'

function App() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#1a1a1a',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>NFT Air Hockey</h1>
        <p>Game coming soon...</p>
        <div style={{ 
          width: '400px', 
          height: '200px', 
          border: '2px solid #333', 
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '20px auto',
          backgroundColor: '#2a2a2a'
        }}>
          <p>Unity WebGL Game will be embedded here</p>
        </div>
      </div>
    </div>
  )
}

export default App
