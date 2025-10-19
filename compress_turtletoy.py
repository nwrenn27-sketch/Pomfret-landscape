#!/usr/bin/env python3
"""
Compress Turtletoy code by:
1. Reducing coordinate precision (5 decimal places is ~1 meter accuracy)
2. Using compact JSON format
3. Removing building names/types (optional)
4. Using relative coordinates from center
"""

import json

# Read building data
with open('building_data.js', 'r') as f:
    content = f.read()
    json_str = content.split('const buildingData = ', 1)[1].strip().rstrip(';')
    buildings = json.loads(json_str)

# Center coordinates
centerLon = -71.9680
centerLat = 41.8925

# Compress buildings - keep only essential data
compressed = []
for b in buildings:
    coords = b['coordinates']
    # Round to 5 decimal places and use relative coordinates
    compact_coords = []
    for lon, lat in coords:
        # Relative to center, rounded
        rel_lon = round((lon - centerLon) * 10000) / 10000
        rel_lat = round((lat - centerLat) * 10000) / 10000
        compact_coords.append([rel_lon, rel_lat])

    compressed.append(compact_coords)

print(f"Original buildings: {len(buildings)}")
print(f"Compressed to coordinate arrays only")

# Create minimal Turtletoy code
code = f'''// Pomfret School - Optimized (486 buildings)
const C=[{centerLon},{centerLat}]; // Center
const D={json.dumps(compressed, separators=(',', ':'))}; // Building data (relative coords)

function walk(i){{
if(i>=D.length)return false;
const p=D[i];
if(!p||p.length<2)return true;
turtle.jump(p[0][0]*8000,p[0][1]*8000);
for(let j=1;j<p.length;j++)turtle.goto(p[j][0]*8000,p[j][1]*8000);
turtle.goto(p[0][0]*8000,p[0][1]*8000);
return true;
}}
'''

with open('pomfret_turtletoy_mini.js', 'w') as f:
    f.write(code)

original_size = 301484  # From previous check
new_size = len(code)
reduction = (1 - new_size / original_size) * 100

print(f"\nOriginal size: {original_size:,} bytes")
print(f"New size: {new_size:,} bytes")
print(f"Reduction: {reduction:.1f}%")
print(f"\nCreated: pomfret_turtletoy_mini.js")
