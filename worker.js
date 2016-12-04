onmessage = function(e) {
    var now = performance.now();
    // eval( e.data );
    postMessage(performance.now()-now);
    // close();
};