# Logo Generator README

This Node.js script allows you to generate a simple logo in SVG format based on user input. The generated logo consists of customizable text with specified colors and a chosen shape (circle, triangle, or square).

## Prerequisites
Ensure that you have Node.js installed on your machine.

## How to Use
1. Clone the repository.
2. Open a terminal in the project directory.
3. Run the following command: npm install
4. After installtion run the code using: node index.js
5. Answer the question prompts to customize and generate your logo

## Logo Options
Choose up to 3 characters for the logo
Choose the color of the selected characters
Choose a shape for the background (circle, triangle or square)
Choose the color of the selected shape.

## Example
If you had selected "ABC" for text, choose "red" for text color, select "circle" for the shape, and choose "blue" for shape color, the script will generate the following SVG content:
```xml
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50%" cy="50%" r="50%" fill="blue" />
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="30" fill="red">ABC</text>
</svg>
```
https://watch.screencastify.com/v/1pvhXX7HPcOvXEpNpzRn
## Output 
Generated SVG logo is saved to a file named 'logo.svg' in the project dirctory.
