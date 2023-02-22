import { useEffect } from "react";
import { useState } from "react";
import disStyle from '../Discussion/disStyle.module.css';
import { toast } from 'react-toastify';
import { getAllComments } from "../../services/httpReqfunctions";
import { Route, Switch } from "react-router-dom";
import NewCommentPage from "../../pages/NewCommentPage";
import CommentsPage from "../../pages/CommentsPage";
import NotFoundPage from "../../pages/NotFoundPage";

const Discussion = () => {

    const [dbData, setDbData] = useState([]);
    const [error, setError] = useState({ message: "", isError: false });
    const [id, setID] = useState(1);

    //get all comments when the component is mounted
    useEffect(() => {
        getAllComments().then(({ data }) => {
            setDbData(data);
            data.length ? setID(data[0].id) : setID(0);
        })
            .catch(err => {
                setError({ message: err.message, isError: true });
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
            <Switch>
                <Route path="/new-comment" component={(params) => <NewCommentPage
                    params={params}
                    onPost={postCommentHandler} />}

                />
                <Route
                    path="/"
                    component={(params) => <CommentsPage
                        disStyle={disStyle}
                        onSelect={selectComment}
                        onDelete={deleteCommentHandler}
                        dbData={dbData}
                        id={id}
                        params={params}
                    />}
                    exact={true}
                />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </section>
    );
}

export default Discussion;