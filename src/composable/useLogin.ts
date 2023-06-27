import { ref } from "vue";
import { auth } from "../db/settings.js";
import  {signInWithEmailAndPassword } from "firebase/auth";

const error= ref("");

const login = async (email:string, password:string) => {
    error.value = "";
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const res = userCredential.user;
        error.value = "";
        return res;
    } catch (err:unknown) {
        console.log(err.message);
        error.value = err.message;
    }
    }

const useLogin = () => {
    return { error, login };
}

export default useLogin;
