import "./post.css";
import postImg from "../../media/images/cat.jpg";

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src={postImg} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam eaque voluptatem. Quisquam voluptatibus excepturi natus, distinctio architecto et sint facere quo eos, unde nemo at? Reprehenderit beatae aperiam tenetur!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam eaque voluptatem. Quisquam voluptatibus excepturi natus, distinctio architecto et sint facere quo eos, unde nemo at? Reprehenderit beatae aperiam tenetur!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam eaque voluptatem. Quisquam voluptatibus excepturi natus, distinctio architecto et sint facere quo eos, unde nemo at? Reprehenderit beatae aperiam tenetur!</p>
        </div>
    )
}
