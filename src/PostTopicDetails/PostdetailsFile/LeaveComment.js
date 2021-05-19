import Comment from './Comment';
import auther1 from '../../images/auther1.jpg';
import {CommentList} from './CommentList';

import React, { Component } from 'react';

let textinpu = React.createRef();


class LeaveComment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            getcomment:'',
            ct:'',
            fin:''
         };
    }

    postcomment = (event) => {
        this.setState({getcomment:event.target.value})
    }

  

    postsubmit = (event) => {
    //    this.setState({ct : textinpu.current.value})
        
       this.setState({ fin : <Comment
       userimg=''
       name=''
       time=''
       comment={this.state.getcomment} 
       like=''
       dislike= "400"/>})

        

    }

    render() { 
        const commentread = CommentList;
        return ( 
            <section id="leave-comments">
        <div className="section-header">
            <h2 className="sec-heading  sec-heading-color float-left">Leave your comments</h2>
        </div>
        <div className="media-contant">
            <div className="media border-0 p-2">
                <img src={require("../../images/auther1.jpg").default} alt="John Doe" className="mr-3  mt-3 rounded-circle" style={{ width: 60 }} />
                <div className="media-body">
                    <div className="form-group pt-2">
                        <textarea ref={textinpu} placeholder="Write a response..." name="msg" id="msg" cols={40} rows={5} className="form-control shadow" defaultValue={""} onChange={this.postcomment}/>
                        <div className="pt-3">
                            <button className= "btn btn-round prm-btn font-12 mr-2 " onClick={this.postsubmit}> POST COMMENT</button>
                        </div>
                    </div>
                    <div className="pt-4 pb-2 sec-heading-color">
                        <h5><b>Recent Comments</b></h5>
                    </div>
                    {/**/}

                    {
                    CommentList.map((cmt) => 
                        <Comment key={cmt.id} 
                        userimg={cmt.userimg} 
                        name={cmt.name} 
                        time={cmt.time} 
                        comment={cmt.comment} 
                        like={cmt.like} 
                        dislike={cmt.dislike}/> )
                    }

                        

                    <div>

                        {this.state.fin}
                        {this.state.getcomment}
                        

                    </div>

                    {/* <Comment userimg={auther1} name="Sam " time="2 minutes ago" comment="Loved this...Expecting more." like="1K" dislike="400"/> */}
                   

                   {/* <Comment userdp={require("../../images/auther1.jpg").default} name="Samantha Thomas" 
                    time="2 minutes ago" comment="Loved this...Expecting more." like="1K" dislike="400"
                    /> */}
                   
                </div>
            </div>
        </div>
    </section>
         );
    }
}
    

export default LeaveComment;