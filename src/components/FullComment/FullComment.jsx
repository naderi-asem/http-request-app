import axios from 'axios';
import { useEffect, useState } from 'react';
import fComStyle from '../FullComment/fComStyle.module.css';

const FullComment = ({ userId }) => {

    const [comment, setComment] = useState({});
    console.log("user id in full comment", userId);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${userId}`)
        .then(({data}) => setComment(data))
    }, [userId]);

    return (
        <section className={fComStyle.fullComment}>
            <h2>full comment</h2>

            <section className={fComStyle.fComBox}>
                {userId
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

            </section>

        </section>
    );
}

export default FullComment;