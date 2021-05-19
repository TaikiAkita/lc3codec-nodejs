//
//  Copyright 2021 XiaoJSoft Studio. All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE.md file.
//

//
//  Constants.
//

//  Table 3.7.3.1.3.
const W10_240 = [
    -3.613496418928369e-04, -7.078546706512391e-04, -1.074443637110903e-03,
    -1.533478537964509e-03, -2.098197727900724e-03, -2.778420871815740e-03,
    -3.584129920673041e-03, -4.525198076002370e-03, -5.609327243712055e-03,
    -6.843234536105624e-03, -8.233976327300612e-03, -9.785314755557023e-03,
    -1.149880303071551e-02, -1.337713096257934e-02, -1.542181679511618e-02,
    -1.762979910961727e-02, -1.999721557401502e-02, -2.252080561390149e-02,
    -2.519406300389030e-02, -2.800909464274782e-02, -3.095765092956728e-02,
    -3.402996266948349e-02, -3.721502082245055e-02, -4.050053247568393e-02,
    -4.387219218706189e-02, -4.731768261606175e-02, -5.082325342672667e-02,
    -5.437166635159518e-02, -5.794654834034055e-02, -6.153426201732499e-02,
    -6.511708163113709e-02, -6.867606753531441e-02, -7.219447805250771e-02,
    -7.565695975592170e-02, -7.904647440788692e-02, -8.234442557322251e-02,
    -8.553324579905185e-02, -8.859705468085925e-02, -9.152091100798199e-02,
    -9.428847446755965e-02, -9.688303623049198e-02, -9.929123258537813e-02,
    -1.015008467688577e-01, -1.034961241263523e-01, -1.052637003544443e-01,
    -1.067939984687745e-01, -1.080766457616878e-01, -1.090997300590506e-01,
    -1.098524491515805e-01, -1.103242262600913e-01, -1.105084619148789e-01,
    -1.103977408741932e-01, -1.099809851424550e-01, -1.092492774392824e-01,
    -1.081974227416502e-01, -1.068172142230882e-01, -1.050995803285455e-01,
    -1.030360111111103e-01, -1.006190418791648e-01, -9.784120023411771e-02,
    -9.469304216883027e-02, -9.116452506492527e-02, -8.724644532866996e-02,
    -8.293043914044632e-02, -7.820617483254730e-02, -7.306142427456862e-02,
    -6.748468182105991e-02, -6.146688124166948e-02, -5.499497258200362e-02,
    -4.805444424454820e-02, -4.063362855701623e-02, -3.272045590229335e-02,
    -2.430122582451853e-02, -1.536329520788766e-02, -5.891434269890659e-03,
    +4.126595858583295e-03, +1.470155068746303e-02, +2.584738191459814e-02,
    +3.757652772246801e-02, +4.989736509080558e-02, +6.282034030592902e-02,
    +7.635397728566121e-02, +9.050369257152079e-02, +1.052747118478660e-01,
    +1.206703467513333e-01, +1.366911019414417e-01, +1.533343890681390e-01,
    +1.705954709184399e-01, +1.884686389218322e-01, +2.069449962574092e-01,
    +2.260093000067393e-01, +2.456456803467095e-01, +2.658346019332584e-01,
    +2.865543814049772e-01, +3.077789078889820e-01, +3.294769437072290e-01,
    +3.516171481750350e-01, +3.741642373060188e-01, +3.970739591211551e-01,
    +4.203043046885219e-01, +4.438114799213576e-01, +4.675442291623012e-01,
    +4.914498631045615e-01, +5.154735456539700e-01, +5.395557644293222e-01,
    +5.636399817032525e-01, +5.876661722564289e-01, +6.115695310143157e-01,
    +6.352890592874099e-01, +6.587619767809000e-01, +6.819230974423550e-01,
    +7.047092819314779e-01, +7.270576699841359e-01, +7.489068963384272e-01,
    +7.701990187606995e-01, +7.908752989295335e-01, +8.108788692151807e-01,
    +8.301579139160681e-01, +8.486643364959733e-01, +8.663548164329093e-01,
    +8.831896853053627e-01, +8.991320235484349e-01, +9.141540563656075e-01,
    +9.282282546151819e-01, +9.413348145272842e-01, +9.534619388400459e-01,
    +9.646048250501910e-01, +9.747634827941575e-01, +9.839435385219192e-01,
    +9.921529097154242e-01, +9.994114730415857e-01, +1.005746084650236e+00,
    +1.011183971347815e+00, +1.015760373791603e+00, +1.019515072412387e+00,
    +1.022490937034641e+00, +1.024736164069697e+00, +1.026304095700693e+00,
    +1.027250978292214e+00, +1.027634294456205e+00, +1.027511063644843e+00,
    +1.026942795115598e+00, +1.025991493983836e+00, +1.024716149969084e+00,
    +1.023175976163407e+00, +1.021427210603284e+00, +1.019521566634239e+00,
    +1.017510118327508e+00, +1.015439859549357e+00, +1.013460916839174e+00,
    +1.011654901040475e+00, +1.009366925499550e+00, +1.007263182132894e+00,
    +1.005313192386866e+00, +1.003508162416449e+00, +1.001840787319378e+00,
    +1.000303927234380e+00, +9.988898206257559e-01, +9.975915283480670e-01,
    +9.964015284765968e-01, +9.953133902427869e-01, +9.943201078053212e-01,
    +9.934158959186011e-01, +9.925943919208190e-01, +9.918510277326026e-01,
    +9.911797988363887e-01, +9.905771957917731e-01, +9.900381047643838e-01,
    +9.895594394179152e-01, +9.891371616557014e-01, +9.887684373604154e-01,
    +9.884497924570929e-01, +9.881790747212391e-01, +9.879528358230726e-01,
    +9.877691368590689e-01, +9.876249269174586e-01, +9.875179947346887e-01,
    +9.874458127312921e-01, +9.874056275509585e-01, +9.873951115886979e-01,
    +9.874115368168944e-01, +9.874524849192456e-01, +9.875149888347144e-01,
    +9.875968894760857e-01, +9.876951134084213e-01, +9.878075819424549e-01,
    +9.879311998177238e-01, +9.880640617030884e-01, +9.882032571565917e-01,
    +9.883471084085503e-01, +9.884926873551375e-01, +9.886386592120545e-01,
    +9.887825578295630e-01, +9.889230031022089e-01, +9.890581715933395e-01,
    +9.891867674284610e-01, +9.893074965384659e-01, +9.894196399062921e-01,
    +9.895220757174378e-01, +9.896146331889107e-01, +9.896970346678272e-01,
    +9.897692596535289e-01, +9.898319269347060e-01, +9.898852572653667e-01,
    +9.899307640365727e-01, +9.899693102025343e-01, +9.900025692522435e-01,
    +9.900321562263099e-01, +9.900603352632121e-01, +9.900889812894406e-01,
    +9.901206586012907e-01, +9.901575015155720e-01, +9.902023946214220e-01,
    +9.902575406142213e-01, +9.903255289051605e-01, +9.904087914462694e-01,
    +9.905096491583045e-01, +9.906303787150326e-01, +9.907727108894024e-01,
    +9.909387444078919e-01, +9.911298894709990e-01, +9.913476318763218e-01,
    +9.915928560402563e-01, +9.918665491182922e-01, +9.921691315380984e-01,
    +9.925010851461232e-01, +9.928619727154252e-01, +9.932519181564613e-01,
    +9.936700207375173e-01, +9.941156069136238e-01, +9.945873147903244e-01,
    +9.950837402063278e-01, +9.956033775539884e-01, +9.961439922621166e-01,
    +9.967034533921340e-01, +9.972793109558521e-01, +9.978690858367024e-01,
    +9.984697087896268e-01, +9.990784840729244e-01, +9.996919011206490e-01,
    +1.000308193833526e+00, +1.000922365901945e+00, +1.001532636590676e+00,
    +1.002135464655177e+00, +1.002728111386909e+00, +1.003307449770187e+00,
    +1.003870934089686e+00, +1.004416038098237e+00, +1.004940548815171e+00,
    +1.005442141810160e+00, +1.005919224127911e+00, +1.006370303149314e+00,
    +1.006793927824538e+00, +1.007189345025525e+00, +1.007555573455895e+00,
    +1.007892674961336e+00, +1.008200146369426e+00, +1.008478423284851e+00,
    +1.008727884997619e+00, +1.008949493525753e+00, +1.009144112734761e+00,
    +1.009313224929575e+00, +1.009458241425143e+00, +1.009581280555682e+00,
    +1.009684090687164e+00, +1.009768980817384e+00, +1.009838308708799e+00,
    +1.009894548257807e+00, +1.009940336228694e+00, +1.009977916643680e+00,
    +1.010010230290263e+00, +1.010039453539107e+00, +1.010068202038694e+00,
    +1.010098388689342e+00, +1.010132323996401e+00, +1.010171656775640e+00,
    +1.010218096148412e+00, +1.010272524848519e+00, +1.010336490294771e+00,
    +1.010410221483215e+00, +1.010494354532353e+00, +1.010588873699422e+00,
    +1.010693501186928e+00, +1.010808068774316e+00, +1.010931436739342e+00,
    +1.011062876503041e+00, +1.011201071127927e+00, +1.011344700694417e+00,
    +1.011491904228184e+00, +1.011641272406023e+00, +1.011790282474963e+00,
    +1.011937567254485e+00, +1.012080125934687e+00, +1.012216235487353e+00,
    +1.012342907951334e+00, +1.012458183122033e+00, +1.012558879696851e+00,
    +1.012642857380847e+00, +1.012706955800289e+00, +1.012748952907404e+00,
    +1.012765799894453e+00, +1.012755013843985e+00, +1.012713798678211e+00,
    +1.012639775003457e+00, +1.012530134411619e+00, +1.012382309473470e+00,
    +1.012194068117524e+00, +1.011962331100864e+00, +1.011685173724601e+00,
    +1.011359143572147e+00, +1.010982135506986e+00, +1.010550715971368e+00,
    +1.010062133151922e+00, +1.009512438049510e+00, +1.008898689394160e+00,
    +1.008215923600973e+00, +1.007460860286395e+00, +1.006627741823389e+00,
    +1.005712337656749e+00, +1.004708677491086e+00, +1.003611467285588e+00,
    +1.002414286392268e+00, +1.001111413242302e+00, +9.996961651093181e-01,
    +9.981625949525345e-01, +9.965041017623596e-01, +9.947148884277037e-01,
    +9.927891912841345e-01, +9.907199995730845e-01, +9.884793707533194e-01,
    +9.855347660016696e-01, +9.823765865983286e-01, +9.789747333404933e-01,
    +9.751623811486372e-01, +9.708821747608998e-01, +9.660805524695870e-01,
    +9.606976399184645e-01, +9.546732976073706e-01, +9.479479345282376e-01,
    +9.404609052933396e-01, +9.321553861564006e-01, +9.229775478442888e-01,
    +9.128745354570823e-01, +9.018003682081348e-01, +8.897163275605041e-01,
    +8.765908974996186e-01, +8.623984077953557e-01, +8.471200801854385e-01,
    +8.307479727020245e-01, +8.132817365236141e-01, +7.947291447585267e-01,
    +7.751108841891807e-01, +7.544551974836834e-01, +7.327963552921717e-01,
    +7.101790843209148e-01, +6.866580716267418e-01, +6.622962432368731e-01,
    +6.371684119604742e-01, +6.113488038789190e-01, +5.849206604934815e-01,
    +5.579747428663487e-01, +5.306181649316717e-01, +5.029523957059122e-01,
    +4.750868825511614e-01, +4.471309850999535e-01, +4.192049917945288e-01,
    +3.914252910998820e-01, +3.639114681156252e-01, +3.367837772954476e-01,
    +3.101627843160973e-01, +2.841647033392418e-01, +2.589033711808454e-01,
    +2.344880603710975e-01, +2.110209448747974e-01, +1.885997642296488e-01,
    +1.673100807904834e-01, +1.472287968327706e-01, +1.284223074167396e-01,
    +1.109422548710344e-01, +9.482665349502306e-02, +8.009914366829558e-02,
    +6.676765847398403e-02, +5.482436608328485e-02, +4.424588851571281e-02,
    +3.499361000717621e-02, +2.701461405056267e-02, +2.024370180670145e-02,
    +1.460796755137538e-02, +9.996743588367531e-03, +5.305235098871444e-03,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00,
    +0.000000000000000e+00, +0.000000000000000e+00, +0.000000000000000e+00
];

//  Export public APIs.
module.exports = {
    "W10_240": W10_240
};