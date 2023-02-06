import fComStyle from '../FullComment/fComStyle.module.css';

const FullComment = (props) => {
    return (
        <section className={fComStyle.fullComment}>
            <h2>full comment</h2>
            <section className={fComStyle.fComBox}>
                <div>
                    <p>
                        <span>name:</span>
                        Lorem ipsum dolor sit amet consectetur.
                        {props.name}
                    </p>
                    <p>
                        <span>Email:</span>
                        {props.email}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem.
                    </p>
                </div>
                <div>
                    <span>comment:</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquid animi tempore! Corrupti totam sit accusamus ducimus magnam, et saepe minus, cumque ullam id laudantium ut! Tempora quidem libero porro?
                        Aliquam quis facilis alias velit natus molestiae. Laboriosam quo, incidunt pariatur, architecto beatae mollitia excepturi nobis optio ipsam rem debitis veniam eaque ipsa facilis deleniti? Reiciendis repellendus debitis voluptate consequuntur.
                        Ut quibusdam placeat illum, molestiae odio, nulla enim at perferendis cupiditate commodi blanditiis ex provident! Earum laudantium facere, excepturi aut beatae magnam consequuntur quibusdam deserunt eligendi repellat aperiam labore reiciendis.
                        {props.comment}
                    </p>
                </div>
            </section>

        </section>
    );
}

export default FullComment;