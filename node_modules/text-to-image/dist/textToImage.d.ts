interface GenerateOptions {
    bgColor?: string | CanvasGradient | CanvasPattern;
    customHeight?: number;
    debug?: boolean;
    debugFilename?: string;
    fontFamily?: string;
    fontPath?: string;
    fontSize?: number;
    fontWeight?: string | number;
    lineHeight?: number;
    margin?: number;
    maxWidth?: number;
    textAlign?: CanvasTextAlign;
    textColor?: string;
    verticalAlign?: string;
}
export declare const generate: (content: string, config: GenerateOptions) => Promise<string>;
export declare const generateSync: (content: string, config: GenerateOptions) => string;
export {};
