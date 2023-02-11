import http from '../../services/httpService';
import { useEffect, useState } from 'react';
import fComStyle from '../FullComment/fComStyle.module.css';
import { toast } from 'react-toastify';
import { getAllComments, deleteComment } from '../../services/httpReqfunctions';

const FullComment = ({ commentId, onDelete }) => {

    const [comment, setComment] = useState({ name: "", email: "", body: "" });
    console.log("user id in full comment", commentId);

    useEffect(() => {
        getAllComments(commentId).then(({ data }) => setComment(data))
            .catch(error => console.log(error.message9));
    }, [commentId]);

    const deleteHandler = (id) => {
        deleteComment(id).then(response => http.get('/comments'))
            .then(({ data }) => onDelete(data, id))
            .catch(error => toast.error("There was an error deleting the comment" + error.message));
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