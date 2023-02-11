import { useState } from 'react';
import newCom from '../NewComment/newComStyle.module.css';
import { toast } from 'react-toastify';
import { getAllComments, postNewComment } from '../../services/httpReqfunctions';

const NewComment = ({onPost}) => {

    const [comment, setComment] = useState({ name: "", email: "", body: "" });

    const submitHandler = (e) => {
        e.preventDefault();
        // setComment({
        //     [e.target.name]: e.target.value,
        // });
        postNewComment({...comment, postId: Math.floor(Math.random() * 30)})
            .then(response => getAllComments())
            .then(({data}) => onPost(data))
            .catch(error => toast.error("An error occurred while adding a comment: \n" + error.message));
    }

    const changeHandler = (e) => {
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