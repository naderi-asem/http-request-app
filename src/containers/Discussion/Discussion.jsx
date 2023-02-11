import { useEffect } from "react";
import { useState } from "react";
import Comments from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import disStyle from '../Discussion/disStyle.module.css';
import { toast } from 'react-toastify';
import { getAllComments } from "../../services/httpReqfunctions";

const Discussion = () => {

    const [dbData, setDbData] = useState([]);
    const [error, setError] = useState({message: "", isError: false });
    const [id, setID] = useState(1);

    //get all comments when the component is mounted
    useEffect(() => {
            getAllComments().then(({ data }) => {
                setDbData(data);
                data.length ? setID(data[0].id) : setID(0);
            })
            .catch(err => {
                setError({message: err.message, isError: true});
            });
    }, []);


    // handler functions

    const selectComment = (id) => {
        setID(id);
    }

    const postCommentHandler = (comments) => {
        setDbData(comments);
        toast.success("new comment added")
    }

    const deleteCommentHandler = (comments, id) => {
        setDbData(comments);
        toast.success("Comment has been successfully deleted.")
        comments.find(c => c.id === id - 1) ? selectComment(id - 1)
            : comments.length > 0
                ? selectComment(comments[0].id)
                : selectComment(0);
    }


    if (!dbData.length && !error.isError) return <div>data is loading ...</div>;
    if (error.isError) return <div>{error.message}</div>;

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