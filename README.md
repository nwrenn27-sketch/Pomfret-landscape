# Pomfret School Campus - 3D Isometric Visualization

3D isometric visualization of Pomfret School's core campus buildings for Turtletoy/Makelangelo plotting.

## Final Output

**`pomfret_campus.js`** - Turtletoy code rendering 12 core campus buildings in 3D isometric perspective

### Features
- 3D isometric projection (30° tilt, 45° rotation)
- Varying building heights based on structure type
- Architectural detail lines (floor markers on visible walls)
- Optimized scale (80,000x) for canvas fill
- Clean, blueprint-style aesthetic

## Buildings Included

### Named Buildings (7)
- Pyne Dormitory
- Corzine Athletic Center/Olmsted Student Union (OSU)
- Clark Memorial Chapel
- Pomfret Main House
- Centennial Academics and Art Center
- Plant/Bourne Dormitories
- Dunworth/Pontefract Dormitories

### Additional Key Buildings (5)
- Vista (Science Building)
- DuPont Library
- 3 other core academic/administrative buildings

## Quick Start

### Using on Turtletoy
1. Go to https://turtletoy.net/turtle/new
2. Copy contents of `pomfret_campus.js`
3. Paste into editor
4. Click "Run" to see visualization

### Exporting for Makelangelo Plotter
1. Run on Turtletoy
2. Export as SVG (... menu → Export to SVG)
3. Import SVG to Makelangelo software
4. Configure for Makelangelo Huge model
5. Plot!

### Makelangelo Settings
- **Pen width**: 0.3-0.5mm
- **Feed rate**: 50-80 mm/s
- **Line style**: Single continuous lines (no fill)

## Project Files

### Essential Files
- **`pomfret_campus.js`** - Final 3D isometric Turtletoy code
- **`final_campus_buildings.json`** - Selected 12 buildings dataset
- **`building_data.js`** - Full OSM building data (486 buildings, for reference)

### Data Pipeline Tools
- **`extract_osm_data.html`** - Interactive OSM data extractor
- **`process_osm_data.py`** - Converts OSM JSON to JavaScript
- **`generate_final_turtletoy.py`** - Generates Turtletoy code from selection

## Technical Details

### 3D Projection Algorithm
```javascript
// Isometric angles
angleX = 30° (tilt down)
angleZ = 45° (rotate around vertical axis)

// Coordinate transformation: geographic → 3D → 2D isometric
project3D(x, y, z) {
  // Rotate around Z axis (horizontal rotation)
  x1 = x * cos(angleZ) - y * sin(angleZ)
  y1 = x * sin(angleZ) + y * cos(angleZ)

  // Tilt down (rotate around X axis)
  y2 = y1 * cos(angleX) - z * sin(angleX)

  return [x1, y2]
}
```

### Coordinate System
- **Center**: 41.8862°N, 71.9640°W (Pomfret campus core)
- **Scale**: 80,000x (optimized for full canvas usage)
- **Offset**: (0, 200) for vertical centering

### Building Heights
Heights assigned based on building type (in coordinate units):
- **Tall buildings** (Chapel, Academic): 0.0011-0.0012
- **Medium buildings** (Dorms): 0.0008-0.0009
- **Short buildings** (Single-story): 0.0005-0.0006

### Architectural Details
- Floor lines drawn at regular intervals (every 0.0002 units)
- Visible face detection (only draws lines on viewer-facing walls)
- Base, roof, and vertical edges all rendered

## Regenerating from Source

If you need to modify building selection or update data:

### 1. Extract Fresh OSM Data (if needed)
```bash
# Open in browser
open extract_osm_data.html

# Adjust bounding box on map
# Click "Fetch Building Data"
# Save results
```

### 2. Process OSM Data
```bash
python3 process_osm_data.py
```

### 3. Select Buildings
Manually edit `final_campus_buildings.json` or create new filter script based on:
- Building coordinates
- Building names
- Bounding box filters

### 4. Generate Turtletoy Code
```bash
python3 generate_final_turtletoy.py
```

## Customization

### Adjust Viewing Angle
```javascript
const angleX = 30 * Math.PI / 180;  // Change tilt (20-40° recommended)
const angleZ = 45 * Math.PI / 180;  // Change rotation (any angle)
```

### Adjust Scale
```javascript
const scale = 80000;  // Increase for larger, decrease for smaller
```

### Modify Building Heights
```javascript
const heights = [0.0008, 0.0012, ...];  // One value per building
```

### Add More Detail Lines
```javascript
const numFloors = Math.floor(h / 0.0002);  // Decrease divisor for more floors
```

## Data Source

Building footprints from OpenStreetMap via Overpass API:
- **License**: ODbL (OpenStreetMap contributors)
- **Coverage**: Pomfret School campus, northeastern Connecticut
- **Buildings**: 486 total in dataset, 12 selected for visualization

## Repository

https://github.com/nwrenn27-sketch/Pomfret-landscape

## Credits

**School**: Pomfret School, Pomfret, CT
**Data**: OpenStreetMap contributors
**Platform**: Turtletoy.net
**Plotter**: Makelangelo Huge model
**Visualization**: 3D isometric building rendering
