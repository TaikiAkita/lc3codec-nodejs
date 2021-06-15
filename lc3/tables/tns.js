//
//  Copyright 2021 XiaoJSoft Studio. All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE.md file.
//

//
//  Constants.
//

//  ac_tns_order_bits[2][8]:
const AC_TNS_ORDER_BITS = [
    [17234, 13988, 11216,  8694,  6566,  4977,  3961,  3040],
    [12683,  9437,  6874,  5541,  5121,  5170,  5359,  5056]
];

//  ac_tns_order_freq[2][8]:
const AC_TNS_ORDER_FREQ = [
    [  3,   9,  23,  54, 111, 190, 268, 366],
    [ 14,  42, 100, 157, 181, 178, 167, 185]
];

//  ac_tns_order_cumfreq[2][8]:
const AC_TNS_ORDER_CUMFREQ = [
    [  0,   3,  12,  35,  89, 200, 390, 658],
    [  0,  14,  56, 156, 313, 494, 672, 839]
];

//  ac_tns_coef_bits[8][17]:
const AC_TNS_COEF_BITS = [
    [
        20480, 15725, 12479, 10334,  8694,  7320, 
         6964,  6335,  5504,  5637,  6566,  6758, 
         8433, 11348, 15186, 20480, 20480
    ],
    [
        20480, 20480, 20480, 20480, 12902,  9368,
         7057,  5901,  5254,  5485,  5598,  6076,
         7608, 10742, 15186, 20480, 20480
    ],
    [
        20480, 20480, 20480, 20480, 13988,  9368,
         6702,  4841,  4585,  4682,  5859,  7764,
        12109, 20480, 20480, 20480, 20480
    ],
    [
        20480, 20480, 20480, 20480, 18432, 13396,
         8982,  4767,  3779,  3658,  6335,  9656,
        13988, 20480, 20480, 20480, 20480
    ],
    [
        20480, 20480, 20480, 20480, 20480, 14731,
         9437,  4275,  3249,  3493,  8483, 13988,
        17234, 20480, 20480, 20480, 20480
    ],
    [
        20480, 20480, 20480, 20480, 20480, 20480,
        12902,  4753,  3040,  2953,  9105, 15725,
        20480, 20480, 20480, 20480, 20480
    ],
    [
        20480, 20480, 20480, 20480, 20480, 20480,
        12902,  3821,  3346,  3000, 12109, 20480,
        20480, 20480, 20480, 20480, 20480
    ],
    [
        20480, 20480, 20480, 20480, 20480, 20480,
        15725,  3658, 20480,  1201, 10854, 18432,
        20480, 20480, 20480, 20480, 20480
    ]
];

//  ac_tns_coef_freq[8][17]:
const AC_TNS_COEF_FREQ = [
    [
          1,   5,  15,  31,  54,  86,  
         97, 120, 159, 152, 111, 104, 
         59,  22,   6,   1,   1
    ],
    [
          1,   1,   1,   1,  13,  43, 
         94, 139, 173, 160, 154, 131, 
         78,  27,   6,   1,   1
    ],
    [
          1,   1,   1,   1,   9,  43, 
        106, 199, 217, 210, 141,  74,  
         17,   1,   1,   1,   1
    ],
    [
          1,   1,   1,   1,   2,  11,  
         49, 204, 285, 297, 120,  39,   
          9,   1,   1,   1,   1
    ],
    [
          1,   1,   1,   1,   1,   7,  
         42, 241, 341, 314,  58,   9,   
          3,   1,   1,   1,   1
    ],
    [
          1,   1,   1,   1,   1,   1,  
         13, 205, 366, 377,  47,   5,   
          1,   1,   1,   1,   1
    ],
    [
          1,   1,   1,   1,   1,   1,  
         13, 281, 330, 371,  17,   1,   
          1,   1,   1,   1,   1
    ],
    [
          1,   1,   1,   1,   1,   1,   
          5, 297,   1, 682,  26,   2,   
          1,   1,   1,   1,   1
    ]
];

//  ac_tns_coef_cumfreq[8][17]:
const AC_TNS_COEF_CUMFREQ = [
    [
           0,    1,    6,   21,   52,  106,
         192,  289,  409,  568,  720,  831,
         935,  994, 1016, 1022, 1023
    ],
    [
           0,    1,    2,    3,    4,   17,
          60,  154,  293,  466,  626,  780,
         911,  989, 1016, 1022, 1023
    ],
    [
           0,    1,    2,    3,    4,   13,
          56,  162,  361,  578,  788,  929,
        1003, 1020, 1021, 1022, 1023
    ],
    [
           0,    1,    2,    3,    4,    6,
          17,   66,  270,  555,  852,  972,
        1011, 1020, 1021, 1022, 1023
    ],
    [
           0,    1,    2,    3,    4,    5,
          12,   54,  295,  636,  950, 1008,
        1017, 1020, 1021, 1022, 1023
    ],
    [
           0,    1,    2,    3,    4,    5,
           6,   19,  224,  590,  967, 1014,
        1019, 1020, 1021, 1022, 1023
    ],
    [
           0,    1,    2,    3,    4,    5,
           6,   19,  300,  630, 1001, 1018,
        1019, 1020, 1021, 1022, 1023
    ],
    [
           0,    1,    2,    3,    4,    5,
           6,   11,  308,  309,  991, 1017,
        1019, 1020, 1021, 1022, 1023
    ]
];

//  Nms, Pbw to num_tns_filters:
const TNS_PARAM_NUM_TNS_FILTERS = [
    [
        1, 1, 1, 2, 2
    ],
    [
        1, 1, 1, 2, 2
    ]
];

//  Nms, Pbw to start_freq[f]:
const TNS_PARAM_START_FREQ = [
    [
        [ 12,   0],
        [ 12,   0],
        [ 12,   0],
        [ 12, 160],
        [ 12, 200]
    ],
    [
        [  9,   0],
        [  9,   0],
        [  9,   0],
        [  9, 120],
        [  9, 150]
    ]
];

//  Nms, Pbw to stop_freq[f]:
const TNS_PARAM_STOP_FREQ = [
    [
        [ 80,   0],
        [160,   0],
        [240,   0],
        [160, 320],
        [200, 400]
    ],
    [
        [ 60,   0],
        [120,   0],
        [180,   0],
        [120, 240],
        [150, 300]
    ]
];

//  Nms, Pbw to sub_start[f][s]:
const TNS_PARAM_SUB_START = [
    [
        [
            [ 12,  34,  57],
            [  0,   0,   0]
        ],
        [
            [ 12,  61, 110],
            [  0,   0,   0]
        ],
        [
            [ 12,  88, 164],
            [  0,   0,   0]
        ],
        [
            [ 12,  61, 110],
            [160, 213, 266]
        ],
        [
            [ 12,  74, 137],
            [200, 266, 333]
        ]
    ],
    [
        [
            [  9,  26,  43],
            [  0,   0,   0],
        ],
        [
            [  9,  46,  83],
            [  0,   0,   0],
        ],
        [
            [  9,  66, 123],
            [  0,   0,   0],
        ],
        [
            [  9,  46,  82],
            [120, 159, 200],
        ],
        [
            [  9,  56, 103],
            [150, 200, 250],
        ],
    ]
];

//  Nms, Pbw to sub_stop[f][s]:
const TNS_PARAM_SUB_STOP = [
    [
        [
            [ 34,  57,  80],
            [  0,   0,   0]
        ],
        [
            [ 61, 110, 160],
            [  0,   0,   0]
        ],
        [
            [ 88, 164, 240],
            [  0,   0,   0]
        ],
        [
            [ 61, 110, 160],
            [213, 266, 320]
        ],
        [
            [ 74, 137, 200],
            [266, 333, 400]
        ]
    ],
    [
        [
            [ 26,  43,  60],
            [  0,   0,   0]
        ],
        [
            [ 46,  83, 120],
            [  0,   0,   0]
        ],
        [
            [ 66, 123, 180],
            [  0,   0,   0]
        ],
        [
            [ 46,  82, 120],
            [159, 200, 240]
        ],
        [
            [ 56, 103, 150],
            [200, 250, 300]
        ]
    ]
];

//  TNS_LPC_WEIGHTING_TH[Nms] = 48 * Nms.
const TNS_LPC_WEIGHTING_TH = [
    480, //  [0] = 48 * Nms(= 10ms).
    360  //  [1] = 48 * Nms(= 7.5ms).
];

//  Export public APIs.
module.exports = {
    "AC_TNS_ORDER_BITS": AC_TNS_ORDER_BITS,
    "AC_TNS_ORDER_FREQ": AC_TNS_ORDER_FREQ,
    "AC_TNS_ORDER_CUMFREQ": AC_TNS_ORDER_CUMFREQ,
    "AC_TNS_COEF_BITS": AC_TNS_COEF_BITS,
    "AC_TNS_COEF_FREQ": AC_TNS_COEF_FREQ,
    "AC_TNS_COEF_CUMFREQ": AC_TNS_COEF_CUMFREQ,
    "TNS_PARAM_NUM_TNS_FILTERS": TNS_PARAM_NUM_TNS_FILTERS,
    "TNS_PARAM_START_FREQ": TNS_PARAM_START_FREQ,
    "TNS_PARAM_STOP_FREQ": TNS_PARAM_STOP_FREQ,
    "TNS_PARAM_SUB_START": TNS_PARAM_SUB_START,
    "TNS_PARAM_SUB_STOP": TNS_PARAM_SUB_STOP,
    "TNS_LPC_WEIGHTING_TH": TNS_LPC_WEIGHTING_TH
};