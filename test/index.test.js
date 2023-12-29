const Calime = require('../src/index').default

describe('Calime', () => {
    let calime;

    beforeEach(() => {
        calime = new Calime("Initial Text");
    });

    test('constructor should initialize text correctly', () => {
        expect(calime.render()).toBe("Initial Text");
    });

    test('apply method should add style correctly', () => {
        calime.apply('bold');
        expect(calime.render()).toContain("\x1b[1m");
    });

    test('setText should update text correctly', () => {
        calime.setText("New Text");
        expect(calime.render()).toContain("New Text");
    });

    test('color should apply color correctly', () => {
        calime.color([255, 0, 0]); // Applying red color
        expect(calime.render()).toContain("\x1b[38;2;255;0;0m");
    });

    test('gradient should apply gradient correctly', () => {
        calime.gradient([255, 0, 0], [0, 255, 0]); // Gradient from red to green
        const renderedText = calime.render();
        expect(renderedText).toContain("\x1b[38;2;"); // Check for gradient color codes
    });

    test('background should apply background color correctly', () => {
        calime.background([0, 0, 255]); // Applying blue background
        expect(calime.render()).toContain("\x1b[48;2;0;0;255m");
    });

    test('static method gradientColor should compute colors correctly', () => {
        const color = Calime.gradientColor(0.5, [0, 0, 0], [255, 255, 255]); // Midpoint between black and white
        expect(color).toEqual([128, 128, 128]);
    });

    test('render should reset styles at the end', () => {
        calime.apply('bold');
        expect(calime.render()).toContain("\x1b[0m"); // Reset code at the end
    });
});
