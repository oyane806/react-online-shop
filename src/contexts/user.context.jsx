import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// The actual value we want to access.
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  // We pass here the default value
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        // We can do this here, because the helper function is only creating a document if it does not already exist.
      }
      console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  // This effect is listening to the stream of sign-in, sign-out.
  // If there is a sign-in, it will check if there is already a document. If not, it will create a new one.
  // Just after the sign-in or sign-out it will update the value of the context as a value or as null.

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
