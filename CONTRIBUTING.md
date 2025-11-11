# Contributing to Pomfret School Campus Visualization

First off, thank you for considering contributing to this project! 🎉

## Code of Conduct

By participating in this project, you are expected to uphold our commitment to providing a welcoming and respectful environment for everyone.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (code snippets, screenshots)
- **Describe the behavior you observed and what you expected**
- **Include your environment details** (browser, OS, TurtleToy version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List any alternative solutions** you've considered

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following our coding standards
3. **Test thoroughly** in TurtleToy before submitting
4. **Update documentation** if you're adding features
5. **Write clear commit messages** describing your changes
6. **Submit your pull request** with a comprehensive description

## Development Process

### Setting Up Your Development Environment

```bash
# Clone your fork
git clone https://github.com/your-username/pomfret-design.git
cd pomfret-design

# Create a new branch for your feature
git checkout -b feature/amazing-feature

# Make your changes
# ...

# Test your changes in TurtleToy
# Copy pomfret_3d_enhanced.js to https://turtletoy.net/turtle/new

# Commit your changes
git add .
git commit -m "Add amazing feature"

# Push to your fork
git push origin feature/amazing-feature
```

### Coding Standards

#### JavaScript (TurtleToy)
- Use clear, descriptive variable names
- Add comments for complex logic
- Follow the existing code style
- Keep functions focused and modular
- Test with different parameter values

#### Python (Data Generation)
- Follow PEP 8 style guide
- Add docstrings to functions
- Use type hints where appropriate
- Keep functions pure when possible
- Test with sample data

### Building Data Files

When modifying building data:

```bash
# Update buildings array in generate_3d_campus.py
python3 generate_3d_campus.py

# Verify output in campus_3d_data.js
# Test integration in TurtleToy
```

### Testing Checklist

Before submitting a pull request, ensure:

- [ ] Code runs without errors in TurtleToy
- [ ] All interactive controls work as expected
- [ ] Visual output looks correct at different parameter values
- [ ] No performance degradation
- [ ] Documentation is updated
- [ ] Commit messages are clear and descriptive

## Project Structure

```
pomfret-design/
├── pomfret_3d_enhanced.js     # Main visualization (modify this)
├── generate_3d_campus.py      # Data generator (add buildings here)
├── campus_3d_data.js          # Generated data (don't edit directly)
├── README.md                  # Project documentation
└── docs/                      # Additional documentation
```

## Areas for Contribution

We especially welcome contributions in these areas:

### High Priority
- 🏗️ **Additional Buildings**: Add more campus structures
- 🎨 **Visual Enhancements**: Improve rendering quality
- 📱 **Responsive Design**: Better mobile/tablet support
- 🐛 **Bug Fixes**: Address known issues

### Medium Priority
- 📚 **Documentation**: Improve guides and examples
- 🧪 **Testing**: Add validation scripts
- 🎬 **Animations**: Create new tour paths
- 🌍 **Accessibility**: Make visualization more accessible

### Nice to Have
- 🎨 **Themes**: Alternative color schemes
- 📊 **Analytics**: Performance metrics
- 🔧 **Tools**: Development utilities
- 🌟 **Effects**: Weather, seasons, etc.

## Getting Help

- 💬 **Questions?** Open a discussion thread
- 🐛 **Found a bug?** Create an issue
- 💡 **Have an idea?** Share in discussions
- 📧 **Need support?** Contact the maintainers

## Recognition

Contributors will be recognized in:
- README.md acknowledgments section
- Project documentation
- Release notes

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to making this project better! 🚀
