/*The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.
*/

/*const min = function(val1, val2){
    if(val1<val2) return val1;
    return val2;
}
*/
const min = function(val1, val2){
    console.log(Math.min(val1, val2));
    //return Math.min(val1, val2);
}

min(4,6);
min(1255,6485);
min(404,615);