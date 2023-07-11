"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("union")
var score = 50;
var noman = { name: 'Noman', id: 9088, isAdmin: false };
noman = { userName: "adminNoman", id: 9088, isAdmin: true };
// console.log('noman', noman.userName)
var getUserId = function (id) {
    if (typeof id === "string") {
        console.log('id', id);
        // let x = id.toUpperCase()
        console.log('id in string', id.toUpperCase());
    }
    else if (typeof id === "number") {
        id.toFixed(2);
        // console.log('id in number', id)
    }
};
// getUserId(9899.8900)
// getUserId("uhjjh788hgj907bhb")
// array of number
var data = [1, 2, 3, 4];
// array of string
var data1 = ['1', '2', '3', '4'];
// to create an array that accepts multiple types like string, number and others
var data3 = [1, 2, "3", '4', true, false];
// value strict data
var seatType;
seatType = 'last';
console.log('seatType', seatType);
