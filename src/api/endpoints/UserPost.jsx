import React, { useState } from "react";

function UserPost() {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();
        fetch("https://dogsapi.origamid.dev/json/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        })
        .then((res) => {
            console.log
            return res.json()})
        .then((json) => console.log(json))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                placeholder="username"
                onChange={({ target }) => setUsername(target.value)}
            />
            <input
                type="email"
                value={email}
                placeholder="email"
                onChange={({ target }) => setEmail(target.value)}
            />
            <input
                type="password"
                value={password}
                placeholder="password"
                onChange={({ target }) => setPassword(target.value)}
            />
            <button>Enviar</button>
        </form>
    );
}

export default UserPost;
