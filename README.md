# Pomfret School Campus - 3D Visualization

<div align="center">

![Project Banner](https://img.shields.io/badge/3D%20Visualization-Campus%20Design-blue?style=for-the-badge)
[![TurtleToy](https://img.shields.io/badge/TurtleToy-Interactive-green?style=for-the-badge)](https://turtletoy.net)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

*An interactive 3D isometric visualization of Pomfret School's campus using vector graphics*

[View Demo](#demo) · [Report Bug](https://github.com/yourusername/pomfret-design/issues) · [Request Feature](https://github.com/yourusername/pomfret-design/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Interactive Controls](#interactive-controls)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About The Project

This project creates an interactive 3D visualization of Pomfret School's campus using TurtleToy's vector graphics engine. The visualization features accurate building geometries extracted from OpenStreetMap data, with proper architectural details including windows, doors, and rooflines.

### Why This Project?

- **Educational**: Demonstrates 3D projection mathematics and isometric rendering
- **Interactive**: Explore campus from multiple angles with smooth animations
- **Data-Driven**: Uses real geospatial data from OpenStreetMap
- **Performance**: Pure vector graphics for infinite scalability

<p align="right">(<a href="#top">back to top</a>)</p>

---

## ✨ Features

### Core Visualization
- ✅ **12 Campus Buildings** with accurate footprints from OSM data
- ✅ **3D Isometric Projection** with configurable viewing angles
- ✅ **Architectural Details**: Windows, doors, and roof structures
- ✅ **Building-Specific Textures**:
  - Historic buildings with brick patterns
  - Modern buildings with glass panels
  - Chapel with stone texture and cross
  - Traditional buildings with siding

### Interactive Controls
- 🎥 **Animated Camera Tour** (360° rotation)
- 🌅 **Time-of-Day Lighting** (dawn to dusk simulation)
- 🏗️ **Exploded View Mode** (separate buildings vertically)
- 🏷️ **Building Labels** (toggle names)
- 📐 **5 View Presets** (Standard, Aerial, Architectural, Dramatic, Visitor)
- 🌳 **Landscape Features** (pathways, trees, contours)

### Technical Features
- Real-time rendering using turtle graphics
- Mathematically accurate 3D→2D projection
- Backface culling for proper depth
- Material-aware hatching patterns
- Responsive parameter controls

<p align="right">(<a href="#top">back to top</a>)</p>

---

## 🛠️ Built With

* **JavaScript** - Core rendering logic
* **TurtleToy** - Vector graphics engine
* **Python** - Data processing and geometry generation
* **OpenStreetMap** - Building geospatial data

<p align="right">(<a href="#top">back to top</a>)</p>

---

## 🚀 Getting Started

### Prerequisites

For running the visualization:
- Modern web browser with JavaScript enabled
- Access to [TurtleToy.net](https://turtletoy.net)

For development:
- Python 3.7+ (for data processing)
- Node.js (optional, for syntax checking)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pomfret-design.git
   cd pomfret-design
   ```

2. **For TurtleToy deployment**
   - Copy the contents of `pomfret_3d_polished.js`
   - Paste into TurtleToy editor at https://turtletoy.net
   - Click "Run" to see the visualization

3. **For local development**
   ```bash
   # Generate 3D data from Python
   python3 generate_3d_campus.py

   # Check JavaScript syntax
   node --check pomfret_3d_polished.js
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

---

## 💡 Usage

### Basic Viewing

Copy the contents of `pomfret_3d_polished.js` into TurtleToy to view the interactive 3D campus visualization.

### Interactive Controls

| Control | Range | Description |
|---------|-------|-------------|
| `viewPreset` | 0-4 | Switch between camera angles (Standard/Aerial/Architectural/Dramatic/Visitor) |
| `animTour` | 0-1 | Animate 360° camera rotation around campus |
| `timeOfDay` | 0-1 | Simulate lighting from dawn (0) to dusk (1) |
| `explodeView` | 0-1 | Vertically separate buildings to show organization |
| `showWindows` | 0/1 | Toggle building windows |
| `showRoofs` | 0/1 | Toggle roof details |
| `showDoors` | 0/1 | Toggle building doors |
| `detailLevel` | 0-2 | Adjust rendering detail (Low/Medium/High) |
| `offsetX` | -50 to 50 | Pan camera left/right |
| `offsetY` | -50 to 50 | Pan camera up/down |

### Generating New Data

To update building data or add new buildings:

1. Edit `generate_3d_campus.py` with new building coordinates
2. Run the Python script:
   ```bash
   python3 generate_3d_campus.py
   ```
3. Copy generated data from `campus_3d_data.js` into your visualization

<p align="right">(<a href="#top">back to top</a>)</p>

---

## 📁 Project Structure

```
pomfret-design/
│
├── README.md                      # This file
├── LICENSE                        # MIT License
├── CONTRIBUTING.md                # Contribution guidelines
│
├── pomfret_3d_polished.js        # Main TurtleToy visualization (current)
├── pomfret_3d_enhanced.js        # Alternative enhanced view
├── pomfret_3d_detailed.js        # Alternative detailed view
│
├── generate_3d_campus.py         # Python data generator
├── generate_3d_turtletoy.py      # Alternative generator
├── campus_3d_data.js             # Generated 3D geometry data
│
├── extract_osm_data.html         # OSM data extraction tool
├── extract_3d_buildings.html     # 3D building data processor
├── extract_detailed_buildings.html # Detailed building extractor
│
├── final_campus_buildings.json   # Building data from OSM
├── building_heights_reference.json # Height reference data
└── docs/
    ├── ARCHITECTURE.md           # Technical architecture documentation
    └── SCREENSHOTS.md            # Visual examples
```

<p align="right">(<a href="#top">back to top</a>)</p>

---

## 🗺️ Roadmap

### Completed ✅
- [x] Basic 3D isometric rendering
- [x] Accurate building footprints from OSM
- [x] Windows and doors with architectural detail
- [x] Material-specific textures (brick, glass, stone)
- [x] Animated camera tour
- [x] Time-of-day lighting simulation
- [x] Multiple view presets
- [x] Exploded view mode
- [x] Building labels

### In Progress 🚧
- [ ] Additional campus buildings (expand from 12 to all major structures)
- [ ] Enhanced landscape features (more detailed pathways)
- [ ] Seasonal variations (foliage, snow)

### Planned 🎯
- [ ] Interior room visualization
- [ ] Real-time campus events overlay
- [ ] AR/VR export capabilities
- [ ] Interactive building information cards
- [ ] Walking tour animation paths

See the [open issues](https://github.com/yourusername/pomfret-design/issues) for a full list of proposed features and known issues.

<p align="right">(<a href="#top">back to top</a>)</p>

---

## 🤝 Contributing

Contributions are what make the open source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and commenting patterns
- Test thoroughly with TurtleToy before submitting
- Update documentation for any new features
- Include clear commit messages

<p align="right">(<a href="#top">back to top</a>)</p>

---

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

---

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/pomfret-design](https://github.com/yourusername/pomfret-design)

<p align="right">(<a href="#top">back to top</a>)</p>

---

## 🙏 Acknowledgments

* [TurtleToy](https://turtletoy.net) - Amazing vector graphics platform
* [OpenStreetMap](https://www.openstreetmap.org) - Geospatial building data
* [Pomfret School](https://www.pomfretschool.org) - Campus inspiration
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template) - README structure
* [Shields.io](https://shields.io) - Professional badges

<p align="right">(<a href="#top">back to top</a>)</p>

---

<div align="center">

**Made with ❤️ for architectural visualization and education**

⭐ Star this repository if you found it helpful!

</div>
