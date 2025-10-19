#!/usr/bin/env python3
"""
Filter buildings to campus area and create interactive map for selection
"""

import json

# Read building data
with open('building_data.js', 'r') as f:
    content = f.read()
    json_str = content.split('const buildingData = ', 1)[1].strip().rstrip(';')
    buildings = json.loads(json_str)

# Campus bounding box (from known buildings with padding)
MIN_LON = -71.971331
MAX_LON = -71.959348
MIN_LAT = 41.879448
MAX_LAT = 41.901092

# Buildings to keep
keep_names = [
    'Seely-Brown Village',
    'Strong Field House',
    'Pyne Dormitory',
    'Corzine Athletic Center/Olmsted Student Union (OSU)',
    'Clark Memorial Chapel',
    'Pomfret Main House',
    'Centennial Academics and Art Center',
    'Plant/Bourne Dormitories',
    'Dunworth/Pontefract Dormitories',
    'Picerne House'
]

# Buildings to remove
remove_names = ['Citgo', 'civic', 'Pomfret Public Library']

def is_in_campus(coords):
    """Check if building is within campus bounds"""
    for lon, lat in coords:
        if MIN_LON <= lon <= MAX_LON and MIN_LAT <= lat <= MAX_LAT:
            return True
    return False

# Filter buildings
campus_buildings = []
for i, b in enumerate(buildings):
    name = b.get('name', '')

    # Keep named buildings in our list
    if name in keep_names:
        campus_buildings.append(b)
        continue

    # Skip removed buildings
    if name in remove_names:
        continue

    # Keep unnamed buildings within campus bounds
    if not name or name == 'yes':
        if is_in_campus(b['coordinates']):
            campus_buildings.append(b)

# Create HTML visualization
html = '''<!DOCTYPE html>
<html>
<head>
    <title>Pomfret School Campus Buildings</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <style>
        body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
        #map { height: 100vh; width: 100%; }
        #info { position: absolute; top: 10px; right: 10px; background: white;
                padding: 15px; border-radius: 5px; z-index: 1000; max-width: 300px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2); }
        .building-name { font-weight: bold; color: #2c5aa0; }
        .building-unnamed { color: #666; font-style: italic; }
    </style>
</head>
<body>
    <div id="info">
        <h3>Pomfret School Campus</h3>
        <p><strong>''' + str(len(campus_buildings)) + '''</strong> buildings in campus area</p>
        <p style="font-size: 12px; color: #666;">
            Blue = Named buildings<br>
            Red = Unnamed buildings<br>
            Click buildings to see details
        </p>
    </div>
    <div id="map"></div>
    <script>
        var map = L.map('map').setView([41.8925, -71.9650], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        var buildings = ''' + json.dumps(campus_buildings) + ''';

        buildings.forEach(function(building, idx) {
            var coords = building.coordinates.map(c => [c[1], c[0]]);
            var name = building.name || 'Unnamed building #' + idx;
            var isNamed = building.name && building.name !== 'yes';

            var polygon = L.polygon(coords, {
                color: isNamed ? '#2c5aa0' : '#e74c3c',
                weight: 2,
                fillOpacity: 0.4
            }).addTo(map);

            polygon.bindPopup('<strong>' + name + '</strong><br>Building #' + idx);
        });

        // Draw campus boundary
        L.rectangle([
            [''' + str(MIN_LAT) + ''', ''' + str(MIN_LON) + '''],
            [''' + str(MAX_LAT) + ''', ''' + str(MAX_LON) + ''']
        ], {
            color: '#27ae60',
            weight: 2,
            fillOpacity: 0.05,
            dashArray: '10, 10'
        }).addTo(map);
    </script>
</body>
</html>'''

with open('campus_buildings_map.html', 'w') as f:
    f.write(html)

# Save filtered data
output = {
    'total': len(campus_buildings),
    'named': len([b for b in campus_buildings if b.get('name') and b['name'] != 'yes']),
    'unnamed': len([b for b in campus_buildings if not b.get('name') or b['name'] == 'yes']),
    'buildings': campus_buildings
}

with open('campus_buildings_filtered.json', 'w') as f:
    json.dump(output, f, indent=2)

print(f"✓ Filtered to {len(campus_buildings)} buildings within campus bounds")
print(f"  Named: {output['named']}")
print(f"  Unnamed: {output['unnamed']}")
print(f"\n✓ Created interactive map: campus_buildings_map.html")
print(f"✓ Saved filtered data: campus_buildings_filtered.json")
print(f"\nOpen campus_buildings_map.html in your browser to view and identify buildings!")
