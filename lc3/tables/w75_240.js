//
//  Copyright 2021 XiaoJSoft Studio. All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE.md file.
//

//
//  Constants.
//

//  Table 3.7.3.2.4.
const W75_240 = [
    1.848330370601890e-03, 2.564818394430541e-03, 3.367621175255762e-03,
    4.287366172947020e-03, 5.338301429131479e-03, 6.526792229804446e-03,
    7.861125872744963e-03, 9.346281793294168e-03, 1.099168677073023e-02,
    1.280111724327587e-02, 1.478059105262588e-02, 1.693070430750747e-02,
    1.925923070409017e-02, 2.176969372101092e-02, 2.446859826144651e-02,
    2.735565427385896e-02, 3.043192302576378e-02, 3.369804639006632e-02,
    3.715835772551574e-02, 4.081481795207546e-02, 4.467080684234739e-02,
    4.872629952625619e-02, 5.298206325441551e-02, 5.743824696664848e-02,
    6.209685798752235e-02, 6.696097666085293e-02, 7.202983636789818e-02,
    7.730391464771366e-02, 8.278255740953620e-02, 8.846821015931731e-02,
    9.436075664518449e-02, 1.004602720036002e-01, 1.067638237504515e-01,
    1.132736794406103e-01, 1.199864202730101e-01, 1.269035206805856e-01,
    1.340208531277774e-01, 1.413395568701277e-01, 1.488572112889720e-01,
    1.565736853381255e-01, 1.644846220563571e-01, 1.725890765381433e-01,
    1.808790898204713e-01, 1.893543196006846e-01, 1.980122435284018e-01,
    2.068541409946420e-01, 2.158753187570538e-01, 2.250686723708130e-01,
    2.344274072499690e-01, 2.439483137105153e-01, 2.536279928378056e-01,
    2.634640609879333e-01, 2.734504944781370e-01, 2.835821889865098e-01,
    2.938534694786572e-01, 3.042573734615632e-01, 3.147909140113310e-01,
    3.254491234269504e-01, 3.362274096618026e-01, 3.471187602907065e-01,
    3.581201769604495e-01, 3.692246633783371e-01, 3.804277928712796e-01,
    3.917200227416179e-01, 4.030970221548365e-01, 4.145519552168687e-01,
    4.260817186124239e-01, 4.376763184816823e-01, 4.493301956572350e-01,
    4.610348550393067e-01, 4.727860432828289e-01, 4.845767771787368e-01,
    4.964017067665196e-01, 5.082524575564947e-01, 5.201220784839651e-01,
    5.320020770005417e-01, 5.438880897441558e-01, 5.557716011811357e-01,
    5.676457387746829e-01, 5.795027863150121e-01, 5.913350345927856e-01,
    6.031383674734400e-01, 6.149041716859808e-01, 6.266239411056014e-01,
    6.382888344252021e-01, 6.498933747767719e-01, 6.614323601501731e-01,
    6.729025139063478e-01, 6.842937498334491e-01, 6.956004595358826e-01,
    7.068117836489756e-01, 7.179234245192330e-01, 7.289313857272890e-01,
    7.398327727973596e-01, 7.506189823719328e-01, 7.612840534177552e-01,
    7.718189187016244e-01, 7.822209919639922e-01, 7.924813304551203e-01,
    8.025994477230463e-01, 8.125652295019083e-01, 8.223771289200885e-01,
    8.320305183749199e-01, 8.415232076745133e-01, 8.508483129483138e-01,
    8.600024117819522e-01, 8.689798808251054e-01, 8.777783467294870e-01,
    8.863959039558345e-01, 8.948294207910807e-01, 9.030776256602892e-01,
    9.111326521556180e-01, 9.189935853649371e-01, 9.266529369336567e-01,
    9.341114204165168e-01, 9.413643442928993e-01, 9.484129673709889e-01,
    9.552556295973936e-01, 9.618920131378678e-01, 9.683163629086772e-01,
    9.745301563621191e-01, 9.805283381417256e-01, 9.863139277672938e-01,
    9.918860486198928e-01, 9.972463447664014e-01, 1.002391896644578e+00,
    1.007319464375827e+00, 1.012027073435850e+00, 1.016516541512393e+00,
    1.020794302688699e+00, 1.024860815794490e+00, 1.028714705809749e+00,
    1.032351702719174e+00, 1.035773750472822e+00, 1.038984315074006e+00,
    1.041987855398911e+00, 1.044785643573356e+00, 1.047378184121997e+00,
    1.049767431495211e+00, 1.051954045543143e+00, 1.053942898562160e+00,
    1.055734631473796e+00, 1.057341767323983e+00, 1.058757264938716e+00,
    1.059986744473714e+00, 1.061036716870687e+00, 1.061906510844496e+00,
    1.062603694906377e+00, 1.063132893292572e+00, 1.063502373941053e+00,
    1.063709808061891e+00, 1.063763223461893e+00, 1.063667646046172e+00,
    1.063430118187021e+00, 1.063056564385666e+00, 1.062554210368898e+00,
    1.061922346664364e+00, 1.061167017783231e+00, 1.060294689234573e+00,
    1.059314689493745e+00, 1.058234647303768e+00, 1.057058907527535e+00,
    1.055789482473656e+00, 1.054429786866560e+00, 1.052987925902714e+00,
    1.051475051645344e+00, 1.049899300533228e+00, 1.048262129495776e+00,
    1.046566906015578e+00, 1.044816992642391e+00, 1.043021249196200e+00,
    1.041187680907488e+00, 1.039323391025476e+00, 1.037431684165083e+00,
    1.035517573311265e+00, 1.033585105989712e+00, 1.031643708543028e+00,
    1.029699545977279e+00, 1.027759438517856e+00, 1.025827187037112e+00,
    1.023907910886626e+00, 1.022008050685529e+00, 1.020139101207016e+00,
    1.018263100813380e+00, 1.016879010849981e+00, 1.014921948187593e+00,
    1.013096623369458e+00, 1.011342052440818e+00, 1.009659122960534e+00,
    1.008050363886717e+00, 1.006517540250988e+00, 1.005057992517306e+00,
    1.003669560904293e+00, 1.002353273092562e+00, 1.001109808447114e+00,
    9.999375230640204e-01, 9.988345237783536e-01, 9.978006059268592e-01,
    9.968357558473706e-01, 9.959388811568640e-01, 9.951084589555501e-01,
    9.943434110903315e-01, 9.936429211981983e-01, 9.930058324270904e-01,
    9.924309837770386e-01, 9.919174926403282e-01, 9.914638980147298e-01,
    9.910682139572967e-01, 9.907292184488009e-01, 9.904462245644213e-01,
    9.902178185518503e-01, 9.900419630667118e-01, 9.899170852600004e-01,
    9.898419746989491e-01, 9.898150482937847e-01, 9.898343291371600e-01,
    9.898982107247224e-01, 9.900054030605746e-01, 9.901541892638673e-01,
    9.903424269195302e-01, 9.905684589910844e-01, 9.908309527413479e-01,
    9.911280379271901e-01, 9.914575656842904e-01, 9.918178809274675e-01,
    9.922075589719793e-01, 9.926247572992801e-01, 9.930673584123647e-01,
    9.935333982795475e-01, 9.940214100660039e-01, 9.945296851337717e-01,
    9.950559636181178e-01, 9.955983505434736e-01, 9.961555801042186e-01,
    9.967256267769223e-01, 9.973060922083319e-01, 9.978952138542876e-01,
    9.984914406319209e-01, 9.990928899877792e-01, 9.996970625756828e-01,
    1.000303029223210e+00, 1.000907933607887e+00, 1.001510838557739e+00,
    1.002109225614564e+00, 1.002701184533730e+00, 1.003285129964668e+00,
    1.003859256498246e+00, 1.004421109631332e+00, 1.004968601327613e+00,
    1.005500403806944e+00, 1.006014548452834e+00, 1.006508690831783e+00,
    1.006981038626341e+00, 1.007430041056790e+00, 1.007853640055005e+00,
    1.008249618432853e+00, 1.008616036239346e+00, 1.008951378362138e+00,
    1.009253896674588e+00, 1.009521341935844e+00, 1.009751751331617e+00,
    1.009943714668776e+00, 1.010095497366507e+00, 1.010204876790192e+00,
    1.010270073045154e+00, 1.010289752336835e+00, 1.010262269696272e+00,
    1.010185615431975e+00, 1.010058196828792e+00, 1.009878817836722e+00,
    1.009645930489341e+00, 1.009357533197330e+00, 1.009012281815637e+00,
    1.008609594360786e+00, 1.008148366592626e+00, 1.007626743165711e+00,
    1.007043430506158e+00, 1.006397749801444e+00, 1.005688767931258e+00,
    1.004915585834316e+00, 1.004077678781271e+00, 1.003174288376062e+00,
    1.002204242070086e+00, 1.001166836141424e+00, 1.000062480839591e+00,
    9.988914218622672e-01, 9.976522518001048e-01, 9.963438555404762e-01,
    9.949674620221296e-01, 9.935246630184282e-01, 9.920139269077016e-01,
    9.904332831340030e-01, 9.887851470099116e-01, 9.870726808604894e-01,
    9.852974426119764e-01, 9.834011611313795e-01, 9.809494177655508e-01,
    9.787827290446353e-01, 9.764682383490441e-01, 9.740428502007106e-01,
    9.714988482797869e-01, 9.688299679017578e-01, 9.660309739278938e-01,
    9.630951038651144e-01, 9.600181976898812e-01, 9.567957384046786e-01,
    9.534262666962353e-01, 9.499034823039632e-01, 9.462221151684139e-01,
    9.423758195026390e-01, 9.383617015143452e-01, 9.341777978631194e-01,
    9.298231239088762e-01, 9.252923195046721e-01, 9.205801200661107e-01,
    9.156797929682001e-01, 9.105906042938267e-01, 9.053150301587091e-01,
    8.998527561071954e-01, 8.941994971184931e-01, 8.883501524279332e-01,
    8.823016313374981e-01, 8.760548741525249e-01, 8.696123849407055e-01,
    8.629727993296973e-01, 8.561351975749198e-01, 8.490981786073120e-01,
    8.418570243421116e-01, 8.344140550191105e-01, 8.267746168752393e-01,
    8.189392440268611e-01, 8.109048914872936e-01, 8.026753184506191e-01,
    7.942537505258295e-01, 7.856416615920516e-01, 7.768386086617421e-01,
    7.678531932560713e-01, 7.586851806705738e-01, 7.493306577133620e-01,
    7.398091711550503e-01, 7.301099443577747e-01, 7.202477806201014e-01,
    7.102241609901638e-01, 7.000443258461506e-01, 6.897118895404929e-01,
    6.792311541046628e-01, 6.686081789247391e-01, 6.578509967842496e-01,
    6.469657182336516e-01, 6.359596166227444e-01, 6.248403358991607e-01,
    6.136035026791002e-01, 6.022650906421884e-01, 5.908290833732823e-01,
    5.793094079430561e-01, 5.677111240020907e-01, 5.560374156751429e-01,
    5.442936643492620e-01, 5.324897680536480e-01, 5.206360841136255e-01,
    5.087432727680400e-01, 4.968111660413653e-01, 4.848498807089364e-01,
    4.728681073650310e-01, 4.608759183794885e-01, 4.488810806327018e-01,
    4.368910387727512e-01, 4.249120223507826e-01, 4.129606031641687e-01,
    4.010358962877044e-01, 3.891578667449375e-01, 3.773221988116735e-01,
    3.655437668630012e-01, 3.538323564250667e-01, 3.421961154339837e-01,
    3.306448201086834e-01, 3.191875589898712e-01, 3.078333093391901e-01,
    2.965881816516454e-01, 2.854637165360221e-01, 2.744624088577634e-01,
    2.636095844768899e-01, 2.528831011433226e-01, 2.423234889711821e-01,
    2.319257462841697e-01, 2.216908373695833e-01, 2.116380576950307e-01,
    2.017669202945304e-01, 1.920822358183417e-01, 1.825891600132626e-01,
    1.733059967407588e-01, 1.642292000450303e-01, 1.553626542479246e-01,
    1.467170785977411e-01, 1.382993914151456e-01, 1.301050780767305e-01,
    1.221453099291547e-01, 1.144234581921691e-01, 1.069410759923033e-01,
    9.970258934460623e-02, 9.271242833748693e-02, 8.597374270620267e-02,
    7.948933111952143e-02, 7.326165794605345e-02, 6.729341023108891e-02,
    6.158740810076327e-02, 5.614580025932222e-02, 5.097007470356519e-02,
    4.606170471457775e-02, 4.142201169265410e-02, 3.705141887506228e-02,
    3.294946662279392e-02, 2.911533269413120e-02, 2.554764013238235e-02,
    2.224377112828603e-02, 1.920006589797908e-02, 1.641222045266977e-02,
    1.387476111201306e-02, 1.158063529909875e-02, 9.522136642215920e-03,
    7.691373795814687e-03, 6.072078331193099e-03, 4.625812168742676e-03,
    3.606851641625968e-03, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00,
    0.000000000000000e+00, 0.000000000000000e+00, 0.000000000000000e+00
];

//  Export public APIs.
module.exports = {
    "W75_240": W75_240
};