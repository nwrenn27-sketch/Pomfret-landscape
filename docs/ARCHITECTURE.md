# Technical Architecture

## Overview

This document describes the technical architecture of the Pomfret School Campus 3D Visualization project.

## System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    User Interface                        │
│                    (TurtleToy Web)                       │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────┐
│              JavaScript Rendering Engine                 │
│            (pomfret_3d_enhanced.js)                     │
│                                                          │
│  ┌────────────┐  ┌──────────────┐  ┌────────────────┐  │
│  │ 3D→2D      │  │  Building     │  │  Interactive   │  │
│  │ Projection │  │  Rendering    │  │  Controls      │  │
│  └────────────┘  └──────────────┘  └────────────────┘  │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────┐
│                Building Data Layer                       │
│             (campus_3d_data.js)                         │
│                                                          │
│  • Footprint coordinates (D array)                      │
│  • Building heights (H array)                           │
│  • Roof geometries (ROOFS array)                        │
│  • Metadata (types, names, zones)                       │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────┐
│              Data Generation Layer                       │
│           (generate_3d_campus.py)                       │
│                                                          │
│  • OSM data processing                                   │
│  • Roof geometry calculation                            │
│  • JavaScript code generation                           │
└─────────────────────────────────────────────────────────┘
```

## Core Components

### 1. Projection System

**File**: `pomfret_3d_enhanced.js`
**Function**: `proj(x, y, z, bldgIdx)`

Converts 3D world coordinates to 2D isometric view:

```javascript
function proj(x, y, z, bldgIdx) {
  const explodeZ = explodeView > 0 ? bldgIdx * 0.00015 * explodeView : 0;
  const x1 = x * Math.cos(aZ) - y * Math.sin(aZ);
  const y1 = x * Math.sin(aZ) + y * Math.cos(aZ);
  return [x1, y1 * Math.cos(aX) - (z + explodeZ) * Math.sin(aX)];
}
```

**Key features**:
- Isometric projection with configurable angles (aX, aZ)
- Exploded view support via `explodeZ` offset
- Building-index-aware for proper separation

### 2. Building Rendering

**File**: `pomfret_3d_enhanced.js`
**Function**: `walk(i)`

Renders a single building with:
- Wall faces (with backface culling)
- Windows (type-specific patterns)
- Doors (architectural styles)
- Material textures (brick, glass, stone)
- Roof structures (gabled, chapel, flat)
- Optional labels

**Rendering order**:
1. Walls (visible faces only)
2. Windows and doors
3. Material hatching
4. Roof outline
5. Roof ridge line
6. Building labels (if enabled)

### 3. Material System

**Building Types**:
- **Historic**: Brick pattern (vertical + horizontal courses)
- **Modern**: Glass panels (horizontal lines)
- **Chapel**: Stone blocks (cross-hatching + mortar)
- **Traditional**: Simple siding (vertical lines)

**Pattern density varies by**:
- Building type
- Time of day (lightIntensity)
- Detail level setting

### 4. View System

**View Presets** (0-4):
```javascript
const views = [
  [35, 45, 42000, 2.0, -35, 10],  // 0: Standard
  [15, 45, 45000, 2.5, -20, 30],  // 1: Aerial
  [45, 30, 40000, 1.8, -40, 5],   // 2: Architectural
  [55, 60, 38000, 2.2, -30, 15],  // 3: Dramatic
  [25, 90, 43000, 2.0, -35, 20]   // 4: Visitor
];
```

Each preset defines:
- `aX`: Vertical tilt angle (degrees)
- `aZ`: Horizontal rotation angle (degrees)
- `S`: Scale factor
- `heightMult`: Height multiplier
- `offsetX`: Camera X offset
- `offsetY`: Camera Y offset

### 5. Lighting System

**Time of Day** (0-1):
```javascript
const timeOfDay = 0.5;
const lightIntensity = 0.4 + 0.6 * Math.sin(timeOfDay * Math.PI);
```

- `0.0` = Dawn (dark)
- `0.5` = Noon (brightest)
- `1.0` = Dusk (dark)

Affects hatching density:
- Glass: Less detail in low light
- Brick/Stone: More detail (darker) in low light

## Data Structures

### Building Footprint (D array)

```javascript
const D = [
  [  // Building 0
    [-0.0006607, 0.0007375],  // Point 0
    [-0.0006216, 0.0007379],  // Point 1
    // ... more points
  ],
  // ... more buildings
];
```

### Roof Geometry (ROOFS array)

```javascript
const ROOFS = [
  {
    "base_height": 9.91e-05,
    "type": "gabled",
    "ridge_height": 0.00010901,
    "ridge_line": [
      [-0.00078665, 0.00064105, 0.00010901],  // Ridge start
      [-0.0007626, 0.00070655, 0.00010901]    // Ridge end
    ]
  }
];
```

## Performance Considerations

### Optimization Strategies

1. **Backface Culling**
   ```javascript
   if ((-dy * Math.cos(aZ) + dx * Math.sin(aZ)) > 0) {
     // Only render visible faces
   }
   ```

2. **Detail Level Control**
   - Level 0: No hatching/textures
   - Level 1: Basic hatching
   - Level 2: Full detail (mortar lines, arches, etc.)

3. **Conditional Rendering**
   - Windows: Only when `showWindows === 1`
   - Doors: Only when `showDoors === 1`
   - Landscape: Only when `showLandscape === 1`

### Rendering Complexity

**Per Building**:
- Walls: 4-34 edges × 4 points = 16-136 lines
- Windows: 2-4 rows × 2-4 cols × 4 lines = 16-64 lines
- Hatching: 10-50 lines (varies by type, detail)
- Roof: 2-6 lines

**Total** (12 buildings): ~1000-2000 lines

## Extension Points

### Adding New Buildings

1. Add building data to `generate_3d_campus.py`:
   ```python
   {"name": "New Building",
    "coords": [[x1,y1], [x2,y2], ...],
    "height": 0.0001,
    "type": "modern",
    "zone": "academic"}
   ```

2. Run generator:
   ```bash
   python3 generate_3d_campus.py
   ```

3. Copy data to visualization file

### Adding New Material Types

1. Add type to `T` array
2. Add hatching logic to material texture section:
   ```javascript
   else if (type === 'newtype') {
     // Custom hatching pattern
   }
   ```

### Adding New View Presets

1. Add preset to `views` array:
   ```javascript
   [angleX, angleZ, scale, heightMult, offsetX, offsetY]
   ```

2. Update control comment:
   ```javascript
   const viewPreset=0;/// min=0 max=5 step=1 (...)
   ```

## Dependencies

### Runtime
- **TurtleToy**: Graphics engine (turtle.goto, turtle.jump)
- **JavaScript**: ES6+ features (arrow functions, destructuring)

### Development
- **Python 3.7+**: Data generation
- **Git**: Version control
- **Node.js** (optional): Syntax checking

## Testing

### Manual Testing Checklist

- [ ] All view presets render correctly
- [ ] Camera tour animates smoothly
- [ ] Time-of-day lighting works
- [ ] Exploded view separates buildings
- [ ] Labels appear in correct positions
- [ ] All building types render properly
- [ ] No visual artifacts or glitches

### Validation

```bash
# JavaScript syntax check
node --check pomfret_3d_enhanced.js

# Python data generation
python3 generate_3d_campus.py
```

## Future Improvements

1. **Performance**
   - Level-of-detail (LOD) system
   - Frustum culling
   - Render caching

2. **Features**
   - Interior views
   - Real-time events overlay
   - AR/VR export

3. **Code Quality**
   - Unit tests for projection math
   - Automated visual regression tests
   - Performance benchmarks
