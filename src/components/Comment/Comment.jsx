import cmtStyle from '../Comment/cmtStyle.module.css';

const Comment = ({ comment, onSelected }) => {

    // const selectedComment = (id) => {
    //     console.log("id in comment: ", id);
    // }

    return (
            <div className={cmtStyle.cmt} onClick={() => onSelected(comment.id)} >
                <p>
                    name: <span>{comment.name}</span>
                </p>
                <p>
                    Email: <span>{comment.email}</span>
                </p>
            </div>
    );
}

export default Comment;