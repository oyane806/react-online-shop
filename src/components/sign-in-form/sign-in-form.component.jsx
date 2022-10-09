import { useState } from "react";

import {
  signInWithGooglePopup,
  signInWithEmail,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //   const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    try {
      const { user } = await signInWithEmail(email, password);
      console.log(user);
      //   setCurrentUser(user);
    } catch (error) {
      console.log("Cannot login");
    }
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // const userDocRef = await createUserDocumentFromAuth(user);
    // setCurrentUser(user);
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Button type="submit">Sign In</Button>
      </form>
      <div className="buttons-container">
        <Button type="submit" buttonType="google" onClick={logGoogleUser}>
          Sign-in with Google Popup
        </Button>
      </div>
    </div>
  );
};

export default SignInForm;
