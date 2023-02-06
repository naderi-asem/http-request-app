import cmtStyle from '../Comment/cmtStyle.module.css';

const Comment = ({ allData }) => {
    return (
        <section className={cmtStyle.comments}>
            <h2>comments</h2>
            <section className={cmtStyle.cmtBox}>
                {allData.map(data =>
                    <div key={data.id}>
                        <p>
                             <span>{data.name}</span>
                        </p>
                        <p>
                            Email: <span>{data.email}</span>
                        </p>
                    </div>
                )}
            </section>
        </section>
    );
}

export default Comment;