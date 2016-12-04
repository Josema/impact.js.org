function speed1(log) {
    var now = Date.now();
    for (var i=0, r; i++<199999999;){
        // r=1%2*5/10+19313%13*2131-1/3123+112321-10;
    }
    log( 'A', Date.now()-now );
    speed2(log)
}
function speed2(log) {
    var now = Date.now();
    for (var i=0, r; i++<19999999;){
        Math.random();
    }
    log( 'B', Date.now()-now );
    log( '' );
}
speed1(console.log)