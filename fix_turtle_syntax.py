#!/usr/bin/env python3
"""
Fix Turtletoy syntax - turtle.jump() and turtle.goto() take [x,y] arrays
"""

import json

# Read building data
with open('building_data.js', 'r') as f:
    content = f.read()
    json_str = content.split('const buildingData = ', 1)[1].strip().rstrip(';')
    buildings = json.loads(json_str)

# Compress buildings
centerLon = -71.9680
centerLat = 41.8925

compressed = []
for b in buildings:
    coords = b['coordinates']
    compact_coords = []
    for lon, lat in coords:
        rel_lon = round((lon - centerLon) * 10000) / 10000
        rel_lat = round((lat - centerLat) * 10000) / 10000
        compact_coords.append([rel_lon, rel_lat])
    compressed.append(compact_coords)

# Create working Turtletoy code with correct syntax
code = f'''// Pomfret School - Optimized (486 buildings)
const D={json.dumps(compressed, separators=(',', ':'))};

function walk(i){{
if(i>=D.length)return false;
const p=D[i];
if(!p||p.length<2)return true;
turtle.jump([p[0][0]*8000,p[0][1]*8000]);
for(let j=1;j<p.length;j++)turtle.goto([p[j][0]*8000,p[j][1]*8000]);
turtle.goto([p[0][0]*8000,p[0][1]*8000]);
return true;
}}
'''

with open('pomfret_turtletoy_mini.js', 'w') as f:
    f.write(code)

print(f"Fixed Turtletoy syntax!")
print(f"File size: {len(code):,} bytes")
print(f"Total buildings: {len(compressed)}")
print("\nChanges:")
print("- turtle.jump([x, y]) - takes array, not separate params")
print("- turtle.goto([x, y]) - takes array, not separate params")
print("- Uses 'turtle' object (not 'this')")
print("\nReady for Turtletoy!")
