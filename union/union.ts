// console.log("union")
let score: number | string = 50
// score = 55
// score = '90'

type User = {
    id: number,
    name: string,
    isAdmin: false
}

type Admin = {
    id: number,
    userName: string,
    isAdmin: true
}

let noman: User | Admin = { name: 'Noman', id: 9088, isAdmin: false }
noman = { userName: "adminNoman", id: 9088, isAdmin: true }
// console.log('noman', noman.userName)
const getUserId = (id: number | string) =>
{
    if (typeof id === "string")
    {
        console.log('id', id)
        // let x = id.toUpperCase()
        console.log('id in string', id.toUpperCase())
    }
    else if (typeof id === "number")
    {
        id.toFixed(2)
        // console.log('id in number', id)
    }
}
// getUserId(9899.8900)
// getUserId("uhjjh788hgj907bhb")

// array of number
const data: number[] = [1, 2, 3, 4]

// array of string
const data1: string[] = ['1', '2', '3', '4']


// to create an array that accepts multiple types like string, number and others
const data3: (string | number | boolean)[] = [1, 2, "3", '4', true, false]

// value strict data
let seatType: "last" | 'window' | 'middle';
seatType = 'window'
console.log('seatType', seatType)

// Type '"fourth"' is not assignable to type '"last" | "window" | "middle"'
// seatType = 'fourth'

export { }