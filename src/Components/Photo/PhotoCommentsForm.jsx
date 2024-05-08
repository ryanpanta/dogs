import React from "react";
import Enviar from "../../Assets/enviar.svg?react";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../api";
function PhotoCommentsForm({ id }) {
    const {request, error } = useFetch();
    const [comment, setComment] = React.useState("");

    async function handleSubmit(event){
        event.preventDefault()
        const {url, options} = COMMENT_POST(id, {comment})
        request(url, options)
    }
    return (
        <form onSubmit={handleSubmit}>
            <textarea
                id="comment"
                name="comment"
                placeholder="Comente..."
                value={comment}
                onChange={({ target }) => setComment(target.value)}
            />
            <button>
                <Enviar />
            </button>
        </form>
    );
}

export default PhotoCommentsForm;
