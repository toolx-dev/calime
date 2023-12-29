type Style = 'reset' | 'bold' | 'underline' | 'dim' | 'inverse' | 'italic' | 'strikethrough';
type Color = [number, number, number];
declare class Calime {
    private text;
    private appliedStyles;
    private appliedColor;
    private appliedBackgroundColor;
    private styles;
    constructor(text: string);
    apply(style: Style): this;
    setText(text: string): this;
    color(color: Color): this;
    gradient(...colors: Color[]): this;
    background(color: Color): this;
    render(): string;
    static gradientColor(ratio: number, ...colors: Color[]): Color;
}
export default Calime;
