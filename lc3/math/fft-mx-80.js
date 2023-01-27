//
//  Copyright 2021 - 2023 XiaoJSoft Studio. All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE.md file.
//

//
//  Note(s):
//    [1] Following lines were generated by our proprietary FFT compiler.
//        Do NOT modify the code manually.
//

//
//  Imports.
//

//  Imported modules.
const Lc3FftMxBaseOp = 
    require("./fft-mx-baseop");

//  Imported functions.
// const MXTr2 = 
//     Lc3FftMxBaseOp.MXTr2;
// const MXTr3 = 
//     Lc3FftMxBaseOp.MXTr3;
const MXTr4 = 
    Lc3FftMxBaseOp.MXTr4;
const MXTr5 = 
    Lc3FftMxBaseOp.MXTr5;
const MXRot = 
    Lc3FftMxBaseOp.MXRot;
// const MXSwap = 
//     Lc3FftMxBaseOp.MXSwap;
const MXCshft = 
    Lc3FftMxBaseOp.MXCshft;

//
//  Constants.
//

//  Cyclic shift indexes.
const CSHFT_INDEXES_0 = [1, 16, 28, 53, 58, 62, 35, 13, 56, 30, 9, 68, 55, 14, 72, 43, 50, 10, 8, 52, 42, 34, 73, 59, 78, 63, 51, 26, 21, 17, 44, 66, 23, 49, 70, 11, 24, 65, 7, 36, 29, 69, 71, 27, 37, 45, 6, 20];
const CSHFT_INDEXES_1 = [2, 32, 41, 18, 60, 3, 48, 54, 74, 75, 15, 12, 40];
const CSHFT_INDEXES_2 = [4, 64, 67, 39, 77, 47, 38, 61, 19, 76, 31, 25, 5];
const CSHFT_INDEXES_3 = [22, 33, 57, 46];

//
//  Public functions.
//

/**
 *  Apply in-place mixed-radix FFT transform (prebuilt for block size 80).
 * 
 *  Note(s):
 *    [1] The size of `re` and `im` will not be checked.
 * 
 *  @param {Number[]} re 
 *    - The real part of each point.
 *  @param {Number[]} im 
 *    - The imaginary part of each point.
 */
function ApplyMixedRadixFFT_80(re, im) {
    MXTr5(re, im, 0, 16, 32, 48, 64);
    MXTr5(re, im, 1, 17, 33, 49, 65);
    MXTr5(re, im, 2, 18, 34, 50, 66);
    MXTr5(re, im, 3, 19, 35, 51, 67);
    MXTr5(re, im, 4, 20, 36, 52, 68);
    MXTr5(re, im, 5, 21, 37, 53, 69);
    MXTr5(re, im, 6, 22, 38, 54, 70);
    MXTr5(re, im, 7, 23, 39, 55, 71);
    MXTr5(re, im, 8, 24, 40, 56, 72);
    MXTr5(re, im, 9, 25, 41, 57, 73);
    MXTr5(re, im, 10, 26, 42, 58, 74);
    MXTr5(re, im, 11, 27, 43, 59, 75);
    MXTr5(re, im, 12, 28, 44, 60, 76);
    MXTr5(re, im, 13, 29, 45, 61, 77);
    MXTr5(re, im, 14, 30, 46, 62, 78);
    MXTr5(re, im, 15, 31, 47, 63, 79);
    MXRot(re, im, 17, 0.996917333733128, -0.07845909572784494);
    MXRot(re, im, 18, 0.9876883405951378, -0.15643446504023087);
    MXRot(re, im, 19, 0.9723699203976766, -0.2334453638559054);
    MXRot(re, im, 20, 0.9510565162951535, -0.3090169943749474);
    MXRot(re, im, 21, 0.9238795325112867, -0.3826834323650898);
    MXRot(re, im, 22, 0.8910065241883679, -0.45399049973954675);
    MXRot(re, im, 23, 0.8526401643540922, -0.5224985647159488);
    MXRot(re, im, 24, 0.8090169943749475, -0.5877852522924731);
    MXRot(re, im, 25, 0.7604059656000309, -0.6494480483301837);
    MXRot(re, im, 26, 0.7071067811865476, -0.7071067811865475);
    MXRot(re, im, 27, 0.6494480483301837, -0.7604059656000309);
    MXRot(re, im, 28, 0.5877852522924731, -0.8090169943749475);
    MXRot(re, im, 29, 0.5224985647159489, -0.8526401643540922);
    MXRot(re, im, 30, 0.4539904997395468, -0.8910065241883678);
    MXRot(re, im, 31, 0.38268343236508984, -0.9238795325112867);
    MXRot(re, im, 33, 0.9876883405951378, -0.15643446504023087);
    MXRot(re, im, 34, 0.9510565162951535, -0.3090169943749474);
    MXRot(re, im, 35, 0.8910065241883679, -0.45399049973954675);
    MXRot(re, im, 36, 0.8090169943749475, -0.5877852522924731);
    MXRot(re, im, 37, 0.7071067811865476, -0.7071067811865475);
    MXRot(re, im, 38, 0.5877852522924731, -0.8090169943749475);
    MXRot(re, im, 39, 0.4539904997395468, -0.8910065241883678);
    MXRot(re, im, 40, 0.30901699437494745, -0.9510565162951535);
    MXRot(re, im, 41, 0.15643446504023092, -0.9876883405951378);
    MXRot(re, im, 42, 6.123233995736766e-17, -1.0);
    MXRot(re, im, 43, -0.1564344650402308, -0.9876883405951378);
    MXRot(re, im, 44, -0.30901699437494734, -0.9510565162951536);
    MXRot(re, im, 45, -0.4539904997395467, -0.8910065241883679);
    MXRot(re, im, 46, -0.587785252292473, -0.8090169943749475);
    MXRot(re, im, 47, -0.7071067811865475, -0.7071067811865476);
    MXRot(re, im, 49, 0.9723699203976766, -0.2334453638559054);
    MXRot(re, im, 50, 0.8910065241883679, -0.45399049973954675);
    MXRot(re, im, 51, 0.7604059656000309, -0.6494480483301837);
    MXRot(re, im, 52, 0.5877852522924731, -0.8090169943749475);
    MXRot(re, im, 53, 0.38268343236508984, -0.9238795325112867);
    MXRot(re, im, 54, 0.15643446504023092, -0.9876883405951378);
    MXRot(re, im, 55, -0.07845909572784487, -0.996917333733128);
    MXRot(re, im, 56, -0.30901699437494734, -0.9510565162951536);
    MXRot(re, im, 57, -0.5224985647159488, -0.8526401643540923);
    MXRot(re, im, 58, -0.7071067811865475, -0.7071067811865476);
    MXRot(re, im, 59, -0.8526401643540922, -0.5224985647159489);
    MXRot(re, im, 60, -0.9510565162951535, -0.3090169943749475);
    MXRot(re, im, 61, -0.996917333733128, -0.07845909572784507);
    MXRot(re, im, 62, -0.9876883405951378, 0.15643446504023073);
    MXRot(re, im, 63, -0.9238795325112868, 0.38268343236508967);
    MXRot(re, im, 65, 0.9510565162951535, -0.3090169943749474);
    MXRot(re, im, 66, 0.8090169943749475, -0.5877852522924731);
    MXRot(re, im, 67, 0.5877852522924731, -0.8090169943749475);
    MXRot(re, im, 68, 0.30901699437494745, -0.9510565162951535);
    MXRot(re, im, 69, 6.123233995736766e-17, -1.0);
    MXRot(re, im, 70, -0.30901699437494734, -0.9510565162951536);
    MXRot(re, im, 71, -0.587785252292473, -0.8090169943749475);
    MXRot(re, im, 72, -0.8090169943749473, -0.5877852522924732);
    MXRot(re, im, 73, -0.9510565162951535, -0.3090169943749475);
    MXRot(re, im, 74, -1.0, -1.2246467991473532e-16);
    MXRot(re, im, 75, -0.9510565162951536, 0.3090169943749473);
    MXRot(re, im, 76, -0.8090169943749476, 0.587785252292473);
    MXRot(re, im, 77, -0.5877852522924732, 0.8090169943749473);
    MXRot(re, im, 78, -0.30901699437494756, 0.9510565162951535);
    MXRot(re, im, 79, -1.8369701987210297e-16, 1.0);
    MXTr4(re, im, 0, 4, 8, 12);
    MXTr4(re, im, 1, 5, 9, 13);
    MXTr4(re, im, 2, 6, 10, 14);
    MXTr4(re, im, 3, 7, 11, 15);
    MXRot(re, im, 5, 0.9238795325112867, -0.3826834323650898);
    MXRot(re, im, 6, 0.7071067811865476, -0.7071067811865475);
    MXRot(re, im, 7, 0.38268343236508984, -0.9238795325112867);
    MXRot(re, im, 9, 0.7071067811865476, -0.7071067811865475);
    MXRot(re, im, 10, 6.123233995736766e-17, -1.0);
    MXRot(re, im, 11, -0.7071067811865475, -0.7071067811865476);
    MXRot(re, im, 13, 0.38268343236508984, -0.9238795325112867);
    MXRot(re, im, 14, -0.7071067811865475, -0.7071067811865476);
    MXRot(re, im, 15, -0.9238795325112868, 0.38268343236508967);
    MXTr4(re, im, 0, 1, 2, 3);
    MXTr4(re, im, 4, 5, 6, 7);
    MXTr4(re, im, 8, 9, 10, 11);
    MXTr4(re, im, 12, 13, 14, 15);
    MXTr4(re, im, 16, 20, 24, 28);
    MXTr4(re, im, 17, 21, 25, 29);
    MXTr4(re, im, 18, 22, 26, 30);
    MXTr4(re, im, 19, 23, 27, 31);
    MXRot(re, im, 21, 0.9238795325112867, -0.3826834323650898);
    MXRot(re, im, 22, 0.7071067811865476, -0.7071067811865475);
    MXRot(re, im, 23, 0.38268343236508984, -0.9238795325112867);
    MXRot(re, im, 25, 0.7071067811865476, -0.7071067811865475);
    MXRot(re, im, 26, 6.123233995736766e-17, -1.0);
    MXRot(re, im, 27, -0.7071067811865475, -0.7071067811865476);
    MXRot(re, im, 29, 0.38268343236508984, -0.9238795325112867);
    MXRot(re, im, 30, -0.7071067811865475, -0.7071067811865476);
    MXRot(re, im, 31, -0.9238795325112868, 0.38268343236508967);
    MXTr4(re, im, 16, 17, 18, 19);
    MXTr4(re, im, 20, 21, 22, 23);
    MXTr4(re, im, 24, 25, 26, 27);
    MXTr4(re, im, 28, 29, 30, 31);
    MXTr4(re, im, 32, 36, 40, 44);
    MXTr4(re, im, 33, 37, 41, 45);
    MXTr4(re, im, 34, 38, 42, 46);
    MXTr4(re, im, 35, 39, 43, 47);
    MXRot(re, im, 37, 0.9238795325112867, -0.3826834323650898);
    MXRot(re, im, 38, 0.7071067811865476, -0.7071067811865475);
    MXRot(re, im, 39, 0.38268343236508984, -0.9238795325112867);
    MXRot(re, im, 41, 0.7071067811865476, -0.7071067811865475);
    MXRot(re, im, 42, 6.123233995736766e-17, -1.0);
    MXRot(re, im, 43, -0.7071067811865475, -0.7071067811865476);
    MXRot(re, im, 45, 0.38268343236508984, -0.9238795325112867);
    MXRot(re, im, 46, -0.7071067811865475, -0.7071067811865476);
    MXRot(re, im, 47, -0.9238795325112868, 0.38268343236508967);
    MXTr4(re, im, 32, 33, 34, 35);
    MXTr4(re, im, 36, 37, 38, 39);
    MXTr4(re, im, 40, 41, 42, 43);
    MXTr4(re, im, 44, 45, 46, 47);
    MXTr4(re, im, 48, 52, 56, 60);
    MXTr4(re, im, 49, 53, 57, 61);
    MXTr4(re, im, 50, 54, 58, 62);
    MXTr4(re, im, 51, 55, 59, 63);
    MXRot(re, im, 53, 0.9238795325112867, -0.3826834323650898);
    MXRot(re, im, 54, 0.7071067811865476, -0.7071067811865475);
    MXRot(re, im, 55, 0.38268343236508984, -0.9238795325112867);
    MXRot(re, im, 57, 0.7071067811865476, -0.7071067811865475);
    MXRot(re, im, 58, 6.123233995736766e-17, -1.0);
    MXRot(re, im, 59, -0.7071067811865475, -0.7071067811865476);
    MXRot(re, im, 61, 0.38268343236508984, -0.9238795325112867);
    MXRot(re, im, 62, -0.7071067811865475, -0.7071067811865476);
    MXRot(re, im, 63, -0.9238795325112868, 0.38268343236508967);
    MXTr4(re, im, 48, 49, 50, 51);
    MXTr4(re, im, 52, 53, 54, 55);
    MXTr4(re, im, 56, 57, 58, 59);
    MXTr4(re, im, 60, 61, 62, 63);
    MXTr4(re, im, 64, 68, 72, 76);
    MXTr4(re, im, 65, 69, 73, 77);
    MXTr4(re, im, 66, 70, 74, 78);
    MXTr4(re, im, 67, 71, 75, 79);
    MXRot(re, im, 69, 0.9238795325112867, -0.3826834323650898);
    MXRot(re, im, 70, 0.7071067811865476, -0.7071067811865475);
    MXRot(re, im, 71, 0.38268343236508984, -0.9238795325112867);
    MXRot(re, im, 73, 0.7071067811865476, -0.7071067811865475);
    MXRot(re, im, 74, 6.123233995736766e-17, -1.0);
    MXRot(re, im, 75, -0.7071067811865475, -0.7071067811865476);
    MXRot(re, im, 77, 0.38268343236508984, -0.9238795325112867);
    MXRot(re, im, 78, -0.7071067811865475, -0.7071067811865476);
    MXRot(re, im, 79, -0.9238795325112868, 0.38268343236508967);
    MXTr4(re, im, 64, 65, 66, 67);
    MXTr4(re, im, 68, 69, 70, 71);
    MXTr4(re, im, 72, 73, 74, 75);
    MXTr4(re, im, 76, 77, 78, 79);
    MXCshft(re, im, CSHFT_INDEXES_0);
    MXCshft(re, im, CSHFT_INDEXES_1);
    MXCshft(re, im, CSHFT_INDEXES_2);
    MXCshft(re, im, CSHFT_INDEXES_3);
}

//  Export public APIs.
module.exports = {
    "ApplyMixedRadixFFT_80": ApplyMixedRadixFFT_80
};