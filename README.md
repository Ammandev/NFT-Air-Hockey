# NFT Air Hockey Game

A Unity WebGL game with custom loading screen, ready for Vercel deployment.

## Features

- 🎮 Unity WebGL game integration
- ⚡ Custom loading screen with progress bar
- 📱 Responsive design
- 🚀 Optimized for Vercel deployment
- 🎨 Beautiful gradient background
- ⌨️ Fullscreen support (F11 key)

## Project Structure

```
├── index.html              # Main HTML file with loading screen
├── package.json            # Node.js dependencies and scripts
├── vercel.json            # Vercel deployment configuration
├── README.md              # This file
└── public/
    └── game/
        ├── Build/
        │   ├── Webgl.data
        │   ├── Webgl.framework.js
        │   ├── Webgl.loader.js
        │   └── Webgl.wasm
        └── StreamingAssets/
            └── UnityServicesProjectConfiguration.json
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Vercel will automatically detect the configuration and deploy

### Option 3: Manual Upload

1. Zip the entire project folder
2. Go to Vercel dashboard
3. Create new project
4. Upload the zip file

## Configuration

The game is configured to load from the `public/game/Build/` directory. Make sure your Unity WebGL build files are in the correct location:

- `Webgl.data` - Game data file
- `Webgl.framework.js` - Unity framework
- `Webgl.loader.js` - Unity loader script
- `Webgl.wasm` - WebAssembly binary

## Customization

### Loading Screen
The loading screen can be customized by editing the CSS in `index.html`:
- Change colors in the gradient background
- Modify the logo text
- Adjust spinner and progress bar styles

### Game Settings
Unity WebGL settings can be modified in the JavaScript configuration object in `index.html`.

## Browser Support

- Chrome 57+
- Firefox 52+
- Safari 11+
- Edge 16+

## Performance

The game is optimized for web deployment with:
- Proper caching headers for static assets
- Compressed Unity WebGL build
- Efficient loading progress tracking
- Responsive design for all screen sizes

## Troubleshooting

### Game Not Loading
1. Check browser console for errors
2. Verify all Unity build files are present
3. Ensure proper CORS headers (handled by vercel.json)

### Loading Screen Issues
1. Check if CSS is loading properly
2. Verify JavaScript console for errors
3. Test on different browsers

### Performance Issues
1. Ensure Unity build is optimized for WebGL
2. Check file sizes of build assets
3. Consider enabling compression in Unity build settings

## License

MIT License - feel free to use and modify as needed.
