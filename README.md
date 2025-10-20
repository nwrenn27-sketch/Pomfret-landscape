# Pomfret School Campus - Architectural Line Drawing

Architectural line-art visualization of Pomfret School's 5 key buildings for Turtletoy/Makelangelo plotting.

## Final Output

**`pomfret_campus.js`** - Turtletoy code rendering 5 key campus buildings with distinctive architectural features

### Features
- View from southwest looking northeast (225° rotation, 25° tilt)
- Architectural details based on actual building photographs
- Distinctive features for each building style
- Optimized scale (25,000x) for clear visibility
- Clean line-art suitable for pen plotting

## Buildings Included

### 5 Key Buildings
1. **VISTA** - Modern science building with vertical metal panel lines (3 stories, 9m)
2. **Centennial** - Academic/arts building with peaked roofs and cupola (2 stories, 8m)
3. **The Bricks (Dunworth/Pontefract)** - Georgian dormitories with dormers (3 stories, 11m)
4. **School Building** - Collegiate Georgian with tall cupola tower (4 stories, 12m)
5. **Clark Memorial Chapel** - Norman stone with simple peaked roof (1 story, 12m vaulted)

### Architectural Features Captured
- **VISTA**: Vertical metal panel lines (8 panels per visible wall)
- **Centennial & School Building**: Cupola/bell towers on rooftops
- **Traditional buildings**: Multiple peaked roof sections
- **The Bricks**: Georgian floor lines and dormers
- **Chapel**: Simple peaked roof with ridge

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
- **`pomfret_campus.js`** - Final architectural line drawing (5 buildings)
- **`building_heights_reference.json`** - Research-based building measurements
- **`final_campus_buildings.json`** - Original 12 buildings dataset (for reference)

### Data Tools
- **`extract_osm_data.html`** - Interactive OSM data extractor
- **`extract_detailed_buildings.html`** - Enhanced shape extractor
- **`extract_3d_buildings.html`** - Height data extractor
- **`process_osm_data.py`** - Converts OSM JSON to JavaScript
- **`generate_final_turtletoy.py`** - Generates Turtletoy code

### Reference Data
- **`building_data.js`** - Full OSM data (486 buildings)
- **`detailed_building_shapes.json`** - Complex footprints with all points
- **`osm_detailed_buildings.json`** - Raw OSM data

## Technical Details

### Viewing Angle
```javascript
angleX = 25° (tilt down from horizontal)
angleZ = 225° (view from southwest, looking northeast)
scale = 25,000 (optimized for 5 buildings)
```

### Coordinate System
- **Center**: 41.8862°N, 71.9640°W (Pomfret campus core)
- **Normalized center**: (0.0001641, -0.0009395)
- **Buildings positioned relative to center**

### Building Heights (coordinate units)
- Chapel: 0.0012 (12m vaulted ceiling)
- School Building: 0.0012 (4 stories)
- The Bricks: 0.0011 (3 stories)
- VISTA: 0.0009 (3 stories)
- Centennial: 0.0008 (2 stories)

## Architectural Research

Building designs based on actual photographs and architectural documentation:
- VISTA designed by Annum Architects (2024)
- Historical buildings by Ernest Flagg (1905-1915)
- Centennial Building by Centerbrook Architects
- Research from pomfret.org and architectural firm websites

## Data Source

Building footprints from OpenStreetMap via Overpass API:
- **License**: ODbL (OpenStreetMap contributors)
- **Coverage**: Pomfret School campus, northeastern Connecticut
- **Buildings**: 486 total in dataset, 5 selected for final visualization

## Credits

**School**: Pomfret School, Pomfret, CT
**Data**: OpenStreetMap contributors
**Platform**: Turtletoy.net
**Plotter**: Makelangelo Huge model
**Visualization**: Architectural line drawing with photo-based details
