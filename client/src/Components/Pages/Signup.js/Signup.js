import { FaGooglePlusG } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Signup = () => {
  const signUpFormik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("Sign Up", values);
    },
  });

  const signInFormik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema.pick(["email", "password"]),
    onSubmit: (values) => {
      console.log("Sign In", values);
    },
  });

  const handleSignUpClick = () => {
    document.getElementById("container").classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    document.getElementById("container").classList.remove("right-panel-active");
  };

  return (
    <div className="formWrapper mt-10  ml-[18rem]">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={signUpFormik.handleSubmit}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <FaGooglePlusG />
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <FaFacebook />
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <FaLinkedinIn />
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={signUpFormik.values.name}
              onChange={signUpFormik.handleChange}
              onBlur={signUpFormik.handleBlur}
            />
            {signUpFormik.touched.name && signUpFormik.errors.name ? (
              <div className="error">{signUpFormik.errors.name}</div>
            ) : null}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signUpFormik.values.email}
              onChange={signUpFormik.handleChange}
              onBlur={signUpFormik.handleBlur}
            />
            {signUpFormik.touched.email && signUpFormik.errors.email ? (
              <div className="error">{signUpFormik.errors.email}</div>
            ) : null}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signUpFormik.values.password}
              onChange={signUpFormik.handleChange}
              onBlur={signUpFormik.handleBlur}
            />
            {signUpFormik.touched.password && signUpFormik.errors.password ? (
              <div className="error">{signUpFormik.errors.password}</div>
            ) : null}
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={signInFormik.handleSubmit}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signInFormik.values.email}
              onChange={signInFormik.handleChange}
              onBlur={signInFormik.handleBlur}
            />
            {signInFormik.touched.email && signInFormik.errors.email ? (
              <div className="error">{signInFormik.errors.email}</div>
            ) : null}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signInFormik.values.password}
              onChange={signInFormik.handleChange}
              onBlur={signInFormik.handleBlur}
            />
            {signInFormik.touched.password && signInFormik.errors.password ? (
              <div className="error">{signInFormik.errors.password}</div>
            ) : null}
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
