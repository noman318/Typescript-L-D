// console.log("Enum")
enum seatChoice
{
    // by default it starts with 0 we can assign values
    // aisle = "10",
    // aisle = 10,
    aisle,
    // if we assign 10 as initial values as 10 the next in enum will go in increasing order
    // we can different values to different enum
    // we can assign string values also but if we a string to any one we have to give initial values to all only in case of string
    // but if we assign the next value after string as number values to corresponding is not neccessary
    // middle = 90,
    middle,
    window
}
const getSeatNew = seatChoice.middle
console.log('getSeatNew', getSeatNew)

// another way
const enum seatChoiceNew
{
    aisle = "AISLE",
    middle = 20,
    window
}
const getSeat = seatChoiceNew.aisle
console.log('getSeat', getSeat)
export { }