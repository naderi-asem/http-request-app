import NewComment from "../components/NewComment/NewComment";

const NewCommentPage = (props) => {
    const {onPost} = props
    return (
        <div>
            <NewComment onPost={onPost} />
        </div>
    );
}

export default NewCommentPage;