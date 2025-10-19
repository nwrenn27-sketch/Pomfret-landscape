#!/usr/bin/env python3
"""
Generate final Turtletoy code with selected buildings
"""

import json

# Read final buildings
with open('final_campus_buildings.json', 'r') as f:
    data = json.load(f)
    buildings = data['buildings']

# Compress buildings for Turtletoy
centerLon = -71.9640
centerLat = 41.8862

compressed = []
for b in buildings:
    coords = b['coordinates']
    compact_coords = []
    for lon, lat in coords:
        rel_lon = round((lon - centerLon) * 10000) / 10000
        rel_lat = round((lat - centerLat) * 10000) / 10000
        compact_coords.append([rel_lon, rel_lat])
    compressed.append(compact_coords)

# Create Turtletoy code with correct API
code = f'''// Pomfret School - Core Campus ({len(buildings)} buildings)
// Includes main academic buildings, dorms, Vista, and DuPont Library
const D={json.dumps(compressed, separators=(',', ':'))};

function walk(i){{
const turtle=new Turtle();
if(i>=D.length)return false;
const p=D[i];
if(!p||p.length<2)return true;
turtle.jump(p[0][0]*8000,p[0][1]*8000);
for(let j=1;j<p.length;j++)turtle.goto(p[j][0]*8000,p[j][1]*8000);
turtle.goto(p[0][0]*8000,p[0][1]*8000);
return true;
}}
'''

with open('pomfret_turtletoy_final.js', 'w') as f:
    f.write(code)

print(f"✓ Generated Turtletoy code with {len(buildings)} buildings!")
print(f"File: pomfret_turtletoy_final.js")
print(f"File size: {len(code):,} bytes")
print(f"\nBuildings included:")
print("-" * 70)

# Show what's included
named = [b for b in buildings if b['original_name'] and b['original_name'] != 'yes']
unnamed = [b for b in buildings if not b['original_name'] or b['original_name'] == 'yes']

for b in sorted(named, key=lambda x: x['id']):
    print(f"  ✓ {b['original_name']}")

print(f"\nAdditional buildings (Vista, DuPont Library, etc.):")
for b in sorted(unnamed, key=lambda x: x['id']):
    print(f"  ✓ Building #{b['id']}")

print(f"\n{'='*70}")
print("Ready for Turtletoy.net!")
print("Copy the contents of pomfret_turtletoy_final.js to Turtletoy")
print(f"{'='*70}")
