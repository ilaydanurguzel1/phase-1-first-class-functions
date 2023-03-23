//1
function receivesAFunction(spy){
    spy();
};


//2
function returnsANamedFunction(){
    return function hello(){

    };
};


//3
function returnsAnAnonymousFunction(){
    return function(){

    };
};

