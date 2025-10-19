#!/usr/bin/env python3
"""
Filter to core campus area (main academic buildings)
Based on the screenshot showing the central quad area
"""

import json

# Read building data
with open('building_data.js', 'r') as f:
    content = f.read()
    json_str = content.split('const buildingData = ', 1)[1].strip().rstrip(';')
    buildings = json.loads(json_str)

# Core campus bounding box (tighter area from screenshot)
# This focuses on the main academic quad and central buildings
MIN_LON = -71.9665
MAX_LON = -71.9615
MIN_LAT = 41.8830
MAX_LAT = 41.8895

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

def get_building_center(coords):
    """Get center point of building"""
    avg_lon = sum(c[0] for c in coords) / len(coords)
    avg_lat = sum(c[1] for c in coords) / len(coords)
    return avg_lon, avg_lat

def is_in_core_campus(coords):
    """Check if building center is within core campus bounds"""
    center_lon, center_lat = get_building_center(coords)
    return MIN_LON <= center_lon <= MAX_LON and MIN_LAT <= center_lat <= MAX_LAT

# Filter buildings
core_buildings = []
for i, b in enumerate(buildings):
    name = b.get('name', '')

    # Skip removed buildings
    if name in remove_names:
        continue

    # Keep buildings in core area (named or unnamed)
    if is_in_core_campus(b['coordinates']):
        # Skip if it's a named building NOT in our keep list
        if name and name != 'yes' and name not in keep_names:
            continue
        core_buildings.append({
            'id': i,
            'name': name if name and name != 'yes' else f'Building #{i}',
            'original_name': name,
            'coordinates': b['coordinates']
        })

# Create HTML visualization
html = '''<!DOCTYPE html>
<html>
<head>
    <title>Pomfret School - Core Campus Buildings</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <style>
        body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
        #map { height: 100vh; width: 100%; }
        #info { position: absolute; top: 10px; right: 10px; background: white;
                padding: 15px; border-radius: 5px; z-index: 1000; max-width: 350px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2); }
        .building-name { font-weight: bold; color: #2c5aa0; }
        #building-list { max-height: 400px; overflow-y: auto; font-size: 11px;
                        margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd; }
        .list-item { padding: 3px 0; }
        .named { color: #2c5aa0; font-weight: bold; }
        .unnamed { color: #e74c3c; }
    </style>
</head>
<body>
    <div id="info">
        <h3>Core Campus Buildings</h3>
        <p><strong>''' + str(len(core_buildings)) + '''</strong> buildings in core area</p>
        <p style="font-size: 12px; color: #666;">
            Blue = Named buildings<br>
            Red = Unnamed (could be Vista, DuPont, etc.)<br>
            Click buildings for ID numbers
        </p>
        <div id="building-list"></div>
    </div>
    <div id="map"></div>
    <script>
        var map = L.map('map').setView([41.8862, -71.9640], 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        var buildings = ''' + json.dumps(core_buildings) + ''';

        var listHtml = '<div style="font-weight: bold; margin-bottom: 5px;">Buildings:</div>';

        buildings.forEach(function(building, idx) {
            var coords = building.coordinates.map(c => [c[1], c[0]]);
            var isNamed = building.original_name && building.original_name !== 'yes';

            var polygon = L.polygon(coords, {
                color: isNamed ? '#2c5aa0' : '#e74c3c',
                weight: 2,
                fillOpacity: 0.4
            }).addTo(map);

            var popupText = '<div style="font-size: 14px;"><strong>ID #' + building.id + '</strong></div>' +
                           '<div style="font-size: 12px; margin-top: 5px;">' + building.name + '</div>';
            polygon.bindPopup(popupText);

            // Also show label on map
            var center = polygon.getBounds().getCenter();
            L.marker(center, {
                icon: L.divIcon({
                    className: 'building-label',
                    html: '<div style="background: white; padding: 2px 5px; border: 1px solid #333; border-radius: 3px; font-weight: bold; font-size: 11px;">' + building.id + '</div>',
                    iconSize: [30, 20]
                })
            }).addTo(map);

            var className = isNamed ? 'named' : 'unnamed';
            listHtml += '<div class="list-item ' + className + '">' +
                       building.id + ': ' + building.name + '</div>';
        });

        document.getElementById('building-list').innerHTML = listHtml;

        // Draw core campus boundary
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

with open('core_campus_map.html', 'w') as f:
    f.write(html)

# Print building list
print(f"✓ Filtered to {len(core_buildings)} buildings in core campus area")
print("\nBuildings found:")
print("="*70)

named_buildings = [b for b in core_buildings if b['original_name'] and b['original_name'] != 'yes']
unnamed_buildings = [b for b in core_buildings if not b['original_name'] or b['original_name'] == 'yes']

print(f"\nNAMED BUILDINGS ({len(named_buildings)}):")
for b in named_buildings:
    print(f"  ID {b['id']:3}: {b['original_name']}")

print(f"\nUNNAMED BUILDINGS ({len(unnamed_buildings)}):")
print("  (One of these should be Vista and DuPont Library)")
for b in unnamed_buildings[:20]:  # Show first 20
    center = get_building_center(b['coordinates'])
    print(f"  ID {b['id']:3}: Building #{b['id']} (center: {center[1]:.6f}, {center[0]:.6f})")

if len(unnamed_buildings) > 20:
    print(f"  ... and {len(unnamed_buildings) - 20} more unnamed buildings")

# Save filtered data
with open('core_campus_buildings.json', 'w') as f:
    json.dump(core_buildings, f, indent=2)

print(f"\n✓ Created interactive map: core_campus_map.html")
print(f"✓ Saved filtered data: core_campus_buildings.json")
