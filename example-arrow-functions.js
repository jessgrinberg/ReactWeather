var names = ['Jessica', 'Dan', 'David'];

names.forEach(function (name) {
    console.log('forEach', name)
});

names.forEach( (name) => {
    console.log('arrowFunc', name)
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('jess'));

var person = {
    name: 'Jess',
    greet: function () {
        names.forEach(function (name) {
            console.log(this.name + ' says hi to ' + name)
        });
    }
};
person.greet()


var person = {
    name: 'Jess',
    greet: function () {
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name)
        });
    }
};
person.greet()

//Challenge Area

function add(a,b) {
    return a+b;
}

var addStatement = (a,b) => {
    return a+b;
}

var addExpression = (a,b) => a+b;

console.log(add(1,3));
console.log(addStatement(9,0));
console.log(addExpression(2,5));
