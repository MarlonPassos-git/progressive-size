"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.progressiveMin = exports.progressiveMax = exports.progressiveClamp = exports.progressive = exports.Rem = exports._Rem = exports.configure = void 0;
let REM = 16;
let MOBILE_WIDTH = 375;
let DESKTOP_WIDTH = 1440;
function configure(rem = REM, mobile_width = MOBILE_WIDTH, desktop_width = DESKTOP_WIDTH) {
    REM = rem;
    MOBILE_WIDTH = mobile_width;
    DESKTOP_WIDTH = desktop_width;
}
exports.configure = configure;
function _Rem(number, reminPX = REM) {
    return number / reminPX;
}
exports._Rem = _Rem;
function Rem(number, reminPX = REM) {
    const value = number / reminPX;
    return `${value}rem`;
}
exports.Rem = Rem;
function progressive(minSizePx, maxSizePx, minWidthPx = MOBILE_WIDTH, maxWidthPx = DESKTOP_WIDTH) {
    const minSize = _Rem(minSizePx);
    const maxSize = _Rem(maxSizePx);
    const minWidth = _Rem(minWidthPx);
    const maxWidth = _Rem(maxWidthPx);
    const slope = (maxSize - minSize) / (maxWidth - minWidth);
    const yAxisIntersection = -minWidth * slope + minSize;
    return `calc( ${yAxisIntersection}rem + ${slope * 100}vw )`;
}
exports.progressive = progressive;
function progressiveClamp(minSizePx, maxSizePx, minWidthPx = MOBILE_WIDTH, maxWidthPx = DESKTOP_WIDTH) {
    const minSize = Math.min(minSizePx, maxSizePx);
    const maxSize = Math.max(minSizePx, maxSizePx);
    const minSizeRem = _Rem(minSize);
    const maxSizeRem = _Rem(maxSize);
    return `max(${minSizeRem}rem, min(${progressive(minSizePx, maxSizePx, minWidthPx, maxWidthPx)}, ${maxSizeRem}rem))`;
}
exports.progressiveClamp = progressiveClamp;
function progressiveMax(minSizePx, maxSizePx, minWidthPx = MOBILE_WIDTH, maxWidthPx = DESKTOP_WIDTH) {
    const maxSize = Math.max(minSizePx, maxSizePx);
    const maxSizeRem = _Rem(maxSize);
    return `min( ${progressive(minSizePx, maxSizePx, minWidthPx, maxWidthPx)}, ${maxSizeRem}rem)`;
}
exports.progressiveMax = progressiveMax;
function progressiveMin(minSizePx, maxSizePx, minWidthPx = MOBILE_WIDTH, maxWidthPx = DESKTOP_WIDTH) {
    const minSize = Math.min(minSizePx, maxSizePx);
    const minSizeRem = _Rem(minSize);
    return `max( ${progressive(minSizePx, maxSizePx, minWidthPx, maxWidthPx)}, ${minSizeRem}rem)`;
}
exports.progressiveMin = progressiveMin;
//# sourceMappingURL=index.js.map