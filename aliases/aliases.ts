type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number
}

let myUser: User = {
    _id: "1234",
    name: "noman",
    email: "sn@gmail.com",
    isActive: true
}
myUser.email = "noman@gmail.com"
// myUser._id="7898"

type cardNumber = {
    cardnumber: number
}

type cardDate = {
    carddate: string
}

// merge two type to create a new from from them
type cardDetails = cardNumber & cardDate

// merge two type to create a new from from them and add one more value to it
type cardDetailsNew = cardNumber & cardDate & {
    cvv: number
}

export { }