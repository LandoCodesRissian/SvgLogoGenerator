const { generateLogo, Square, Triangle, Circle } = require('./logoGenerator');

describe('Logo Generator', () => {
test('Generate Logo with Square', () => {
    const userInput = {
    text: 'ABC',
    textColor: 'black',
    shape: 'square',
    shapeColor: 'red',
    };

    const square = new Square(userInput.shapeColor);

    // Mock inquirer.prompt to return userInput
    jest.spyOn(inquirer, 'prompt').mockResolvedValueOnce(userInput);

    // Mock fs.writeFileSync to prevent actual file creation
    jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {});

    generateLogo();

    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${square.getSvg()}
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="30" fill="${userInput.textColor}">${userInput.text}</text>
    </svg>`;

    expect(fs.writeFileSync).toHaveBeenCalledWith('logo.svg', expectedSvg);
});
});
