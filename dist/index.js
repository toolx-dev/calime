class Calime {
    constructor(text) {
        this.text = text;
        this.appliedStyles = [];
        this.appliedColor = null;
        this.appliedBackgroundColor = null;
        this.styles = {
            reset: "\x1b[0m",
            bold: "\x1b[1m",
            underline: "\x1b[4m",
            dim: "\x1b[2m",
            inverse: "\x1b[7m",
            italic: "\x1b[3m",
            strikethrough: "\x1b[9m",
        };
    }
    apply(style) {
        if (!this.appliedStyles.includes(this.styles[style])) {
            this.appliedStyles.push(this.styles[style]);
        }
        return this;
    }
    setText(text) {
        this.text = text;
        return this;
    }
    color(color) {
        this.appliedColor = color;
        return this;
    }
    gradient(...colors) {
        this.text = this.text.split('').map((char, index) => {
            const ratio = index / (this.text.length - 1);
            const gradientColor = Calime.gradientColor(ratio, ...colors);
            return `\x1b[38;2;${gradientColor[0]};${gradientColor[1]};${gradientColor[2]}m${char}`;
        }).join('');
        return this;
    }
    background(color) {
        this.appliedBackgroundColor = color;
        return this;
    }
    render() {
        let styleReset = '';
        if (this.appliedStyles.length > 0 || this.appliedColor || this.appliedBackgroundColor) {
            styleReset = this.styles.reset;
        }
        return `${this.appliedStyles.join('')}${this.appliedColor ? `\x1b[38;2;${this.appliedColor[0]};${this.appliedColor[1]};${this.appliedColor[2]}m` : ''}${this.appliedBackgroundColor ? `\x1b[48;2;${this.appliedBackgroundColor[0]};${this.appliedBackgroundColor[1]};${this.appliedBackgroundColor[2]}m` : ''}${this.text}${styleReset}`;
    }
    static gradientColor(ratio, ...colors) {
        if (colors.length === 1) {
            return colors[0];
        }
        if (ratio < 0 || ratio > 1) {
            throw new Error("Ratio must be between 0 and 1.");
        }
        const step = 1 / (colors.length - 1);
        const index = Math.min(Math.floor(ratio / step), colors.length - 2);
        const colorStart = colors[index];
        const colorEnd = colors[index + 1];
        const localRatio = (ratio - index * step) / step;
        const r = Math.round(colorStart[0] + localRatio * (colorEnd[0] - colorStart[0]));
        const g = Math.round(colorStart[1] + localRatio * (colorEnd[1] - colorStart[1]));
        const b = Math.round(colorStart[2] + localRatio * (colorEnd[2] - colorStart[2]));
        return [r, g, b];
    }
}
export default Calime;
