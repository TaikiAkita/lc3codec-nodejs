//
//  Copyright 2021 - 2023 XiaoJSoft Studio. All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE.md file.
//

//
//  Constants.
//

//  Tables 3.7.1.
const I_8000_10 = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,
    28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,51,53,55,
    57,59,61,63,65,67,69,71,73,75,77,80
];
const I_16000_10 = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,
    28,30,32,34,36,38,40,42,44,46,48,50,52,55,58,61,64,67,70,73,76,80,84,88,92,
    96,101,106,111,116,121,127,133,139,146,153,160
];
const I_24000_10 = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,27,29,31,
    33,35,37,39,41,43,46,49,52,55,58,61,64,68,72,76,80,85,90,95,100,106,112,118,
    125,132,139,147,155,164,173,183,193,204,215,227,240
];
const I_32000_10 = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,24,26,28,30,32,34,
    36,38,41,44,47,50,53,56,60,64,68,72,76,81,86,91,97,103,109,116,123,131,139,
    148,157,166,176,187,199,211,224,238,252,268,284,302,320
];
const I_48000_10 = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,22,24,26,28,30,32,34,36,
    39,42,45,48,51,55,59,63,67,71,76,81,86,92,98,105,112,119,127,135,144,154,
    164,175,186,198,211,225,240,256,273,291,310,330,352,375,400
];

//  Export public APIs.
module.exports = {
    "I_8000_10": I_8000_10,
    "I_16000_10": I_16000_10,
    "I_24000_10": I_24000_10,
    "I_32000_10": I_32000_10,
    "I_48000_10": I_48000_10
};