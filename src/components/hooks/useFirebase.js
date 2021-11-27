import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import FirebaseInitialize from "../firebase/firebase.init";
FirebaseInitialize();
const useFirebase = () => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { reset } = useForm();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  // log in with google
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //register with email and password
  const registerWihtEmailAndPassword = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully Registered", { autoClose: 3000 });
        setUser(user);
        updateProfile(user, {
          displayName: name,
        });
        reset();
      })
      .finally(() => setIsLoading(false));
  };
  //User Observer
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  //sign out user
  const Logout = () => {
    setIsLoading(false);
    signOut(auth)
      .then(() => {
        toast.success("Logged Out", { autoClose: 3000 });
      })
      .finally(() => setIsLoading(false));
  };
  //login using email password
  const loginUsingEmai = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const user = result.user;
        toast.success("Succesfully Logged In");
      })
      .catch((error) => {
        toast.error("Something Wrong Detected");
      });
  };
  return {
    signInUsingGoogle,
    registerWihtEmailAndPassword,
    user,
    Logout,
    isLoading,
    setIsLoading,
    loginUsingEmai,
  };
};

export default useFirebase;
