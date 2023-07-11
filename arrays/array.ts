const arr: string[] = []
arr.push("a")

type User = {
    name: string,
    isActive: boolean,
}
// const arr2: number[] = []
// another method to define type in Array
const arr2: Array<number> = []
arr2.push(1)
// console.log('arr', arr[0])
// console.log('arr2', arr2[0])

const allUsers: User[] = []
allUsers.push({ name: "noman", isActive: false })
// console.log('allUsers', allUsers[0].name)

// Array inside an Array
const MlModels: number[][] = [
    [2, 2], [2, 7]
]
export { }