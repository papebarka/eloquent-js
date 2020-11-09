/*
Program should output following triangle with 7 calls to console.log:
#
##
###
####
#####
######
#######
*/

for(let call=0; call<7; call++){
    let triangleLength = call +1;
    let stars = '';
    let starInstance=0
    while(starInstance < triangleLength){
        stars += '#';
        starInstance++;
    }
    console.log(stars);
}
