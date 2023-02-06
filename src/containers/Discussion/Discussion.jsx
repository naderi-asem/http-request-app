import { useEffect } from "react";
import { useState } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import disStyle from '../Discussion/disStyle.module.css';
import axios from "axios";

const Discussion = () => {

    const [dbData, setDbData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then(response => {
                const selectiveData = response.data.slice(0, 10);
                return selectiveData;
            })
            .then(data => setDbData(data))
            .catch(err => {
                console.log(err);
                setError("An error occurred in receiving Data:  " + err.message)
            });
    }, []);

    if (error) return <div>{error}</div>
    return (
        <section className={disStyle.container}>
            <div>
                <Comment
                    allData={dbData}
                />
                <FullComment />
            </div>
            <div>
                <NewComment />
            </div>
        </section>
    );
}

export default Discussion;