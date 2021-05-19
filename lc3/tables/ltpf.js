//
//  Copyright 2021 XiaoJSoft Studio. All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE.md file.
//

//
//  Constants.
//

//  tab_resamp_filter[239]:
const TAB_RESAMP_FILTER = [
    -2.043055832879108e-05, -4.463458936757081e-05, -7.163663994481459e-05, 
    -1.001011132655914e-04, -1.283728480660395e-04, -1.545438297704662e-04, 
    -1.765445671257668e-04, -1.922569599584802e-04, -1.996438192500382e-04, 
    -1.968886856400547e-04, -1.825383318834690e-04, -1.556394266046803e-04, 
    -1.158603651792638e-04, -6.358930335348977e-05, +2.810064795067786e-19, 
    +7.292180213001337e-05, +1.523970757644272e-04, +2.349207769898906e-04, 
    +3.163786496265269e-04, +3.922117380894736e-04, +4.576238491064392e-04, 
    +5.078242936704864e-04, +5.382955231045915e-04, +5.450729176175875e-04, 
    +5.250221548270982e-04, +4.760984242947349e-04, +3.975713799264791e-04, 
    +2.902002172907180e-04, +1.563446669975615e-04, -5.818801416923580e-19, 
    -1.732527127898052e-04, -3.563859653300760e-04, -5.411552308801147e-04, 
    -7.184140229675020e-04, -8.785052315963854e-04, -1.011714513697282e-03, 
    -1.108767055632304e-03, -1.161345220483996e-03, -1.162601694464620e-03, 
    -1.107640974148221e-03, -9.939415631563015e-04, -8.216921898513225e-04, 
    -5.940177657925908e-04, -3.170746535382728e-04, +9.746950818779534e-19, 
    +3.452937604228947e-04, +7.044808705458705e-04, +1.061334465662964e-03, 
    +1.398374734488549e-03, +1.697630799350524e-03, +1.941486748731660e-03, 
    +2.113575906669355e-03, +2.199682452179964e-03, +2.188606246517629e-03, 
    +2.072945458973295e-03, +1.849752491313908e-03, +1.521021876908738e-03, 
    +1.093974255016849e-03, +5.811080624426164e-04, -1.422482656398999e-18, 
    -6.271537303228204e-04, -1.274251404913447e-03, -1.912238389850182e-03, 
    -2.510269249380764e-03, -3.037038298629825e-03, -3.462226871101535e-03, 
    -3.758006719596473e-03, -3.900532466948409e-03, -3.871352309895838e-03, 
    -3.658665583679722e-03, -3.258358512646846e-03, -2.674755551508349e-03, 
    -1.921033054368456e-03, -1.019254326838640e-03, +1.869623690895593e-18, 
    +1.098415446732263e-03, +2.231131973532823e-03, +3.348309272768835e-03, 
    +4.397022774386510e-03, +5.323426722644900e-03, +6.075105310368700e-03, 
    +6.603520247552113e-03, +6.866453987193027e-03, +6.830342695906946e-03, 
    +6.472392343549424e-03, +5.782375213956374e-03, +4.764012726389739e-03, 
    +3.435863514113467e-03, +1.831652835406657e-03, -2.251898372838663e-18, 
    -1.996476188279370e-03, -4.082668858919100e-03, -6.173080374929424e-03, 
    -8.174448945974208e-03, -9.988823864332691e-03, -1.151698705819990e-02, 
    -1.266210056063963e-02, -1.333344579518481e-02, -1.345011199343934e-02, 
    -1.294448809639154e-02, -1.176541543002924e-02, -9.880867320401294e-03, 
    -7.280036402392082e-03, -3.974730209151807e-03, +2.509617777250391e-18, 
    +4.586044219717467e-03, +9.703248998383679e-03, +1.525124770818010e-02, 
    +2.111205854013017e-02, +2.715337236094137e-02, +3.323242450843114e-02, 
    +3.920032029020130e-02, +4.490666443426786e-02, +5.020433088017846e-02, 
    +5.495420172681558e-02, +5.902970324375908e-02, +6.232097270672976e-02, 
    +6.473850225260731e-02, +6.621612450840858e-02, +6.671322871619612e-02, 
    +6.621612450840858e-02, +6.473850225260731e-02, +6.232097270672976e-02, 
    +5.902970324375908e-02, +5.495420172681558e-02, +5.020433088017846e-02, 
    +4.490666443426786e-02, +3.920032029020130e-02, +3.323242450843114e-02, 
    +2.715337236094137e-02, +2.111205854013017e-02, +1.525124770818010e-02, 
    +9.703248998383679e-03, +4.586044219717467e-03, +2.509617777250391e-18, 
    -3.974730209151807e-03, -7.280036402392082e-03, -9.880867320401294e-03, 
    -1.176541543002924e-02, -1.294448809639154e-02, -1.345011199343934e-02, 
    -1.333344579518481e-02, -1.266210056063963e-02, -1.151698705819990e-02, 
    -9.988823864332691e-03, -8.174448945974208e-03, -6.173080374929424e-03, 
    -4.082668858919100e-03, -1.996476188279370e-03, -2.251898372838663e-18, 
    +1.831652835406657e-03, +3.435863514113467e-03, +4.764012726389739e-03, 
    +5.782375213956374e-03, +6.472392343549424e-03, +6.830342695906946e-03, 
    +6.866453987193027e-03, +6.603520247552113e-03, +6.075105310368700e-03, 
    +5.323426722644900e-03, +4.397022774386510e-03, +3.348309272768835e-03,
    +2.231131973532823e-03, +1.098415446732263e-03, +1.869623690895593e-18,
    -1.019254326838640e-03, -1.921033054368456e-03, -2.674755551508349e-03,
    -3.258358512646846e-03, -3.658665583679722e-03, -3.871352309895838e-03,
    -3.900532466948409e-03, -3.758006719596473e-03, -3.462226871101535e-03,
    -3.037038298629825e-03, -2.510269249380764e-03, -1.912238389850182e-03,
    -1.274251404913447e-03, -6.271537303228204e-04, -1.422482656398999e-18,
    +5.811080624426164e-04, +1.093974255016849e-03, +1.521021876908738e-03,
    +1.849752491313908e-03, +2.072945458973295e-03, +2.188606246517629e-03,
    +2.199682452179964e-03, +2.113575906669355e-03, +1.941486748731660e-03,
    +1.697630799350524e-03, +1.398374734488549e-03, +1.061334465662964e-03,
    +7.044808705458705e-04, +3.452937604228947e-04, +9.746950818779534e-19,
    -3.170746535382728e-04, -5.940177657925908e-04, -8.216921898513225e-04,
    -9.939415631563015e-04, -1.107640974148221e-03, -1.162601694464620e-03,
    -1.161345220483996e-03, -1.108767055632304e-03, -1.011714513697282e-03,
    -8.785052315963854e-04, -7.184140229675020e-04, -5.411552308801147e-04,
    -3.563859653300760e-04, -1.732527127898052e-04, -5.818801416923580e-19,
    +1.563446669975615e-04, +2.902002172907180e-04, +3.975713799264791e-04,
    +4.760984242947349e-04, +5.250221548270982e-04, +5.450729176175875e-04,
    +5.382955231045915e-04, +5.078242936704864e-04, +4.576238491064392e-04,
    +3.922117380894736e-04, +3.163786496265269e-04, +2.349207769898906e-04,
    +1.523970757644272e-04, +7.292180213001337e-05, +2.810064795067786e-19,
    -6.358930335348977e-05, -1.158603651792638e-04, -1.556394266046803e-04,
    -1.825383318834690e-04, -1.968886856400547e-04, -1.996438192500382e-04,
    -1.922569599584802e-04, -1.765445671257668e-04, -1.545438297704662e-04,
    -1.283728480660395e-04, -1.001011132655914e-04, -7.163663994481459e-05,
    -4.463458936757081e-05, -2.043055832879108e-05   
];

//  tab_ltpf_interp_R[31]:
const TAB_LTPF_INTERP_R = [
    -2.874561161519444e-03, -3.001251025861499e-03, +2.745471654059321e-03, 
    +1.535727698935322e-02, +2.868234046665657e-02, +2.950385026557377e-02, 
    +4.598334491135473e-03, -4.729632459043440e-02, -1.058359163062837e-01, 
    -1.303050213607112e-01, -7.544046357555201e-02, +8.357885725250529e-02, 
    +3.301825710764459e-01, +6.032970076366158e-01, +8.174886856243178e-01, 
    +8.986382851273982e-01, +8.174886856243178e-01, +6.032970076366158e-01, 
    +3.301825710764459e-01, +8.357885725250529e-02, -7.544046357555201e-02, 
    -1.303050213607112e-01, -1.058359163062837e-01, -4.729632459043440e-02, 
    +4.598334491135473e-03, +2.950385026557377e-02, +2.868234046665657e-02, 
    +1.535727698935322e-02, +2.745471654059321e-03, -3.001251025861499e-03, 
    -2.874561161519444e-03
];

//  tab_ltpf_interp_x12k8[15]:
const TAB_LTPF_INTERP_X12K8 = [
    +6.698858366939680e-03, +3.967114782344967e-02, +1.069991860896389e-01,
    +2.098804630681809e-01, +3.356906254147840e-01, +4.592209296082350e-01, 
    +5.500750019177116e-01, +5.835275754221211e-01, +5.500750019177116e-01,
    +4.592209296082350e-01, +3.356906254147840e-01, +2.098804630681809e-01,
    +1.069991860896389e-01, +3.967114782344967e-02, +6.698858366939680e-03
];

//  tab_ltpf_num_8000[4][3]:
const TAB_LTPF_NUM_8000 = [
    [6.023618207009578e-01,4.197609261363617e-01,-1.883424527883687e-02],
    [5.994768582584314e-01,4.197609261363620e-01,-1.594928283631041e-02],
    [5.967764663733787e-01,4.197609261363617e-01,-1.324889095125780e-02],
    [5.942410120098895e-01,4.197609261363618e-01,-1.071343658776831e-02]
];

//  tab_ltpf_num_16000[4][3]:
const TAB_LTPF_NUM_16000 = [
    [6.023618207009578e-01,4.197609261363617e-01,-1.883424527883687e-02],
    [5.994768582584314e-01,4.197609261363620e-01,-1.594928283631041e-02],
    [5.967764663733787e-01,4.197609261363617e-01,-1.324889095125780e-02],
    [5.942410120098895e-01,4.197609261363618e-01,-1.071343658776831e-02]
];

//  tab_ltpf_num_24000[4][5]:
const TAB_LTPF_NUM_24000 = [
    [3.989695588963494e-01,5.142508607708275e-01,1.004382966157454e-01,-1.278893956818042e-02,-1.572280075461383e-03],
    [3.948634911286333e-01,5.123819208048688e-01,1.043194926386267e-01,-1.091999960222166e-02,-1.347408330627317e-03],
    [3.909844475885914e-01,5.106053522688359e-01,1.079832524685944e-01,-9.143431066188848e-03,-1.132124620551895e-03],
    [3.873093888199928e-01,5.089122083363975e-01,1.114517380217371e-01,-7.450287133750717e-03,-9.255514050963111e-04]
];

//  tab_ltpf_num_32000[4][7]:
const TAB_LTPF_NUM_32000 = [
    [2.982379446702096e-01,4.652809203721290e-01,2.105997428614279e-01,3.766780380806063e-02,-1.015696155796564e-02,-2.535880996101096e-03,-3.182946168719958e-04],
    [2.943834154510240e-01,4.619294002718798e-01,2.129465770091844e-01,4.066175002688857e-02,-8.693272297010050e-03,-2.178307114679820e-03,-2.742888063983188e-04],
    [2.907439213122688e-01,4.587461910960279e-01,2.151456974108970e-01,4.350104772529774e-02,-7.295495347716925e-03,-1.834395637237086e-03,-2.316920186482416e-04],
    [2.872975852589158e-01,4.557148886861379e-01,2.172126950911401e-01,4.620088878229615e-02,-5.957463802125952e-03,-1.502934284345198e-03,-1.903851911308866e-04]
];

//  tab_ltpf_num_48000[4][11]:
const TAB_LTPF_NUM_48000 = [
    [1.981363739883217e-01,3.524494903964904e-01,2.513695269649414e-01,1.424146237314458e-01,5.704731023952599e-02,9.293366241586384e-03,-7.226025368953745e-03,-3.172679890356356e-03,-1.121835963567014e-03,-2.902957238400140e-04,-4.270815593769240e-05],
    [1.950709426598375e-01,3.484660408341632e-01,2.509988459466574e-01,1.441167412482088e-01,5.928947317677285e-02,1.108923827452231e-02,-6.192908108653504e-03,-2.726705509251737e-03,-9.667125826217151e-04,-2.508100923165204e-04,-3.699938766131869e-05],
    [1.921810055196015e-01,3.446945561091513e-01,2.506220094626024e-01,1.457102447664837e-01,6.141132133664525e-02,1.279941396562798e-02,-5.203721087886321e-03,-2.297324511109085e-03,-8.165608133217555e-04,-2.123855748277408e-04,-3.141271330981649e-05],
    [1.894485314175868e-01,3.411139251108252e-01,2.502406876894361e-01,1.472065631098081e-01,6.342477229539051e-02,1.443203434150312e-02,-4.254449144657098e-03,-1.883081472613493e-03,-6.709619060722140e-04,-1.749363341966872e-04,-2.593864735284285e-05]
];

//  tab_ltpf_den_8000[4][5]:
const TAB_LTPF_DEN_8000 = [
    [0.000000000000000e+00, 2.098804630681809e-01, 5.835275754221211e-01, 2.098804630681809e-01, 0.000000000000000e+00],
    [0.000000000000000e+00, 1.069991860896389e-01, 5.500750019177116e-01, 3.356906254147840e-01, 6.698858366939680e-03],
    [0.000000000000000e+00, 3.967114782344967e-02, 4.592209296082350e-01, 4.592209296082350e-01, 3.967114782344967e-02],
    [0.000000000000000e+00, 6.698858366939680e-03, 3.356906254147840e-01, 5.500750019177116e-01, 1.069991860896389e-01]
];

//  tab_ltpf_den_16000[4][5]:
const TAB_LTPF_DEN_16000 = [
    [0.000000000000000e+00, 2.098804630681809e-01, 5.835275754221211e-01, 2.098804630681809e-01, 0.000000000000000e+00],
    [0.000000000000000e+00, 1.069991860896389e-01, 5.500750019177116e-01, 3.356906254147840e-01, 6.698858366939680e-03],
    [0.000000000000000e+00, 3.967114782344967e-02, 4.592209296082350e-01, 4.592209296082350e-01, 3.967114782344967e-02],
    [0.000000000000000e+00, 6.698858366939680e-03, 3.356906254147840e-01, 5.500750019177116e-01, 1.069991860896389e-01]
];

//  tab_ltpf_den_24000[4][7]:
const TAB_LTPF_DEN_24000 = [
    [0.000000000000000e+00, 6.322231627323796e-02, 2.507309606013235e-01, 3.713909428901578e-01, 2.507309606013235e-01, 6.322231627323796e-02, 0.000000000000000e+00],
    [0.000000000000000e+00, 3.459272174099855e-02, 1.986515602645028e-01, 3.626411726581452e-01, 2.986750548992179e-01, 1.013092873505928e-01, 4.263543712369752e-03],
    [0.000000000000000e+00, 1.535746784963907e-02, 1.474344878058222e-01, 3.374259553990717e-01, 3.374259553990717e-01, 1.474344878058222e-01, 1.535746784963907e-02],
    [0.000000000000000e+00, 4.263543712369752e-03, 1.013092873505928e-01, 2.986750548992179e-01, 3.626411726581452e-01, 1.986515602645028e-01, 3.459272174099855e-02]
];

//  tab_ltpf_den_32000[4][9]:
const TAB_LTPF_DEN_32000 = [
    [0.000000000000000e+00, 2.900401878228730e-02, 1.129857420560927e-01, 2.212024028097570e-01, 2.723909472446145e-01, 2.212024028097570e-01, 1.129857420560927e-01, 2.900401878228730e-02, 0.000000000000000e+00],
    [0.000000000000000e+00, 1.703153418385261e-02, 8.722503785537784e-02, 1.961407762232199e-01, 2.689237982237257e-01, 2.424999102756389e-01, 1.405773364650031e-01, 4.474877169485788e-02, 3.127030243100724e-03],
    [0.000000000000000e+00, 8.563673748488349e-03, 6.426222944493845e-02, 1.687676705918012e-01, 2.587445937795505e-01, 2.587445937795505e-01, 1.687676705918012e-01, 6.426222944493845e-02, 8.563673748488349e-03],
    [0.000000000000000e+00, 3.127030243100724e-03, 4.474877169485788e-02, 1.405773364650031e-01, 2.424999102756389e-01, 2.689237982237257e-01, 1.961407762232199e-01, 8.722503785537784e-02, 1.703153418385261e-02]
];

//  tab_ltpf_den_48000[4][13]:
const TAB_LTPF_DEN_48000 = [
    [0.000000000000000e+00, 1.082359386659387e-02, 3.608969221303979e-02, 7.676401468099964e-02, 1.241530577501703e-01, 1.627596438300696e-01, 1.776771417779109e-01, 1.627596438300696e-01, 1.241530577501703e-01, 7.676401468099964e-02, 3.608969221303979e-02, 1.082359386659387e-02, 0.000000000000000e+00],
    [0.000000000000000e+00, 7.041404930459358e-03, 2.819702319820420e-02, 6.547044935127551e-02, 1.124647986743299e-01, 1.548418956489015e-01, 1.767122381341857e-01, 1.691507213057663e-01, 1.352901577989766e-01, 8.851425011427483e-02, 4.499353848562444e-02, 1.557613714732002e-02, 2.039721956502016e-03],
    [0.000000000000000e+00, 4.146998467444788e-03, 2.135757310741917e-02, 5.482735584552816e-02, 1.004971444643720e-01, 1.456060342830002e-01, 1.738439838565869e-01, 1.738439838565869e-01, 1.456060342830002e-01, 1.004971444643720e-01, 5.482735584552816e-02, 2.135757310741917e-02, 4.146998467444788e-03],
    [0.000000000000000e+00, 2.039721956502016e-03, 1.557613714732002e-02, 4.499353848562444e-02, 8.851425011427483e-02, 1.352901577989766e-01, 1.691507213057663e-01, 1.767122381341857e-01, 1.548418956489015e-01, 1.124647986743299e-01, 6.547044935127551e-02, 2.819702319820420e-02, 7.041404930459358e-03]
];

//  Export public APIs.
module.exports = {
    "TAB_RESAMP_FILTER": TAB_RESAMP_FILTER,
    "TAB_LTPF_INTERP_R": TAB_LTPF_INTERP_R,
    "TAB_LTPF_INTERP_X12K8": TAB_LTPF_INTERP_X12K8,
    "TAB_LTPF_NUM_8000": TAB_LTPF_NUM_8000,
    "TAB_LTPF_NUM_16000": TAB_LTPF_NUM_16000,
    "TAB_LTPF_NUM_24000": TAB_LTPF_NUM_24000,
    "TAB_LTPF_NUM_32000": TAB_LTPF_NUM_32000,
    "TAB_LTPF_NUM_48000": TAB_LTPF_NUM_48000,
    "TAB_LTPF_DEN_8000": TAB_LTPF_DEN_8000,
    "TAB_LTPF_DEN_16000": TAB_LTPF_DEN_16000,
    "TAB_LTPF_DEN_24000": TAB_LTPF_DEN_24000,
    "TAB_LTPF_DEN_32000": TAB_LTPF_DEN_32000,
    "TAB_LTPF_DEN_48000": TAB_LTPF_DEN_48000
};