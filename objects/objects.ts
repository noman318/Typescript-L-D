// console.log("objects")
const User = {
    name: "Noman",
    email: "noman@gmail.com",
    isActive: true
}

const createUser = ({ name: string, isActive: boolean }) =>
{

}
// createUser({ name: "Noman", isActive: false, email: "noman@gmail.com" })
createUser({ name: "Noman", isActive: false })

let newUser = { name: "noman", isActive: false, email: "noman@gmail.com" }
createUser(newUser)

const createCourse = (): { name: string, price: number } =>
{
    return { name: "Js", price: 300 }
}

// type aliases

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

const createNewUser = (user: User): User =>
{
    return {
        name: "",
        email: "",
        isActive: false
    }
}
createNewUser({ name: "", email: "", isActive: true })

export { }