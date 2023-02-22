import FullComment from "../components/FullComment/FullComment";
import Comments from "../components/Comment/Comment";

const CommentsPage = (props) => {
    console.log("props in comPage: ", props);
    const {
        disStyle,
        onSelect,
        onDelete,
        dbData,
        id
    } = props
   
    return (
        <div>
            <section className={disStyle.comments}>
                <h2>comments</h2>
                <section className={disStyle.cmtBox} >
                    {dbData.map(comment => <Comments
                        key={comment.id}
                        comment={comment}
                        onSelected={onSelect}
                    />
                    )}
                </section>
            </section>
            <FullComment commentId={id} onDelete={onDelete} />
        </div>
    );
}

export default CommentsPage;