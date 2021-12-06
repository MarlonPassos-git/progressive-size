let REM = 16;
let MOBILE_WIDTH = 375;
let DESKTOP_WIDTH = 1440;

export function configure(
    rem: number = REM,
    mobile_width: number = MOBILE_WIDTH,
    desktop_width: number = DESKTOP_WIDTH) {
    
    REM = rem;
    MOBILE_WIDTH = mobile_width;
    DESKTOP_WIDTH = desktop_width;
}

export function _Rem(number: number, reminPX = REM) {
    return number / reminPX;
}

export function Rem(number: number, reminPX = REM) {
    const value = number / reminPX;
    
    return `${value}rem`
}

export function progressive(minSizePx: number, maxSizePx: number, minWidthPx = MOBILE_WIDTH, maxWidthPx = DESKTOP_WIDTH): string {
    const minSize = _Rem(minSizePx);
    const maxSize = _Rem(maxSizePx);
    const minWidth = _Rem(minWidthPx);
    const maxWidth = _Rem(maxWidthPx);
    const slope = (maxSize - minSize) / (maxWidth - minWidth);
    const yAxisIntersection = -minWidth * slope + minSize

    return `calc( ${yAxisIntersection}rem + ${slope * 100}vw )`;
}

export function progressiveClamp(minSizePx: number, maxSizePx: number, minWidthPx = MOBILE_WIDTH, maxWidthPx = DESKTOP_WIDTH): string {
    const minSize = Math.min(minSizePx, maxSizePx);
    const maxSize = Math.max(minSizePx, maxSizePx);
    const minSizeRem = _Rem(minSize);
    const maxSizeRem = _Rem(maxSize);

    return `max(${minSizeRem}rem, min(${progressive(minSizePx, maxSizePx, minWidthPx, maxWidthPx)}, ${maxSizeRem}rem))`
}

export function progressiveMax(
        minSizePx: number,
        maxSizePx: number,
        minWidthPx = MOBILE_WIDTH,
        maxWidthPx = DESKTOP_WIDTH
    ): string {
    const maxSize = Math.max(minSizePx, maxSizePx);
    const maxSizeRem = _Rem(maxSize);

    return `min( ${progressive(minSizePx, maxSizePx, minWidthPx, maxWidthPx)}, ${maxSizeRem}rem)`
}

export function progressiveMin(
        minSizePx: number,
        maxSizePx: number,
        minWidthPx = MOBILE_WIDTH,
        maxWidthPx = DESKTOP_WIDTH
    ): string {

    const minSize = Math.min(minSizePx, maxSizePx);
    const minSizeRem = _Rem(minSize);

    return `max( ${progressive(minSizePx, maxSizePx, minWidthPx, maxWidthPx)}, ${minSizeRem}rem)`
}

