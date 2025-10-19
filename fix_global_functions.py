#!/usr/bin/env python3
"""
Fix to use Turtletoy global functions: jump() and goto()
NOT turtle.jump() - they are standalone global functions
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

# Create working Turtletoy code with GLOBAL functions
code = f'''// Pomfret School - Optimized (486 buildings)
const D={json.dumps(compressed, separators=(',', ':'))};

function walk(i){{
if(i>=D.length)return false;
const p=D[i];
if(!p||p.length<2)return true;
jump([p[0][0]*8000,p[0][1]*8000]);
for(let j=1;j<p.length;j++)goto([p[j][0]*8000,p[j][1]*8000]);
goto([p[0][0]*8000,p[0][1]*8000]);
return true;
}}
'''

with open('pomfret_turtletoy_mini.js', 'w') as f:
    f.write(code)

print(f"Fixed to use GLOBAL functions!")
print(f"File size: {len(code):,} bytes")
print(f"Total buildings: {len(compressed)}")
print("\nCorrect syntax:")
print("- jump([x, y])  <- global function, no 'turtle.' prefix")
print("- goto([x, y])  <- global function, no 'turtle.' prefix")
print("\nReady for Turtletoy!")
