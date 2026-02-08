
salary = [1000, 2000, 3000, 4000, 5000];

function twentyPercent(salary){
    return salary * 0.2;
}

function tenPercent(salary){
    return salary * 0.1;
}



Array.prototype.calculateTax = function (cb) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(cb(this[i]));
    }
    return res;
}

console.log(salary.calculateTax(twentyPercent));
console.log(salary.calculateTax(tenPercent));