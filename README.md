
<p align="center">
  <a href="https://www.npmjs.com/package/calime" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://raw.githubusercontent.com/toolx-dev/calime/main/logo.png" alt="calime logo" />
  </a>
</p>
<br/>
<p align="center">
  <a href="https://www.npmjs.com/package/@toolx/core"><img src="https://img.shields.io/npm/v/calime" alt="npm package"></a>
  <img alt="NPM" src="https://img.shields.io/npm/l/calime">
</p>
<br/>

# calime

## Introduction
`Calime` is a versatile and lightweight class for styling and manipulating text in Node.js applications, particularly useful for console output. It offers a range of text styling options, such as color, background color, and text formatting styles like bold, underline, and italic. 

::: tip
While `Calime` provides various styling options, it aims to keep a balance between functionality and simplicity. For complex text and background color combinations, consider using libraries like `chalk` for more complete solutions. `Calime` may choose to skip adding such complex features to maintain code simplicity.
::::

 <img width="683" src="https://raw.githubusercontent.com/toolx-dev/calime/main/example.png" alt="calime example" />

## Features
- **Multiple Text Styles**: Apply various text styles including bold, underline, italic, and more.
- **Color Support**: Easily set text and background colors.
- **Text Gradients**: Create gradient effects on text using multiple colors.
- **Chainable Methods**: Methods can be chained for concise code.

## Installation

`calime` is available as an independent package on npm and can be installed in your Node.js project. Since it is exclusively an ESModule, ensure your environment supports ESModule syntax. To install `calime`, run the following command in your project directory:

```bash
npm install calime
```

## Usage
To use `Calime`, first import or include it in your Node.js project. Then, create a new instance of `Calime` and start styling your text.

```javascript
import Calime from 'calime'; // Adjust the import path as per your project structure

const myText = new Calime("Hello, World!");
myText.apply('bold').color([255, 0, 0]); // Applying bold style and red color
console.log(myText.render()); // Outputs styled text
```

## API Reference

### Constructor
- `Calime(text: string)` - Initialize with the specified text.

### Methods
- `apply(style: Style): Calime` - Apply a text style.
- `setText(text: string): Calime` - Set or update the text.
- `color(color: Color): Calime` - Set the text color.
- `gradient(...colors: Color[]): Calime` - Apply a gradient effect to the text.
- `background(color: Color): Calime` - Set the background color of the text.
- `render(): string` - Returns the styled text.

### Static Methods
- `static gradientColor(ratio: number, ...colors: Color[]): Color` - Compute gradient color.

## License
`Calime` is open-sourced MIT license and can be used freely in your projects.
