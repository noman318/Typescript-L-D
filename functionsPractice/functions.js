"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    var newSum = num.toFixed(2);
    // return "parseFloat(newSum) + 8"
    return parseFloat(newSum) + 8;
}
console.log(addTwo(2.9088));
var getUpper = function (val) {
    val = val.toUpperCase();
    return val;
};
var getValidAge = function (value) {
    if (value >= 18) {
        return true;
    }
    else {
        return "400";
    }
};
console.log(getUpper("noman"));
console.log(getValidAge(22));
var printError = function (err) {
    console.log('err', err);
};
var handleError = function (err) {
    if (err === void 0) { err = "New Error occured"; }
    throw new Error(err);
};
console.log(handleError("Page Not Found"));
