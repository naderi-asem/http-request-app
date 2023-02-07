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
            .get("https://jsonplaceholder.typicode.com/comments")
            .then(({ data }) => {
                setDbData(data.slice(0, 10));
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
                <FullComment userId={id} />
            </div>
            <div>
                <NewComment />
            </div>
        </section>
    );
}

export default Discussion;