//
//  Copyright 2021 XiaoJSoft Studio. All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE.md file.
//

//
//  Constants.
//

//  Table 3.7.3.2.5.
const W75_360 = [
    1.721526681611966e-03, 2.208248743046650e-03, 2.689017522595345e-03,
    3.226133417706577e-03, 3.810144195090351e-03, 4.453719317184182e-03,
    5.153692399681317e-03, 5.915524734289813e-03, 6.738691584410875e-03,
    7.628618406907552e-03, 8.583614568030036e-03, 9.609384374613759e-03,
    1.070607532160120e-02, 1.187597226083452e-02, 1.311901297315944e-02,
    1.443901078588673e-02, 1.583353014097089e-02, 1.730630810758647e-02,
    1.885847112173313e-02, 2.049186515516006e-02, 2.220614764140174e-02,
    2.400571662419946e-02, 2.588835928921542e-02, 2.785523259150068e-02,
    2.990591454016386e-02, 3.204158944817544e-02, 3.426100132985917e-02,
    3.656809727321165e-02, 3.896167212395468e-02, 4.144358235567028e-02,
    4.401407955156517e-02, 4.667421691393490e-02, 4.942146249896087e-02,
    5.225884889914327e-02, 5.518493372761350e-02, 5.820051428449914e-02,
    6.130598448769178e-02, 6.450383844383757e-02, 6.779139227807153e-02,
    7.117078328947134e-02, 7.464110714806732e-02, 7.820280530933912e-02,
    8.185495207937329e-02, 8.560001618878993e-02, 8.943576174662307e-02,
    9.336425891679158e-02, 9.738467025048170e-02, 1.014967178422148e-01,
    1.056987601379146e-01, 1.099936025389733e-01, 1.143782870006880e-01,
    1.188535076446910e-01, 1.234192774722812e-01, 1.280759966861818e-01,
    1.328205805921621e-01, 1.376554565476283e-01, 1.425786478649834e-01,
    1.475905216894996e-01, 1.526904374639564e-01, 1.578788527293271e-01,
    1.631525285166384e-01, 1.685133626404965e-01, 1.739579689655531e-01,
    1.794847365410843e-01, 1.850931046131430e-01, 1.907848350801405e-01,
    1.965564972779563e-01, 2.024104194879864e-01, 2.083454334275949e-01,
    2.143598248322309e-01, 2.204503651331880e-01, 2.266172963796335e-01,
    2.328562792793315e-01, 2.391679406203077e-01, 2.455506417347264e-01,
    2.520039508016560e-01, 2.585261682883327e-01, 2.651184076263592e-01,
    2.717759113203786e-01, 2.784985387736362e-01, 2.852846062288917e-01,
    2.921324591263930e-01, 2.990384315995911e-01, 3.060042559686472e-01,
    3.130265290443111e-01, 3.201048623655521e-01, 3.272373243719107e-01,
    3.344232095441687e-01, 3.416586222430363e-01, 3.489449761645191e-01,
    3.562792519116003e-01, 3.636600340252121e-01, 3.710851463600319e-01,
    3.785543267164805e-01, 3.860626951895035e-01, 3.936105536140438e-01,
    4.011952247532815e-01, 4.088152724594432e-01, 4.164684603494585e-01,
    4.241554113955093e-01, 4.318710458458660e-01, 4.396147439144481e-01,
    4.473840194903529e-01, 4.551769877048139e-01, 4.629901375019677e-01,
    4.708246187885389e-01, 4.786765926352632e-01, 4.865454331135768e-01,
    4.944287144003222e-01, 5.023248131381035e-01, 5.102294714645887e-01,
    5.181429265558146e-01, 5.260609162248473e-01, 5.339828176544869e-01,
    5.419068167854945e-01, 5.498312828850233e-01, 5.577512337479950e-01,
    5.656676362338563e-01, 5.735768827770059e-01, 5.814766655477682e-01,
    5.893646610908023e-01, 5.972413384410342e-01, 6.051020131945327e-01,
    6.129461702965266e-01, 6.207702424193973e-01, 6.285720938000074e-01,
    6.363485261821292e-01, 6.440996624336124e-01, 6.518209733012164e-01,
    6.595138217057872e-01, 6.671763816763950e-01, 6.748067951703918e-01,
    6.824007108459023e-01, 6.899588537658654e-01, 6.974757223488888e-01,
    7.049501447553026e-01, 7.123799800931302e-01, 7.197654340542331e-01,
    7.271038329243241e-01, 7.343963718694788e-01, 7.416385606661200e-01,
    7.488296394277816e-01, 7.559666880505324e-01, 7.630492594418218e-01,
    7.700722734566787e-01, 7.770369811015168e-01, 7.839411079555614e-01,
    7.907812565704104e-01, 7.975581136897942e-01, 8.042713809653173e-01,
    8.109149005929875e-01, 8.174908555311138e-01, 8.239970937711972e-01,
    8.304327850184938e-01, 8.367969496408532e-01, 8.430892979726279e-01,
    8.493058471422328e-01, 8.554473095679163e-01, 8.615110365133289e-01,
    8.674962806836773e-01, 8.734007983991156e-01, 8.792275183442975e-01,
    8.849724383046952e-01, 8.906357189698083e-01, 8.962171727097513e-01,
    9.017164138681113e-01, 9.071287701238782e-01, 9.124565781610174e-01,
    9.176972608396821e-01, 9.228487835702877e-01, 9.279099172570797e-01,
    9.328825964768623e-01, 9.377633225341820e-01, 9.425533559491475e-01,
    9.472524281763984e-01, 9.518602062527468e-01, 9.563760599307146e-01,
    9.608006016536426e-01, 9.651306001536289e-01, 9.693666888567923e-01,
    9.735088121912839e-01, 9.775565405467248e-01, 9.815072260762016e-01,
    9.853645802900605e-01, 9.891262086779957e-01, 9.927942006806012e-01,
    9.963675450849775e-01, 9.998469191683163e-01, 1.003228124845146e+00,
    1.006513411821911e+00, 1.009700729703874e+00, 1.012790289606342e+00,
    1.015782934360887e+00, 1.018682286908352e+00, 1.021486570410198e+00,
    1.024197718428813e+00, 1.026814550859190e+00, 1.029335981099974e+00,
    1.031760429936344e+00, 1.034089812751720e+00, 1.036323258515780e+00,
    1.038463607653629e+00, 1.040511956629397e+00, 1.042468314695544e+00,
    1.044333310154580e+00, 1.046108368522362e+00, 1.047790183156567e+00,
    1.049383335559126e+00, 1.050885649534276e+00, 1.052299234616223e+00,
    1.053625218490635e+00, 1.054862887578656e+00, 1.056015206502275e+00,
    1.057087459299065e+00, 1.058072205849552e+00, 1.058975241719203e+00,
    1.059794467230661e+00, 1.060534138670111e+00, 1.061194118632638e+00,
    1.061773655564821e+00, 1.062276617517642e+00, 1.062703237255151e+00,
    1.063055685508735e+00, 1.063338150260194e+00, 1.063547997184066e+00,
    1.063686067900426e+00, 1.063755566766962e+00, 1.063757434953141e+00,
    1.063693583520601e+00, 1.063566320618061e+00, 1.063377073891492e+00,
    1.063127819699189e+00, 1.062821557530121e+00, 1.062457815392427e+00,
    1.062036342819983e+00, 1.061559958917576e+00, 1.061029510184661e+00,
    1.060447965083549e+00, 1.059817091581481e+00, 1.059141628118411e+00,
    1.058421358875364e+00, 1.057658760384513e+00, 1.056853774077034e+00,
    1.056007614360998e+00, 1.055120057365395e+00, 1.054195045438248e+00,
    1.053233455551333e+00, 1.052239850719546e+00, 1.051216675517538e+00,
    1.050166369287038e+00, 1.049087785713381e+00, 1.047983664181190e+00,
    1.046853337647985e+00, 1.045698595146235e+00, 1.044520564730305e+00,
    1.043323481681635e+00, 1.042108306824389e+00, 1.040879073476582e+00,
    1.039636032987793e+00, 1.038380985588667e+00, 1.037114029603682e+00,
    1.035838134533162e+00, 1.034552762539362e+00, 1.033262000621490e+00,
    1.031967497567261e+00, 1.030671997181282e+00, 1.029375639312502e+00,
    1.028082437365047e+00, 1.026791666942681e+00, 1.025506352493464e+00,
    1.024226550306258e+00, 1.022955584022344e+00, 1.021692989563247e+00,
    1.020444748460154e+00, 1.019207332137853e+00, 1.017999919156420e+00,
    1.017160217193961e+00, 1.015872887197225e+00, 1.014617829299498e+00,
    1.013397380801344e+00, 1.012210174593533e+00, 1.011056516187721e+00,
    1.009934436494794e+00, 1.008845591036958e+00, 1.007789557609578e+00,
    1.006767901472734e+00, 1.005778512486221e+00, 1.004821733696763e+00,
    1.003895920161236e+00, 1.003002618498964e+00, 1.002140907258662e+00,
    1.001312127031557e+00, 1.000514601809148e+00, 9.997489875663875e-01,
    9.990134860651736e-01, 9.983092287560527e-01, 9.976349335738018e-01,
    9.969918851181095e-01, 9.963786013745719e-01, 9.957959823242557e-01,
    9.952422174315529e-01, 9.947181322797367e-01, 9.942221216035205e-01,
    9.937553132700969e-01, 9.933162157118496e-01, 9.929058092648040e-01,
    9.925224215680564e-01, 9.921669569649387e-01, 9.918377038474807e-01,
    9.915355084098528e-01, 9.912586027088507e-01, 9.910078784250421e-01,
    9.907817226664765e-01, 9.905811038723256e-01, 9.904043360106435e-01,
    9.902522665150607e-01, 9.901231181863754e-01, 9.900177259420802e-01,
    9.899343252516752e-01, 9.898737119947000e-01, 9.898341100636087e-01,
    9.898163585163330e-01, 9.898187066647253e-01, 9.898419976335596e-01,
    9.898844376083749e-01, 9.899468001787191e-01, 9.900272871794666e-01,
    9.901266804330273e-01, 9.902431753677082e-01, 9.903775935673591e-01,
    9.905281337320039e-01, 9.906955635514434e-01, 9.908780432538649e-01,
    9.910763016962206e-01, 9.912885401035934e-01, 9.915156019790364e-01,
    9.917556658638569e-01, 9.920094690635668e-01, 9.922751554325331e-01,
    9.925534864640656e-01, 9.928426927501408e-01, 9.931435333387140e-01,
    9.934540796611835e-01, 9.937750666306635e-01, 9.941046890713076e-01,
    9.944437415635388e-01, 9.947903979828719e-01, 9.951453611435701e-01,
    9.955067995758305e-01, 9.958755336221258e-01, 9.962496814968456e-01,
    9.966299185765186e-01, 9.970143670156726e-01, 9.974037994063020e-01,
    9.977964044701016e-01, 9.981928706842119e-01, 9.985912855613679e-01,
    9.989924362978263e-01, 9.993945064762333e-01, 9.997982470741876e-01,
    1.000201793638269e+00, 1.000605860368296e+00, 1.001008579910682e+00,
    1.001410701714506e+00, 1.001810400944408e+00, 1.002208462087081e+00,
    1.002602958395831e+00, 1.002994573682287e+00, 1.003381477277237e+00,
    1.003764436338408e+00, 1.004141548053574e+00, 1.004513480396200e+00,
    1.004878321344784e+00, 1.005236884099094e+00, 1.005587302935534e+00,
    1.005930271724399e+00, 1.006263925890636e+00, 1.006589051746658e+00,
    1.006903802351948e+00, 1.007208903587772e+00, 1.007502380110983e+00,
    1.007784982346051e+00, 1.008054893814649e+00, 1.008312868199207e+00,
    1.008556999006399e+00, 1.008788016348394e+00, 1.009004047709048e+00,
    1.009205932867561e+00, 1.009391822060050e+00, 1.009562440424896e+00,
    1.009715896739930e+00, 1.009852958217732e+00, 1.009971774079105e+00,
    1.010073169648632e+00, 1.010155293011166e+00, 1.010218932642345e+00,
    1.010262246288524e+00, 1.010286018304889e+00, 1.010288415013601e+00,
    1.010270296641665e+00, 1.010229878703309e+00, 1.010168022758243e+00,
    1.010082924574326e+00, 1.009975407736885e+00, 1.009843687123529e+00,
    1.009688632854747e+00, 1.009508455280294e+00, 1.009304044596942e+00,
    1.009073713509976e+00, 1.008818483155921e+00, 1.008536750845889e+00,
    1.008229467503460e+00, 1.007894884001199e+00, 1.007533913863759e+00,
    1.007144877861525e+00, 1.006728757854175e+00, 1.006283927891016e+00,
    1.005811456284196e+00, 1.005309913983530e+00, 1.004780527277797e+00,
    1.004221766054862e+00, 1.003634560818982e+00, 1.003017190938855e+00,
    1.002370673225852e+00, 1.001693634792953e+00, 1.000987488105603e+00,
    1.000251075456674e+00, 9.994856628696702e-01, 9.986895923896904e-01,
    9.978636664333774e-01, 9.970063702291652e-01, 9.961191991291183e-01,
    9.952014038559622e-01, 9.942546868773952e-01, 9.932775951012806e-01,
    9.922706506028359e-01, 9.912319673936767e-01, 9.901632857185525e-01,
    9.890643935223216e-01, 9.879371153343368e-01, 9.867797361083076e-01,
    9.855927730842358e-01, 9.843751246861034e-01, 9.831292878900623e-01,
    9.813484629113276e-01, 9.798909633127684e-01, 9.784004589849064e-01,
    9.768604354115724e-01, 9.752698788428587e-01, 9.736273532416118e-01,
    9.719313409832228e-01, 9.701804980040253e-01, 9.683726519652567e-01,
    9.665069522597068e-01, 9.645800268203277e-01, 9.625923175883123e-01,
    9.605409863432730e-01, 9.584255335155275e-01, 9.562443932750193e-01,
    9.539984159028931e-01, 9.516840138455831e-01, 9.493011853637791e-01,
    9.468468843298323e-01, 9.443202322315050e-01, 9.417184043233268e-01,
    9.390425796467096e-01, 9.362906241698766e-01, 9.334640497363101e-01,
    9.305608538768808e-01, 9.275805069442316e-01, 9.245195917195164e-01,
    9.213784714413848e-01, 9.181534137230349e-01, 9.148446956130220e-01,
    9.114516516017124e-01, 9.079765240138057e-01, 9.044175450831859e-01,
    9.007763077278617e-01, 8.970500584793123e-01, 8.932383978549314e-01,
    8.893386805647778e-01, 8.853513603848177e-01, 8.812740229566767e-01,
    8.771096379139661e-01, 8.728579265043998e-01, 8.685195050926551e-01,
    8.640927964490425e-01, 8.595798186504622e-01, 8.549760065595760e-01,
    8.502852201263446e-01, 8.455026150386550e-01, 8.406304703204051e-01,
    8.356679254927833e-01, 8.306199433014801e-01, 8.254820069905587e-01,
    8.202589087059164e-01, 8.149466481575340e-01, 8.095466959213909e-01,
    8.040599778581757e-01, 7.984893775294406e-01, 7.928314173180783e-01,
    7.870906681120101e-01, 7.812624496601451e-01, 7.753539468965313e-01,
    7.693636129738075e-01, 7.632917692550881e-01, 7.571390164385375e-01,
    7.509017111797436e-01, 7.445908434203883e-01, 7.382051359832217e-01,
    7.317380750199757e-01, 7.251992870809165e-01, 7.185882252895927e-01,
    7.119056866892599e-01, 7.051536683608545e-01, 6.983326341551366e-01,
    6.914441012238667e-01, 6.844905446038185e-01, 6.774701192768717e-01,
    6.703883753752553e-01, 6.632452099313783e-01, 6.560457800753937e-01,
    6.487886269109083e-01, 6.414771616618185e-01, 6.341143226974428e-01,
    6.267020002885999e-01, 6.192353336355413e-01, 6.117205957668128e-01,
    6.041616120083719e-01, 5.965591325427860e-01, 5.889144007425270e-01,
    5.812347834141942e-01, 5.735199893648143e-01, 5.657706158383411e-01,
    5.579880671567978e-01, 5.501738510234542e-01, 5.423301939386325e-01,
    5.344607980557825e-01, 5.265685382300127e-01, 5.186563241060174e-01,
    5.107288126105302e-01, 5.027811586638018e-01, 4.948194909906872e-01,
    4.868451392486417e-01, 4.788608890561871e-01, 4.708699282370115e-01,
    4.628751440565413e-01, 4.548778943490807e-01, 4.468825120278060e-01,
    4.388893249911809e-01, 4.308981228989757e-01, 4.229183223777856e-01,
    4.149508779761170e-01, 4.069939642056243e-01, 3.990526483957498e-01,
    3.911346135115557e-01, 3.832340305827807e-01, 3.753546526584436e-01,
    3.675020596488621e-01, 3.596800983344559e-01, 3.518873119772211e-01,
    3.441301658282572e-01, 3.364081000913025e-01, 3.287289661673846e-01,
    3.210905051632958e-01, 3.134964181526467e-01, 3.059515649397201e-01,
    2.984543187240678e-01, 2.910105654938703e-01, 2.836211093775042e-01,
    2.762854150573731e-01, 2.690195851087454e-01, 2.618124452057962e-01,
    2.546592323719683e-01, 2.475843475618672e-01, 2.405786941912602e-01,
    2.336470086662776e-01, 2.267884333851989e-01, 2.200019917678347e-01,
    2.133013251703927e-01, 2.066777706538484e-01, 2.001404091043453e-01,
    1.936836302775967e-01, 1.873103432384193e-01, 1.810273838836248e-01,
    1.748394760623094e-01, 1.687396441250690e-01, 1.627372734819174e-01,
    1.568252770506826e-01, 1.510123820588976e-01, 1.452982295367473e-01,
    1.396874693829809e-01, 1.341718422797088e-01, 1.287625441360194e-01,
    1.234555620731477e-01, 1.182546623256352e-01, 1.131596767663045e-01,
    1.081714392735899e-01, 1.032907339774594e-01, 9.852029779063426e-02,
    9.386000226048140e-02, 8.931173602725516e-02, 8.487521028829931e-02,
    8.055237373221881e-02, 7.634297866041770e-02, 7.224892456088809e-02,
    6.826991195487858e-02, 6.440772914585895e-02, 6.066200028414472e-02,
    5.703437111472432e-02, 5.352437147393933e-02, 5.013346896851077e-02,
    4.686107896077298e-02, 4.370844528199226e-02, 4.067483652594974e-02,
    3.776122690656316e-02, 3.496670991534084e-02, 3.229192748331241e-02,
    2.973576687031024e-02, 2.729846292648297e-02, 2.497871856111264e-02,
    2.277625418320712e-02, 2.068958080348780e-02, 1.871781693470649e-02,
    1.685934175287805e-02, 1.511251252352758e-02, 1.347570944951177e-02,
    1.194627091218482e-02, 1.052287538118900e-02, 9.201309412840026e-03,
    7.981243163732707e-03, 6.855473143120775e-03, 5.826573343851640e-03,
    4.878385254226555e-03, 4.023511190940970e-03, 3.154186627586960e-03,
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
    "W75_360": W75_360
};