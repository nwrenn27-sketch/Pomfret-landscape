# Pomfret School - Line Art Blueprint Rendering

A minimal, line-art visualization of Pomfret School's campus buildings, designed for plotting on a Makelangelo large-format plotter. Inspired by terrain rendering techniques adapted for architectural blueprint-style output.

## Overview

This project renders 486 building footprints from Pomfret School's campus in a clean, structural line-art style. The data is sourced from OpenStreetMap and processed into Turtletoy-compatible code that can be exported to SVG for plotting.

## Key Buildings Included

- Strong Field House
- Pyne Dormitory
- Corzine Athletic Center/Olmsted Student Union (OSU)
- Clark Memorial Chapel
- Pomfret Main House
- Centennial Academics and Art Center
- Plant/Bourne Dormitories
- Dunworth/Pontefract Dormitories
- Seely-Brown Village
- Pomfret Public Library
- And 476+ additional structures

## Files

- **pomfret_complete.js** - Ready-to-use Turtletoy code with embedded building data (MAIN FILE)
- **extract_osm_data.html** - Interactive tool to fetch fresh OpenStreetMap data
- **process_osm_data.py** - Python script to process OSM JSON into building polygons
- **building_data.js** - Extracted building coordinates (486 buildings)
- **osm_raw_data.json** - Raw OpenStreetMap data

## Quick Start - Using with Makelangelo

### Option 1: Use the Ready-Made File (Easiest)

1. Go to [Turtletoy.net](https://turtletoy.net)
2. Click "New" to create a new turtle
3. Copy the entire contents of `pomfret_complete.js`
4. Paste it into the Turtletoy code editor
5. Click "Play" to preview the rendering
6. Click "Export to SVG" (use the menu: ... → Export to SVG)
7. Import the SVG into Makelangelo software
8. Adjust paper size and pen settings
9. Plot!

### Option 2: Fetch Fresh Data

If you want to update the building data or adjust the area:

1. Open `extract_osm_data.html` in your browser
2. Adjust the map view to your desired area
3. Click "Fetch Building Data from OpenStreetMap"
4. Copy the generated data
5. Replace the `buildingData` array in `pomfret_complete.js`

## Makelangelo Settings

### Recommended Configuration

- **Paper size**: Match your Makelangelo Huge model dimensions
- **Pen width**: 0.3-0.5mm for fine architectural detail
- **Feed rate**: 50-80 mm/s
- **Line style**: Single continuous lines (no fill)
- **Pen up/down**: Enabled (code includes pen control)

### Scaling

Adjust the `scale` parameter in the code (line 19) to fit your paper:

```javascript
const scale = 12000; // Larger scale for big plotter
```

- Increase value = larger drawing
- Decrease value = smaller drawing
- Default 12000 is optimized for large format

## Technical Details

### Rendering Method

The code uses Turtletoy's turtle graphics to draw building outlines:

1. Projects geographic coordinates (lon/lat) to Cartesian (x/y)
2. Centers the drawing on the canvas
3. Iterates through each building polygon
4. Draws outlines with pen up/down optimization
5. Minimizes travel time between buildings

### Coordinate System

- Center point: `-71.9680, 41.8925` (Pomfret School campus)
- Projection: Simple Mercator-style scaling
- Y-axis is flipped for correct orientation

### Data Source

Building footprints extracted from OpenStreetMap using Overpass API:
- Bounding box: `41.8775, -71.9880` to `41.9075, -71.9480`
- Total area: ~500 acres (Pomfret School campus)
- Data license: ODbL (OpenStreetMap contributors)

## Customization

### Change Line Weight

```javascript
// In Turtletoy, line weight is controlled by the platform
// Export to SVG and adjust stroke-width in your SVG editor
```

### Filter Buildings by Type

Edit the building data to include only specific building types:

```javascript
const buildingData = allBuildings.filter(b =>
    b.type === 'school' || b.type === 'dormitory'
);
```

### Add Labels

Extend the `drawBuilding` function to add text labels (requires additional Turtletoy functions).

## Troubleshooting

### Drawing Too Large/Small

Adjust the `scale` parameter (line 19)

### Missing Buildings

- Check if buildings exist in OpenStreetMap
- Adjust bounding box in `extract_osm_data.html`
- Re-run data extraction

### Pen Not Lifting Between Buildings

Ensure `penup()` and `pendown()` calls are present in the code

### SVG Export Issues

- Make sure Turtletoy rendering completes before exporting
- Try reducing the number of buildings if the file is too large

## Credits

**Original Concept**: MapBox Renders by llemarie (Turtletoy)
**Terrain Processing**: Tony Chu (@tonyhschu) - Anaglyph Isobands Terrain
**Data Source**: OpenStreetMap contributors
**Adaptation**: Building-focused line art for architectural plotting

## License

- Code: CC BY-NC-SA 4.0
- OpenStreetMap Data: ODbL
- For educational and non-commercial use

## Future Enhancements

- Add pathways and roads
- Include terrain contours
- Multi-layer rendering (buildings, paths, landscaping)
- Color/pen variations by building type
- Label important buildings
- Interactive web preview

---

**Pomfret School Location**: 398 Pomfret Street, Pomfret, CT 06258
**Campus Size**: 500 acres in northeastern Connecticut
