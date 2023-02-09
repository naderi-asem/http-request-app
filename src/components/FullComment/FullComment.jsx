import axios from 'axios';
import { useEffect, useState } from 'react';
import fComStyle from '../FullComment/fComStyle.module.css';

const FullComment = ({ commentId, onDelete }) => {

    const [comment, setComment] = useState({name: "", email: "", body: ""});
    console.log("user id in full comment", commentId);

    useEffect(() => {
        axios.get(`http://localhost:3005/comments/${commentId}`)
            .then(({ data }) => setComment(data))
            .catch(error => console.log(error.message9));
    }, [commentId]);

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:3005/comments/${id}`)
            .then(response => axios.get('http://localhost:3005/comments'))
            .then(({data}) => onDelete(data, id))
            .catch(error => console.log(error.message9));
    }

    return (
        <section className={fComStyle.fullComment}>
            <h2>full comment</h2>

            <section className={fComStyle.fComBox}>
                {commentId && comment.name
                    ? <>
                        <div>
                            <p>
                                <span>name:</span>
                                {comment.name}
                            </p>
                            <p>
                                <span>Email:</span>
                                {comment.email}
                            </p>
                        </div>
                        <div>
                            <span>comment:</span>
                            <p>{comment.body}</p>
                        </div>
                    </>
                    : <div><p>Waiting for the user to click on a comment ...</p></div>}
                {comment.name && <button onClick={() => deleteHandler(comment.id)} >delete</button>}
            </section>

        </section>
    );
}

export default FullComment;