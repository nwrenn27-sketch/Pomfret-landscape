# Adding Project Screenshots

To make your GitHub repository more professional, add visual examples of your project.

## Recommended Screenshots

### 1. Hero Image (Main View)
**File**: `docs/images/hero.png`
- Standard view (viewPreset=0)
- Medium detail level
- Midday lighting (timeOfDay=0.5)
- All features enabled

### 2. Feature Showcase

**View Presets** (`docs/images/view-presets.png`)
- Grid showing all 5 view presets side by side

**Materials** (`docs/images/materials.png`)
- Close-up of different building types showing textures

**Lighting** (`docs/images/lighting.png`)
- Dawn, noon, and dusk comparison

**Exploded View** (`docs/images/exploded.png`)
- Buildings separated vertically (explodeView=0.5)

## How to Capture Screenshots

### In TurtleToy

1. **Load your code** in TurtleToy
2. **Adjust parameters** for desired view
3. **Right-click on canvas** → Save image as...
4. **Save to** `docs/images/` folder

### Recommended Settings

```javascript
// Hero shot
const viewPreset = 0;
const detailLevel = 1;
const timeOfDay = 0.5;
const showWindows = 1;
const showRoofs = 1;
const showLandscape = 1;
const showLabels = 0;
```

## Image Specifications

- **Format**: PNG (transparency supported)
- **Size**: 1200x800px minimum
- **Quality**: High resolution for GitHub display
- **Compression**: Optimize with tools like TinyPNG

## Directory Structure

```
docs/
└── images/
    ├── hero.png                 # Main screenshot
    ├── view-presets.png         # View comparison
    ├── materials.png            # Material textures
    ├── lighting.png             # Time of day
    ├── exploded.png            # Exploded view
    └── animated-tour.gif       # Optional: animated demo
```

## Adding to README

Once you have images, update README.md:

```markdown
## Demo

![Pomfret Campus 3D View](docs/images/hero.png)

### Features

| View Presets | Material Textures |
|--------------|-------------------|
| ![Views](docs/images/view-presets.png) | ![Materials](docs/images/materials.png) |

| Time of Day Lighting | Exploded View |
|---------------------|---------------|
| ![Lighting](docs/images/lighting.png) | ![Exploded](docs/images/exploded.png) |
```

## Optional: Animated GIF

Create an animated tour:

1. Record screen while `animTour` cycles from 0 to 1
2. Convert to GIF using tools like:
   - **GIPHY Capture** (Mac)
   - **ScreenToGif** (Windows)
   - **Online**: ezgif.com

3. Save as `docs/images/animated-tour.gif`
4. Add to README:
   ```markdown
   ![Animated Tour](docs/images/animated-tour.gif)
   ```

## Tips for Great Screenshots

✅ **Do**:
- Use consistent lighting and detail levels
- Capture at high resolution
- Show most interesting angle
- Include multiple buildings in frame
- Optimize file sizes

❌ **Don't**:
- Use low quality/pixelated images
- Include browser UI elements
- Forget to show key features
- Upload massive uncompressed files
