import { useEffect } from "react";
import { useState } from "react";
import Comments from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import disStyle from '../Discussion/disStyle.module.css';
import axios from "axios";

const Discussion = () => {

    const [dbData, setDbData] = useState([]);
    const [error, setError] = useState("");
    const [id, setID] = useState(1);

    //get all comments when the component is mounted
    useEffect(() => {
        axios
            .get("http://localhost:3005/comments")
            .then(({ data }) => {
                setDbData(data);
                data.length ? setID(data[0].id) : setID(0);
            })
            .catch(err => {
                console.log(err);
                setError("An error occurred in receiving Data:  " + err.message)
            });
    }, []);


    // handler functions

    const selectComment = (id) => {
        setID(id);
    }

    const postCommentHandler = (comments) => {
        setDbData(comments);
    }

    const deleteCommentHandler = (comments, id) => {
        setDbData(comments);
        comments.find(c => c.id === id - 1) ? selectComment(id - 1)
            : comments.length > 0
                ? selectComment(comments[0].id)
                : selectComment(0);
    }


    if (error) return <div>{error}</div>
    return (
        <section className={disStyle.container}>
            <div>
                <section className={disStyle.comments}>
                    <h2>comments</h2>
                    <section className={disStyle.cmtBox} >
                        {dbData.map(comment => <Comments
                            key={comment.id}
                            comment={comment}
                            onSelected={selectComment}
                        />
                        )}
                    </section>
                </section>
                <FullComment commentId={id} onDelete={deleteCommentHandler} />
            </div>
            <div>
                <NewComment onPost={postCommentHandler} />
            </div>
        </section>
    );
}

export default Discussion;