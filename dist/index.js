"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.progressiveMin = exports.progressiveMax = exports.progressiveClamp = exports.progressive = exports.Rem = exports._Rem = void 0;
const REM = 16;
const MOBILE_WIDTH = 375;
const DECKTOP_WIDTH = 1440;
function _Rem(number, reminPX = REM) {
    return number / reminPX;
}
exports._Rem = _Rem;
function Rem(number, reminPX = REM) {
    const value = number / reminPX;
    return `${value}rem`;
}
exports.Rem = Rem;
function progressive(minSizePx, maxSizePx, minWidthPx = MOBILE_WIDTH, maxWidthPx = DECKTOP_WIDTH) {
    const minSize = _Rem(minSizePx);
    const maxSize = _Rem(maxSizePx);
    const minWidth = _Rem(minWidthPx);
    const maxWidth = _Rem(maxWidthPx);
    const slope = (maxSize - minSize) / (maxWidth - minWidth);
    const yAxisIntersection = -minWidth * slope + minSize;
    return `calc( ${yAxisIntersection}rem + ${slope * 100}vw )`;
}
exports.progressive = progressive;
function progressiveClamp(minSizePx, maxSizePx, minWidthPx = MOBILE_WIDTH, maxWidthPx = DECKTOP_WIDTH) {
    const minSize = Math.min(minSizePx, maxSizePx);
    const maxSize = Math.max(minSizePx, maxSizePx);
    const minSizeRem = _Rem(minSize);
    const maxSizeRem = _Rem(maxSize);
    return `max(${minSizeRem}rem, min(${progressive(minSizePx, maxSizePx, minWidthPx, maxWidthPx)}, ${maxSizeRem}rem))`;
}
exports.progressiveClamp = progressiveClamp;
function progressiveMax(minSizePx, maxSizePx, minWidthPx = MOBILE_WIDTH, maxWidthPx = DECKTOP_WIDTH) {
    const maxSize = Math.max(minSizePx, maxSizePx);
    const maxSizeRem = _Rem(maxSize);
    return `min( ${progressive(minSizePx, maxSizePx, minWidthPx, maxWidthPx)}, ${maxSizeRem}rem)`;
}
exports.progressiveMax = progressiveMax;
function progressiveMin(minSizePx, maxSizePx, minWidthPx = MOBILE_WIDTH, maxWidthPx = DECKTOP_WIDTH) {
    const minSize = Math.min(minSizePx, maxSizePx);
    const minSizeRem = _Rem(minSize);
    return `max( ${progressive(minSizePx, maxSizePx, minWidthPx, maxWidthPx)}, ${minSizeRem}rem)`;
}
exports.progressiveMin = progressiveMin;
//# sourceMappingURL=index.js.map