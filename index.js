const fs = require('fs');
const inquirer = require('inquirer');

class Shape {
  constructor(color) {
    this.color = color;
  }

  getSvg() {
    throw new Error('getSvg method must be implemented by subclasses');
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  getSvg() {
    return `<rect width="100%" height="100%" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  getSvg() {
    // triangle SVG generation logic
    return `<polygon points="..." fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  getSvg() {
    // circle SVG generation logic
    return `<circle cx="50%" cy="50%" r="50%" fill="${this.color}" />`;
  }
}

async function generateLogo() {
  // Prompt the user for input
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: input => /^[a-zA-Z0-9]{1,3}$/.test(input),
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hex):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hex):',
    },
  ]);

  let shape;
  switch (userInput.shape) {
    case 'circle':
      shape = new Circle(userInput.shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(userInput.shapeColor);
      break;
    case 'square':
    default:
      shape = new Square(userInput.shapeColor);
      break;
  }

  // Generate SVG
  const svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.getSvg()}
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="30" fill="${userInput.textColor}">${userInput.text}</text>
  </svg>`;

  // Save SVG to file
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}
generateLogo();
// Export for testing
module.exports = { generateLogo, Shape, Square, Triangle, Circle };
