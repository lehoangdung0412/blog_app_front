import "./singlePost.css";
import singlePostImg from "../../media/images/cat.jpg";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src={singlePostImg} alt="" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Autor: <b>Vincent</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero aperiam ab illum labore repellat! Veniam error animi maxime accusamus unde, autem asperiores aliquam quibusdam libero, vitae quidem, quasi iste architecto.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero aperiam ab illum labore repellat! Veniam error animi maxime accusamus unde, autem asperiores aliquam quibusdam libero, vitae quidem, quasi iste architecto.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero aperiam ab illum labore repellat! Veniam error animi maxime accusamus unde, autem asperiores aliquam quibusdam libero, vitae quidem, quasi iste architecto.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero aperiam ab illum labore repellat! Veniam error animi maxime accusamus unde, autem asperiores aliquam quibusdam libero, vitae quidem, quasi iste architecto.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero aperiam ab illum labore repellat! Veniam error animi maxime accusamus unde, autem asperiores aliquam quibusdam libero, vitae quidem, quasi iste architecto.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero aperiam ab illum labore repellat! Veniam error animi maxime accusamus unde, autem asperiores aliquam quibusdam libero, vitae quidem, quasi iste architecto.
                </p>
            </div>
        </div>
    )
}
