# JavaScript Driven Portfolio

A dynamic portfolio website built entirely using JavaScript to create all HTML elements. This project demonstrates how to build a modern, interactive portfolio without writing any HTML directly.

## Features

- Dynamic creation of HTML elements using JavaScript
- Responsive design using CSS
- Interactive user interface
- Easy to customize and extend

## Technologies Used

- JavaScript
- CSS
- HTML

## Getting Started

### Prerequisites

To run this project, you'll need a modern web browser.

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/minnukota381/JavaScript-Driven-Portfolio.git
    ```

2. Navigate to the project directory:

    ```sh
    cd JavaScript-Driven-Portfolio
    ```

3. Open `index.html` in your web browser.

### Directory Structure

```sh
JavaScript-Driven-Portfolio/
│
├── Assets/             # Directory for images, icons, and other assets
├── index.html          # Main HTML file that includes the JavaScript and CSS
├── style.css           # CSS file for styling the portfolio
└── app.js              # JavaScript file for dynamically generating HTML content
```

## Customization

### Adding New Sections

To add new sections to your portfolio, modify the `app.js` file. Here is an example of how to add a new section:

```javascript
// Create a new section
const newSection = document.createElement('section');
newSection.classList.add('portfolio-section');

// Add content to the section
const sectionTitle = document.createElement('h2');
sectionTitle.textContent = 'New Section Title';
newSection.appendChild(sectionTitle);

// Append the new section to the portfolio container
document.getElementById('portfolioContainer').appendChild(newSection);
```

### Updating Styles

To update the styles, edit the `style.css` file. You can add new styles or modify existing ones to customize the look and feel of your portfolio.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
