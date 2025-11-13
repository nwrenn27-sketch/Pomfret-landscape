"""
Pomfret School Campus - 3D Visualization Data Generator
Generates building geometries with roof data from OSM coordinates
Outputs JavaScript arrays compatible with TurtleToy rendering engine
"""

import json
import math

# Building data from enhanced JavaScript file (all 12 buildings)
buildings = [
    {"name": "Clark Hall", "coords": [[-0.0006607,0.0007375],[-0.0006216,0.0007379],[-0.0006206,0.0006785],[-0.0006076,0.0006786],[-0.0006072,0.0006579],[-0.0005503,0.0006584],[-0.0005498,0.0006286],[-0.0006083,0.000628],[-0.0006079,0.0006073],[-0.0006212,0.0006072],[-0.0006202,0.0005498],[-0.0006422,0.0005496],[-0.000642,0.0005344],[-0.0007044,0.0005338],[-0.0007047,0.0005479],[-0.0007612,0.0005474],[-0.0007622,0.0006057],[-0.000786,0.0006055],[-0.0007873,0.0006766],[-0.0007621,0.0006768],[-0.0007631,0.0007363],[-0.0006944,0.000737],[-0.0006946,0.0007521],[-0.000661,0.0007525],[-0.0006607,0.0007375]], "height": 9.91e-05, "type": "historic", "zone": "academic"},
    {"name": "Alumni House", "coords": [[-0.0006272,-7.58e-05],[-0.0006216,-0.0001757],[-0.0004463,-0.0001703],[-0.0004378,-0.0003216],[-0.0004117,-0.0003208],[-0.0004105,-0.000342],[-0.0004873,-0.0003443],[-0.0004862,-0.000364],[-0.0007299,-0.0003716],[-0.0007319,-0.0003358],[-0.0007832,-0.0003374],[-0.0007809,-0.0003778],[-0.0008473,-0.0003799],[-0.000848,-0.000368],[-0.0009128,-0.0003701],[-0.0009144,-0.0003414],[-0.0009562,-0.0003427],[-0.0009568,-0.0003314],[-0.0010592,-0.0003346],[-0.0010587,-0.0003441],[-0.0011623,-0.0003474],[-0.0011583,-0.0004175],[-0.0013091,-0.0004222],[-0.001319,-0.0002463],[-0.001092,-0.0002393],[-0.0010931,-0.0002199],[-0.0009614,-0.0002158],[-0.000963,-0.0001869],[-0.0007561,-0.0001804],[-0.0007618,-7.88e-05],[-0.0008714,-8.22e-05],[-0.0008904,0.0002544],[-0.0005497,0.000265],[-0.0005308,-7.28e-05],[-0.0006272,-7.58e-05]], "height": 9.01e-05, "type": "traditional", "zone": "admin"},
    {"name": "Chapel", "coords": [[0.0012329,-0.0017569],[0.0012326,-0.001742],[0.0011837,-0.0017425],[0.0011816,-0.0016421],[0.0012281,-0.0016416],[0.0012245,-0.0014662],[0.0013464,-0.0014648],[0.0013503,-0.0016555],[0.0015121,-0.0016536],[0.0015132,-0.0017057],[0.0013535,-0.0017076],[0.0013545,-0.0017561],[0.0013201,-0.0017794],[0.0012649,-0.00178],[0.0012329,-0.0017569]], "height": 0.0001081, "type": "chapel", "zone": "religious"},
    {"name": "Science Center", "coords": [[0.0015051,-0.0025612],[0.0014426,-0.0025617],[0.001441,-0.002451],[0.0013105,-0.0023764],[0.0013599,-0.0023267],[0.0015079,-0.002413],[0.0016002,-0.0024123],[0.0016006,-0.0024463],[0.0016463,-0.0024459],[0.0016472,-0.0025097],[0.0016013,-0.0025101],[0.001602,-0.0025604],[0.0015051,-0.0025612]], "height": 7.21e-05, "type": "traditional", "zone": "academic"},
    {"name": "Library", "coords": [[0.0011207,-0.0019803],[0.0013943,-0.002156],[0.0012159,-0.00231],[0.0009423,-0.0021342],[0.0011207,-0.0019803]], "height": 7.21e-05, "type": "traditional", "zone": "academic"},
    {"name": "Admin", "coords": [[0.0009098,-0.0024444],[0.0009128,-0.0024945],[0.0009457,-0.0024935],[0.0009533,-0.0026238],[0.0007173,-0.0026314],[0.0007096,-0.0024997],[0.0007251,-0.0024992],[0.0007188,-0.0023918],[0.0006943,-0.0023926],[0.0006729,-0.0020251],[0.0007103,-0.0020238],[0.0007037,-0.0019112],[0.0008856,-0.0019053],[0.0008924,-0.0020209],[0.0009049,-0.0020205],[0.0009262,-0.0023849],[0.0009064,-0.0023856],[0.0009098,-0.0024444]], "height": 8.11e-05, "type": "traditional", "zone": "admin"},
    {"name": "Dorm A", "coords": [[2.86e-05,-0.0018494],[-0.0001652,-0.0018521],[-0.0001691,-0.0016982],[-0.0001858,-0.0016985],[-0.0001873,-0.001635],[-0.0001716,-0.0016348],[-0.0001755,-0.0014807],[1.94e-05,-0.001478],[2.86e-05,-0.0018494]], "height": 7.21e-05, "type": "traditional", "zone": "residential"},
    {"name": "Arts Center", "coords": [[-0.0002814,-0.0013474],[-0.0003107,-0.0013481],[-0.0003165,-0.0012157],[-0.0002872,-0.001215],[-0.00029,-0.0011523],[-0.0003066,-0.0011527],[-0.0003127,-0.0010123],[-4.85e-05,-0.001006],[-4.26e-05,-0.0011398],[-7.34e-05,-0.0011406],[-7.02e-05,-0.0012147],[-4.29e-05,-0.001214],[-3.74e-05,-0.0013415],[-0.0002814,-0.0013474]], "height": 7.66e-05, "type": "modern", "zone": "arts"},
    {"name": "Historic Hall", "coords": [[0.0005185,-4.18e-05],[0.0005197,-6.79e-05],[0.0006123,-6.56e-05],[0.0006163,-0.0001539],[0.0005548,-0.0001554],[0.0005552,-0.000166],[0.0005112,-0.0001671],[0.0005106,-0.0001534],[0.0003995,-0.0001562],[0.0003956,-6.96e-05],[0.0004041,-6.94e-05],[0.0004032,-4.99e-05],[0.0003559,-5.11e-05],[0.0003435,0.0002229],[0.0003772,0.0002238],[0.0003738,0.0003001],[0.0003345,0.0002991],[0.000322,0.0005745],[0.00048,0.0005785],[0.0004921,0.0003121],[0.0005025,0.0003123],[0.0005185,-4.18e-05]], "height": 9.91e-05, "type": "historic", "zone": "historic"},
    {"name": "Athletic Center", "coords": [[0.000592,-0.0012142],[0.0005945,-0.0012957],[0.0006143,-0.0012954],[0.0006234,-0.0015817],[0.0004515,-0.0015847],[0.000449,-0.0015054],[0.000444,-0.0013484],[0.0004425,-0.0012987],[0.000511,-0.0012975],[0.0005086,-0.0012212],[0.0004321,-0.0012226],[0.0003855,-0.0012234],[0.0003804,-0.0010642],[0.0008449,-0.0010561],[0.0008498,-0.0012097],[0.000592,-0.0012142]], "height": 7.21e-05, "type": "traditional", "zone": "athletic"},
    {"name": "Dorm B", "coords": [[0.0006147,-0.0002467],[0.0006148,-0.0002558],[0.0006649,-0.0002553],[0.0006663,-0.0003411],[0.0005732,-0.000342],[0.0005736,-0.0003615],[0.0005863,-0.0003614],[0.000591,-0.000639],[0.0005534,-0.0006394],[0.0005546,-0.0007148],[0.0006034,-0.0007144],[0.000608,-0.0009899],[0.0004439,-0.0009915],[0.0004393,-0.0007181],[0.0004702,-0.0007178],[0.000469,-0.0006437],[0.0004266,-0.0006441],[0.0004219,-0.0003665],[0.0004668,-0.0003661],[0.0004664,-0.0003444],[0.0004497,-0.0003445],[0.0004483,-0.0002587],[0.0005634,-0.0002576],[0.0005632,-0.0002472],[0.0006147,-0.0002467]], "height": 9.91e-05, "type": "historic", "zone": "residential"},
    {"name": "Classroom", "coords": [[0.0003536,-0.0018023],[0.0003548,-0.0018603],[0.0004104,-0.0018596],[0.0004114,-0.0019062],[0.0004864,-0.0019053],[0.0004889,-0.0020236],[9.59e-05,-0.0020283],[9.24e-05,-0.001865],[0.000108,-0.0018648],[0.0001067,-0.0018052],[0.0003536,-0.0018023]], "height": 7.21e-05, "type": "traditional", "zone": "academic"},
]

def calculate_building_center(coords):
    """Calculate the centroid of a polygon"""
    x_sum = sum(pt[0] for pt in coords)
    y_sum = sum(pt[1] for pt in coords)
    n = len(coords)
    return [x_sum/n, y_sum/n]

def calculate_longest_edge(coords):
    """Find the longest edge of the building footprint"""
    max_length = 0
    max_idx = 0
    for i in range(len(coords)):
        j = (i + 1) % len(coords)
        dx = coords[j][0] - coords[i][0]
        dy = coords[j][1] - coords[i][1]
        length = math.sqrt(dx*dx + dy*dy)
        if length > max_length:
            max_length = length
            max_idx = i
    return max_idx, max_length

def generate_gabled_roof(coords, height, roof_type="gabled"):
    """
    Generate 3D roof geometry with ridge lines
    Args:
        coords: Building footprint coordinates
        height: Base building height
        roof_type: "gabled", "chapel", or "flat"
    Returns:
        Dictionary with roof geometry including ridge line coordinates
    """
    roof_data = {
        "base_height": height,
        "type": roof_type,
        "points": []
    }

    if roof_type == "chapel":
        # Steep church roof - 1.25x height
        ridge_height = height * 1.25
    elif roof_type == "gabled":
        # Traditional gabled roof - 1.1x height
        ridge_height = height * 1.1
    else:
        # Flat modern roof
        roof_data["ridge_height"] = height
        return roof_data

    # Find the longest edge to place ridge line
    longest_idx, _ = calculate_longest_edge(coords)

    # Calculate ridge line endpoints (midpoints of opposite edges)
    pt1_idx = longest_idx
    pt2_idx = (longest_idx + 1) % len(coords)
    pt3_idx = (longest_idx + 2) % len(coords)

    # Ridge point 1: midpoint of longest edge
    ridge1 = [
        (coords[pt1_idx][0] + coords[pt2_idx][0]) / 2,
        (coords[pt1_idx][1] + coords[pt2_idx][1]) / 2,
        ridge_height
    ]

    # Ridge point 2: midpoint of opposite edge
    ridge2 = [
        (coords[pt3_idx][0] + coords[(pt3_idx + 1) % len(coords)][0]) / 2,
        (coords[pt3_idx][1] + coords[(pt3_idx + 1) % len(coords)][1]) / 2,
        ridge_height
    ]

    roof_data["ridge_height"] = ridge_height
    roof_data["ridge_line"] = [ridge1, ridge2]

    return roof_data

def generate_javascript_output():
    """Generate JavaScript arrays for TurtleToy"""

    js_output = {
        "building_footprints": [],
        "heights": [],
        "types": [],
        "names": [],
        "zones": [],
        "roofs": []
    }

    for building in buildings:
        js_output["building_footprints"].append(building["coords"])
        js_output["heights"].append(building["height"])
        js_output["types"].append(building["type"])
        js_output["names"].append(building["name"])
        js_output["zones"].append(building["zone"])

        # Generate roof geometry
        roof = generate_gabled_roof(
            building["coords"],
            building["height"],
            "chapel" if building["type"] == "chapel" else "gabled" if building["type"] != "modern" else "flat"
        )
        js_output["roofs"].append(roof)

    return js_output

def format_for_turtletoy(js_output):
    """
    Format Python data structures as JavaScript code for TurtleToy
    Creates const arrays for building data and roof geometries
    """

    # Format building footprints
    footprints_str = "const D=" + json.dumps(js_output["building_footprints"]) + ";"

    # Format heights
    heights_str = "const H=" + json.dumps(js_output["heights"]) + ";"

    # Format types
    types_str = "const T=" + json.dumps(js_output["types"]) + ";"

    # Format names
    names_str = "const N=" + json.dumps(js_output["names"]) + ";"

    # Format zones
    zones_str = "const Z=" + json.dumps(js_output["zones"]) + ";"

    # Format roof data
    roofs_str = "const ROOFS=" + json.dumps(js_output["roofs"], indent=2) + ";"

    return f"""// Auto-generated 3D Campus Data with Roof Geometries
// Generated by generate_3d_campus.py - Do not edit manually

{footprints_str}

{heights_str}

{types_str}

{names_str}

{zones_str}

{roofs_str}

// Roof rendering helper
function drawRoof(t, buildingIdx, proj, S, offsetX, offsetY) {{
  const roof = ROOFS[buildingIdx];
  if (!roof || !roof.ridge_line) return;

  const [r1, r2] = roof.ridge_line;
  const [x1, y1] = proj(r1[0], r1[1], r1[2], buildingIdx);
  const [x2, y2] = proj(r2[0], r2[1], r2[2], buildingIdx);

  t.jump([x1*S+offsetX, y1*S+offsetY]);
  t.goto([x2*S+offsetX, y2*S+offsetY]);
}}
"""

if __name__ == "__main__":
    print("Generating 3D campus visualization data...")

    js_output = generate_javascript_output()
    turtletoy_code = format_for_turtletoy(js_output)

    # Save to file
    with open("campus_3d_data.js", "w") as f:
        f.write(turtletoy_code)

    print("✓ Generated campus_3d_data.js")
    print(f"✓ Processed {len(buildings)} buildings with proper 3D roof structures")
    print("\nRoof types:")
    for building in buildings:
        roof_type = "chapel" if building["type"] == "chapel" else "gabled" if building["type"] != "modern" else "flat"
        print(f"  - {building['name']}: {roof_type} roof")
