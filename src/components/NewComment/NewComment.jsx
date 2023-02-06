import newCom from '../NewComment/newComStyle.module.css';

const NewComment = () => {
    return (
        <section className={newCom.newCom}>
            <section className={newCom.formBox}>
                <h2>new comment</h2>
                <form className={newCom.newComForm}>
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" id='name' placeholder='please type your name...' />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="email" placeholder='please enter your email...' />
                    </div>
                    <div>
                        <label htmlFor="txtArea">comment</label>
                        <textarea name="txtArea" id="txtArea" cols="20" rows="10" resize="false"></textarea>
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