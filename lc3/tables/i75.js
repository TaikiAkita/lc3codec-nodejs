//
//  Copyright 2021 - 2023 XiaoJSoft Studio. All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE.md file.
//

//
//  Constants.
//

//  Tables 3.7.2.
const I_8000_75 = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,
    28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,
    53,54,55,56,57,58,59,60
];
const I_16000_75 = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,
    28,29,30,31,32,33,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,65,68,71,74,
    77,80,83,86,90,94,98,102,106,110,115,120
];
const I_24000_75 = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,
    29,31,33,35,37,39,41,43,45,47,49,52,55,58,61,64,67,70,74,78,82,86,90,95,100,
    105,110,115,121,127,134,141,148,155,163,171,180
];
const I_32000_75 = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,28,30,
    32,34,36,38,40,42,45,48,51,54,57,60,63,67,71,75,79,84,89,94,99,105,111,117,
    124,131,138,146,154,163,172,182,192,203,215,227,240
];
const I_48000_75 = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,26,28,30,32,
    34,36,38,40,43,46,49,52,55,59,63,67,71,75,80,85,90,96,102,108,115,122,129,
    137,146,155,165,175,186,197,209,222,236,251,266,283,300
];

//  Export public APIs.
module.exports = {
    "I_8000_75": I_8000_75,
    "I_16000_75": I_16000_75,
    "I_24000_75": I_24000_75,
    "I_32000_75": I_32000_75,
    "I_48000_75": I_48000_75
};