function receivesAFunction(thing) {
    return thing();
}

function returnsANamedFunction() {
    return function thing2(){
        console.log('hi')
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
      };
}