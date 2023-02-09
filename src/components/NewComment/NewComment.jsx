import { useState } from 'react';
import newCom from '../NewComment/newComStyle.module.css';
import axios from 'axios';

const NewComment = ({onPost}) => {

    const [comment, setComment] = useState({ name: "", email: "", body: "" });

    const submitHandler = (e) => {
        e.preventDefault();
        // setComment({
        //     name: e.target.name.value,
        //     email: e.target.email.value,
        //     body: e.target.body.value,
        //     id: new Date().getMilliseconds()
        // });
        axios.post("http://localhost:3005/comments", {...comment, postId: Math.floor(Math.random() * 1000) + 500 })
            .then(response => axios.get("http://localhost:3005/comments"))
            .then(({data}) => onPost(data))
            .catch(error => console.log("post comment: ", error));
    }

    const changeHandler = (e) => {
        console.log(e.target.value);
        setComment({
            ...comment, [e.target.name]: e.target.value
        });
    }

    return (
        <section className={newCom.newCom}>
            <section className={newCom.formBox}>
                <h2>new comment</h2>
                <form className={newCom.newComForm} onSubmit={submitHandler} >
                    <div>
                        <label htmlFor="name">name</label>
                        <input name='name' type="text" placeholder='please type your name...' onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input name='email' type="email" placeholder='please enter your email...' onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="body">comment</label>
                        <textarea name="body" cols="20" rows="10" onChange={changeHandler} ></textarea>
                    </div>
                    <div>
                        <button type='submit'>submit</button>
                    </div>
                </form>
            </section>
        </section>
    );
}

export default NewComment;