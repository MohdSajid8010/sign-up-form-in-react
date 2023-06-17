import React, { useState, useEffect } from "react"

const Form = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");
    let [cpass, setCPass] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");

    useEffect(() => {
            const metaTags = document.getElementsByTagName('meta');

            // Loop through all meta tags and update specific ones
            for (let metaTag of metaTags) {

                const name = metaTag.getAttribute('name');

                // Update specific meta tags based on their name attribute
                if (name === 'description') {
                    metaTag.setAttribute('content', 'This is my updated sign-up page');
                }
                if (name === 'keywords') {
                    metaTag.setAttribute('content', 'React,useState');
                }
                if (name === 'author') {
                    metaTag.setAttribute('content', 'sajid Acciojob Trainee');
                }
            }
            // Update the document title
            document.title = `latest sign up form`;

    }, []);


    function handle_submit(e) {
        e.preventDefault()
        console.log("in form")
        if (!name.trim() || !email.trim() || !pass.trim() || !cpass.trim()) {
            setError("Error : All the fields are mandatory!");
        } else if (!name.trim().includes(" ")) {
            setError("Please Enter Full Name!");
        } else if (!email.trim().includes("@")) {
            setError("Please Enter Correct Email!");
        } else if (pass.trim() !== cpass.trim()) {
            setError("Password And Confirm Password Not Match!");
        } else {
            setError("")
            setSuccess("Successfully Signed Up!");
            console.log(name,email,pass)
        }
    }

    return (
        <div>

            <form>
                <h1>Signup</h1>
                <input type="text"autoFocus onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Password" />
                <input type="password" onChange={(e) => setCPass(e.target.value)} placeholder="Confirm Password" />
                <div className="error">{error}</div>
                <div className="success">{success}</div>
                <button type="button" onClick={handle_submit} >Signup</button>
            </form>


        </div>
    )
}

export default Form;
