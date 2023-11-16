const fs = require('fs');
const inquirer = require('inquirer');
const svg2 = require('svg');

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

  // Generate SVG
const svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${userInput.shapeColor}" />
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="30" fill="${userInput.textColor}">${userInput.text}</text>
</svg>`;

  // Save SVG to file
fs.writeFileSync('logo.svg', svgContent);

console.log('Generated logo.svg');
}

generateLogo();
