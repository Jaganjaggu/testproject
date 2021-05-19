import clock from "../../images/clock.png";
import like1 from "../../images/icon-like.png";
import dislike1 from "../../images/icon-dislike.png";


const Comment=({userimg,name,time,comment,like,dislike})=>(

  <div className="media border-0 p-2"> 
    <img src={userimg} alt="John Doe" className="mr-3  mt-3 rounded-circle" style={{width: 60}} />
    <div className="media-body pt-3">
      <h6 className="comment-hed-color pt-2"><b>{name}</b><small className="gray-color-text"><img src={clock} alt="John Doe" className="pl-2 pr-2" />{time}</small></h6>
      <p className="media-p-color">{comment}</p>
      <div className="post-comment">
        <ul className="list-unstyled d-flex comments-use">
          <li className="pr-4 border-right"> <a href="#" className="comment"><img src={like1} /></a> <span>{like}</span></li>
          <li className="ml-4"> <a href="#" className="comment"><img src={dislike1} /></a> <span>{dislike}</span> </li>
        </ul>        
      </div>
      <hr />
    </div>
  </div>

);

export default Comment;

{/* <Comment userdp={require("../../images/auther1.jpg").default} name="Samantha Thomas" 
                    time="2 minutes ago" comment="Loved this...Expecting more." like="1K" dislike="400"
                    />  */}