import axios from 'axios';
import { useEffect, useState } from 'react';
import fComStyle from '../FullComment/fComStyle.module.css';

const FullComment = ({ commentId }) => {

    const [comment, setComment] = useState({});
    console.log("user id in full comment", commentId);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
            .then(({ data }) => setComment(data))
    }, [commentId]);

    return (
        <section className={fComStyle.fullComment}>
            <h2>full comment</h2>

            <section className={fComStyle.fComBox}>
                {commentId
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
                <button>delete</button>
            </section>

        </section>
    );
}

export default FullComment;