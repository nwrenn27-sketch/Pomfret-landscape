#!/usr/bin/env python3
"""
Process OpenStreetMap data to extract building polygons for Turtletoy
"""

import json

def process_osm_buildings(input_file, output_file):
    """Extract building polygons from OSM JSON data"""

    with open(input_file, 'r') as f:
        data = json.load(f)

    # Create node lookup
    nodes = {}
    for element in data['elements']:
        if element['type'] == 'node':
            nodes[element['id']] = {
                'lat': element['lat'],
                'lon': element['lon']
            }

    # Extract buildings
    buildings = []
    for element in data['elements']:
        if element['type'] == 'way' and 'tags' in element and 'building' in element['tags']:
            coords = []
            for node_id in element['nodes']:
                if node_id in nodes:
                    node = nodes[node_id]
                    coords.append([node['lon'], node['lat']])

            if len(coords) >= 3:  # Valid polygon
                building = {
                    'name': element['tags'].get('name', element['tags'].get('building', 'Building')),
                    'type': element['tags'].get('building', 'yes'),
                    'coordinates': coords
                }
                buildings.append(building)

    # Write JavaScript format
    with open(output_file, 'w') as f:
        f.write('// Pomfret School Building Data\n')
        f.write(f'// Total buildings: {len(buildings)}\n')
        f.write('// Generated from OpenStreetMap data\n\n')
        f.write('const buildingData = ')
        json.dump(buildings, f, indent=2)
        f.write(';\n')

    print(f'Processed {len(buildings)} buildings')
    print(f'Output written to: {output_file}')

    # Print some stats
    named_buildings = [b for b in buildings if b['name'] != 'yes' and b['name'] != 'house']
    if named_buildings:
        print(f'\nNamed buildings found ({len(named_buildings)}):')
        for b in named_buildings[:10]:  # Show first 10
            print(f'  - {b["name"]}')
        if len(named_buildings) > 10:
            print(f'  ... and {len(named_buildings) - 10} more')

if __name__ == '__main__':
    process_osm_buildings('osm_raw_data.json', 'building_data.js')
