import React from "react";
import * as emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
    const [inputs, setInputs] = React.useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitMessage, setSubmitMessage] = React.useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        // Check if email is using valid format
        if (!validateForm()) {
            setSubmitMessage("Failed to send message 😞");
            setTimeout(() => {
                setSubmitMessage("");
            }, 2000);
            return;
        }

        emailjs
            .sendForm(
                "gmail",
                process.env.REACT_APP_TEMPLATE_ID,
                ".myForm",
                process.env.REACT_APP_USER_ID
            )
            .then((res) => {
                setSubmitMessage("Message sent successfully UwU");
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const validateForm = () => {
        const { name, email, message } = inputs;
        return (
            name.length > 1 &&
            name.length <= 50 &&
            email.length >= 5 &&
            email.length <= 100 &&
            email.includes("@") &&
            email.includes(".") &&
            message.length >= 5 &&
            message.length <= 300
        );
    };

    const handleInput = (e) => {
        const { name } = e.target;
        const { value } = e.target;

        setInputs({ ...inputs, [name]: value });
    };

    return (
        <div className="contact">
            <div
                className="slime"
                title="Poorly drawn Slime from Maplestory using CSS"
            >
                <div className="antenna">∿∿∿</div>
                <div className="eye1">+</div>
                <div className="eye2">+</div>
                <div className="mouth">w</div>
            </div>
            <form className="myForm" onSubmit="return false;">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    title="Name"
                    minLength="3"
                    maxLength="100"
                    required
                    onChange={handleInput}
                />
                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    title="Email"
                    minLength="5"
                    maxLength="100"
                    required
                    onChange={handleInput}
                />
                <textarea
                    type="text"
                    name="message"
                    placeholder="Speak your mind :3"
                    title="Message"
                    minLength="10"
                    maxLength="300"
                    onChange={handleInput}
                    required
                />
                <span className="submitMessage">{submitMessage}</span>
                <button
                    type="input"
                    onClick={sendEmail}
                    disabled={submitMessage !== ""}
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;
