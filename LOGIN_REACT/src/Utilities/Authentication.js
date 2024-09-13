import LoginAuth from "../Services/Authentication"
import Cookies from "js-cookie"

export function useLogin(){
    async function login(userData) {
        try {
            const response = await LoginAuth(userData)
            const {status, data} = response
            if (status===200){
                Cookies.set("Token", data.token)
                Cookies.set("Name", data.name)
                alert("logged in Successfully")
            }
        } catch (error) {
            if(error.response&&error.response.status===401){
                alert("Invalid email or password")
            }
            console.error("Something went wrong! ", error)
        }
    }

    return{login}
}