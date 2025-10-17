// Pomfret School - Makelangelo Plotter Version
// Optimized for large-format plotting with pen up/down commands
// Line-art rendering of campus buildings

// Building data for Pomfret School
// Replace this with data from extract_osm_data.html
const buildingData = [
    // Example structure - replace with actual data:
    // {
    //   name: "Main Building",
    //   coordinates: [[-71.968, 41.892], [-71.967, 41.892], [-71.967, 41.891], [-71.968, 41.891], [-71.968, 41.892]]
    // }
];

// Configuration for Makelangelo
const scale = 12000; // Larger scale for big plotter
const centerLon = -71.9680;
const centerLat = 41.8925;
const optimizePath = true; // Minimize pen travel

// Normalize coordinates to canvas space
function projectCoordinate(lon, lat) {
    const x = (lon - centerLon) * scale;
    const y = -(lat - centerLat) * scale; // Flip Y for correct orientation
    return [x, y];
}

// Calculate bounds to center the drawing
function calculateBounds() {
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;

    buildingData.forEach(building => {
        building.coordinates.forEach(coord => {
            const [x, y] = projectCoordinate(coord[0], coord[1]);
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
        });
    });

    return {
        centerX: (minX + maxX) / 2,
        centerY: (minY + maxY) / 2,
        width: maxX - minX,
        height: maxY - minY
    };
}

// Main walk function for Turtletoy
function walk(i) {
    if (i < buildingData.length) {
        const building = buildingData[i];
        drawBuilding(building);
    }

    return i < buildingData.length;
}

function drawBuilding(building) {
    if (!building.coordinates || building.coordinates.length < 2) return;

    const coords = building.coordinates;
    const bounds = calculateBounds();

    // Pen up - move to first point
    const [x0, y0] = projectCoordinate(coords[0][0], coords[0][1]);
    penup();
    goto(x0 - bounds.centerX, y0 - bounds.centerY);
    pendown();

    // Pen down - draw the outline
    for (let i = 1; i < coords.length; i++) {
        const [x, y] = projectCoordinate(coords[i][0], coords[i][1]);
        goto(x - bounds.centerX, y - bounds.centerY);
    }

    // Close the polygon
    const [xEnd, yEnd] = projectCoordinate(coords[0][0], coords[0][1]);
    goto(xEnd - bounds.centerX, yEnd - bounds.centerY);

    penup();
}

// Pen control
function penup() {
    // Makelangelo recognizes this in Turtletoy exports
    turtle.penup();
}

function pendown() {
    turtle.pendown();
}

// Utility: move turtle to absolute position
function goto(x, y) {
    const currentPos = turtle.pt();
    const dx = x - currentPos[0];
    const dy = y - currentPos[1];
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    const distance = Math.sqrt(dx * dx + dy * dy);

    turtle.seth(angle);
    turtle.forward(distance);
}

// Export instructions
const instructions = `
POMFRET SCHOOL - MAKELANGELO VERSION

Setup Instructions:
1. Open extract_osm_data.html in your browser
2. Click "Fetch Building Data" to get building footprints
3. Copy the buildingData array and paste it above (line 7)
4. Open this code on Turtletoy.net
5. Click "Export to SVG"
6. Import the SVG into Makelangelo software
7. Adjust scale parameter (line 19) if needed for your paper size

Recommended Settings for Makelangelo:
- Paper size: Match your Huge model dimensions
- Pen width: 0.3-0.5mm for fine detail
- Feed rate: 50-80 mm/s
- Line style: Single continuous lines (no fill)

The code uses penup/pendown to minimize travel time between buildings.
`;

console.log(instructions);
