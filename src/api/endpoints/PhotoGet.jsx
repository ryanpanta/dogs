import React, { useState } from 'react'

function PhotoGet() {
    const [id, setId] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
        .then(response => response.json())
        .then(json => console.log(json))
        }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={id} onChange={({target}) => {setId(target.value)}} />
        <button>Enviar</button>
    </form>
  )
}

export default PhotoGet