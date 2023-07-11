function addTwo(num: number): number
{
    const newSum = num.toFixed(2)
    // return "parseFloat(newSum) + 8"
    return parseFloat(newSum) + 8

}
console.log(addTwo(2.9088))

const getUpper = (val: string) =>
{
    val = val.toUpperCase();
    return val
}

const getValidAge = (value: number): string | boolean | number =>
{
    if (value >= 18)
    {
        return true
    } else
    {
        return "400"
    }
}

console.log(getUpper("noman"))
console.log(getValidAge(22))


const printError = (err: string): void =>
{
    console.log('err', err)
}

const handleError = (err: string = "New Error occured"): never =>
{
    throw new Error(err)
}
// console.log(handleError("Page Not Found"))
// const loggedIn = (name: string, email: string, isPaid: boolean = false) =>
// {

// }
// loggedIn("noman", "noman@gmail.com")
// loggedIn("noman", "noman@gmail.com", true)
export { }