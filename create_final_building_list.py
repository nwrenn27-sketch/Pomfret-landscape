#!/usr/bin/env python3
"""
Create final building list based on user selections
"""

import json

# Read the core campus buildings
with open('core_campus_buildings.json', 'r') as f:
    core_buildings = json.load(f)

# Buildings to definitely include (user selected unnamed buildings)
include_ids = [27, 24, 45, 22, 21]

# Buildings to remove
remove_ids = [13]  # Strong Field House - too far away

# Named buildings we're keeping (minus removed ones)
keep_names = [
    'Pyne Dormitory',
    'Corzine Athletic Center/Olmsted Student Union (OSU)',
    'Clark Memorial Chapel',
    'Pomfret Main House',
    'Centennial Academics and Art Center',
    'Plant/Bourne Dormitories',
    'Dunworth/Pontefract Dormitories',
    'Picerne House',
    'Seely-Brown Village'
]

# Filter to final list
final_buildings = []
for b in core_buildings:
    building_id = b['id']
    name = b['original_name']

    # Skip removed buildings
    if building_id in remove_ids:
        print(f"✗ Removing: ID {building_id} - {b['name']}")
        continue

    # Include specifically selected unnamed buildings
    if building_id in include_ids:
        print(f"✓ Including: ID {building_id} - {b['name']} (user selected)")
        final_buildings.append(b)
        continue

    # Include named buildings in our keep list
    if name in keep_names:
        print(f"✓ Including: ID {building_id} - {name}")
        final_buildings.append(b)
        continue

print(f"\n{'='*70}")
print(f"FINAL BUILDING COUNT: {len(final_buildings)}")
print(f"{'='*70}")

# Save final building list
output = {
    'total': len(final_buildings),
    'buildings': final_buildings,
    'notes': {
        'user_selected_buildings': include_ids,
        'removed_buildings': remove_ids,
        'description': 'Core Pomfret School campus buildings including main academic buildings, dorms, Vista, and DuPont Library'
    }
}

with open('final_campus_buildings.json', 'w') as f:
    json.dump(output, f, indent=2)

print(f"\n✓ Saved final building list: final_campus_buildings.json")
print(f"\nBuildings included:")
print("-" * 70)

named = sorted([b for b in final_buildings if b['original_name'] and b['original_name'] != 'yes'],
               key=lambda x: x['id'])
unnamed = sorted([b for b in final_buildings if not b['original_name'] or b['original_name'] == 'yes'],
                 key=lambda x: x['id'])

print(f"\nNamed Buildings ({len(named)}):")
for b in named:
    print(f"  ID {b['id']:3}: {b['original_name']}")

print(f"\nUser Selected Buildings ({len(unnamed)}):")
for b in unnamed:
    print(f"  ID {b['id']:3}: {b['name']} (likely Vista, DuPont Library, or other key building)")
