import React, { useState } from "react";

function TokenPost() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [token, setToken] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();
        fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
        .then((res) => {
            console.log
            return res.json()})
        .then((json) =>  setToken(json.token));
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
                type="password"
                value={password}
                placeholder="password"
                onChange={({ target }) => setPassword(target.value)}
            />
            <button>Enviar</button>
            <p>{token}</p>
        </form>
    );
}

export default TokenPost;
