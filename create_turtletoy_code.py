#!/usr/bin/env python3
"""
Create properly formatted Turtletoy code with building data
"""

import json

# Read building data
with open('building_data.js', 'r') as f:
    content = f.read()
    # Extract just the JSON array
    json_str = content.split('const buildingData = ', 1)[1].strip().rstrip(';')
    buildings = json.loads(json_str)

# Create the Turtletoy code
turtletoy_code = '''// Pomfret School - Turtletoy Line Art
// 486 building footprints - Blueprint style
// Ready for Makelangelo plotter

const scale = 8000;
const centerLon = -71.9680;
const centerLat = 41.8925;

const buildingData = ''' + json.dumps(buildings, indent=2) + ''';

// Project geographic coordinates to canvas
function project(lon, lat) {
    const x = (lon - centerLon) * scale;
    const y = -(lat - centerLat) * scale;
    return [x, y];
}

// Main Turtletoy walk function
function walk(i) {
    if (i >= buildingData.length) return false;

    const building = buildingData[i];
    if (!building.coordinates || building.coordinates.length < 2) {
        return true;
    }

    // Draw building outline
    const coords = building.coordinates;

    // Jump to first point (pen up)
    const [x0, y0] = project(coords[0][0], coords[0][1]);
    turtle.jump(x0, y0);

    // Draw outline (pen down)
    for (let j = 1; j < coords.length; j++) {
        const [x, y] = project(coords[j][0], coords[j][1]);
        turtle.goto(x, y);
    }

    // Close polygon
    turtle.goto(x0, y0);

    return true;
}
'''

# Write the file
with open('pomfret_turtletoy_working.js', 'w') as f:
    f.write(turtletoy_code)

print('Created pomfret_turtletoy_working.js')
print(f'Total buildings: {len(buildings)}')
print(f'File size: {len(turtletoy_code)} bytes')
print('\nReady to copy-paste into Turtletoy.net!')
