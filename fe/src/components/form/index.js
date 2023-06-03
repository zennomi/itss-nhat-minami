import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./style.css";

const Form = (props) => {
    let [eye, setEye] = useState("fas fa-eye");
    let [passwordType, setPasswordType] = useState('password');

    let user = useRef(undefined);
    let pass = useRef(undefined);
    let confirmPass = useRef(undefined);

    let form = props.type === 'login' ? {
        text_button: 'Sign in',
        confirm: false
    } : {
        text_button: 'Sign up',
        confirm: true
    };

    return (
        <form className="sign-form">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Username"
                       onInput={(e) => user.current = e.target.value}
                       required/>
            </div>
            <div className="form-group">
                <input id="password-field" type={passwordType} className="form-control"
                       onInput={(e) => pass.current = e.target.value}
                       placeholder="Password" required/>
                <FontAwesomeIcon icon={eye} onClick={() => {
                    if (eye === "fas fa-eye") {
                        setEye("fas fa-eye-slash");
                        setPasswordType('text');
                    } else {
                        setEye("fas fa-eye");
                        setPasswordType('password');
                    }
                }}
                                 className="toggle-password field-icon"
                                 toggle="#password-field"/>
            </div>
            {form.confirm && (<div className="form-group">
                <input id="confirm-password-field" type={passwordType} className="form-control"
                       onInput={(e) => confirmPass.current = e.target.value}
                       placeholder="Confirm Password" required/>
                <FontAwesomeIcon icon={eye} onClick={() => {
                    if (eye === "fas fa-eye") {
                        setEye("fas fa-eye-slash");
                        setPasswordType('text');
                    } else {
                        setEye("fas fa-eye");
                        setPasswordType('password');
                    }
                }}
                                 className="toggle-password field-icon"
                                 toggle="#password-field"/>
            </div>)
            }
            <div className="w-100 text-center">
                <p className="mb-0" id={"notification"}></p>
            </div>

            <div className="form-group">
                <div className="w-100 text-center">
                    {form.confirm ?
                        (<><p className="mb-0">Already have an account?</p>
                            <a href="/login">Login</a></>) :
                        (<><p className="mb-0">Don't have an account?</p>
                            <a href="/register">Register</a></>)
                    }
                </div>
            </div>
            <div className="form-group">
                <button type="submit"
                        onClick={async (e) => {
                            e.preventDefault();
                            let spinner = document.getElementsByClassName("spin-status")[0];
                            let notification = document.getElementById("notification");
                            spinner.classList.remove("d-none");
                            let result = props.asynFunc && await props.asynFunc(user.current, pass.current);
                            spinner.classList.add("d-none");
                            if (result.status === 200) {
                                notification.classList.remove("text-danger");
                                notification.classList.add("text-success");
                                notification.innerHTML = result.message;
                            } else {
                                notification.classList.remove("text-success");
                                notification.classList.add("text-danger");
                                notification.innerHTML = result.message;
                            }
                            props.callback && props.callback(result.message);
                        }}
                        className="form-control btn btn-primary submit px-3 button-sign">{form.text_button} <span
                    className="spinner-border spinner-border-sm small spin-status d-none" role="status"></span>
                </button>
            </div>
        </form>
    );
}

export default Form;
