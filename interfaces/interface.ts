// console.log('interface')
interface User
{
    email: string,
    userId: number,
    // "?" indicates that it's optional it could be there or not there
    googleId?: string
    // define a method in interface
    startTrial: () => string
    // another way to define method is
    endTrial?(): string
    getCoupon?(couponName: string, value: number): number
}

interface User
{
    gmail: string

}

const user: User = {
    email: "noman@.com", userId: 908, gmail: "", startTrial: () =>
    {
        return "Test return"
    },
    endTrial: () => { return "ended" },
    getCoupon: (name: "start10", off: 20) => { return 300 }
}
console.log('user', user)