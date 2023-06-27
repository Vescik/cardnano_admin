import { ref } from "vue";
import { auth } from "../db/settings.js";
import  {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";

const error= ref("");

const signup = async (email:string,password:string,displayName:string) => {
    error.value = "";
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        if (!userCredential) {
            throw new Error('Could not complete signup')
          }
          const user = userCredential.user;
          await updateProfile(user, { displayName });
        error.value = "";
        return userCredential;
    } catch (err:unknown) {
        console.log(err.message);
        error.value = err.message;
    }
    }

const useSignup = () => {
    return { error, signup };
}

export default useSignup;
