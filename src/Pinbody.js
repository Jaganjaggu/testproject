import React, { Component } from 'react';
import './Leftsidebar.css';
import './Style.css';
import author1 from './images/author1.jpg';
// import dlt11 from './images/dlt11.png';
import voiceimage from './images/voice-image.jpg';
import widget1 from './images/widget-1.jpg';
import widget2 from './images/widget-2.jpg';
import widget3 from './images/widget-3.jpg';
import widget4 from './images/widget-4.jpg';
import iconlike from './images/icon-like.png';
import icondislike from './images/icon-dislike.png';
import iconcomment from './images/icon-comment.png';
// import lockicon from './images/lock-icon.png';
import iconforward from './images/icon-forward.png';
import iconpin from './images/icon-pin.png';
import iconflag from './images/icon-flag.png';
import iconmusic from './images/icon-music.png';
import loading from './images/loading.png';
import saved from './images/saved.png';




class Pinbody extends Component{
    render(){
        return(
            <div className="col-md-10 p-4">

                            {/* // <!-- section --> */}
                            <section>
                            <div className="section-header">
                                <h2 className="sec-heading post-line float-left">Pin</h2>
                            </div>
                            {/* <!--//--> */}
                            {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                <a className="nav-link active bg-img-btn" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><b>Published</b></a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link bg-img-btn" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><b>Saved</b></a>
                                </li>
                            </ul> */}
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                {/* <!-- Section Body --> */}
                                <div className="section-body mb-3">
                                    <div className="article">
                                    {/* <!-- Media --> */}
                                    <div className="media p-3"> <img src={author1} alt="John Doe" className="mr-3 rounded-circle" style={{width:'86px'}}/>
                                        <div className="media-body">
                                        <div className="article-title">
                                            <h5 >Why Colleges now imposing uniforms? <a href="#" className="btn btn-round prm-btn font-12 float-right">Follow</a> </h5>
                                        </div>
                                        <div className="article-body">
                                            <h5>I Totally agree 
                                                {/* <a href=""><img src={dlt11} className="float-right ml-2"/></a> */}
                                                <a className="btn btn-outline-primary btn-round font-12 float-right create-post blue-create-post"> &nbsp; <b>Create Post</b> </a> </h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><small><u>more...</u></small></a></p>
                                            <p className="author">Posted by <a href="#">James_007 </a>2 hours ago</p>
                                            {/* <!----> */}
                                            <div className="tags mb-4"> <a href="#" className="btn btn-tags selected mr-1"> #COLLEGE </a> <a href="#" className="btn btn-tags mr-1"> #EDUCATION </a> <a href="#" className="btn btn-tags mr-1"> #SCHOOL </a> <a href="#" className="btn btn-language float-right"> MALAYALAM </a> </div>
                                            {/* <!--//--> */}
                                            <img src={voiceimage} className="img-fluid mb-4"/>
                                        <div className="popup-images d-flex"> <a href="#" className="m-1"> <img src={widget1} className="brd-rounded5"/> </a> <a href="#" className="m-1"> <img src={widget2} className="brd-rounded5"/> </a> <a href="#" className="m-1"> <img src={widget3} className="brd-rounded5"/> </a> <a href="#" className="m-1"> <img src={widget4} className="brd-rounded5"/> </a> </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* <!--//--> */}
                                    {/* <!-- Comments --> */}
                                    <div className="comment p-3 mt-2 mb-3">
                                        <ul className="list-unstyled coments-use">
                                        <li> <a href="#" className="comment"><img src={iconlike}/></a> <span className="total">1 K</span> </li>
                                        <li> <a href="#" className="comment"><img src={icondislike}/></a> <span className="total">15</span> </li>
                                        <li> <a href="#"> <img src={iconcomment}/> <sup>
                                            {/* <span className="locked alert-bg">
                                            <img src={lockicon}/>
                                            </span> */}
                                            </sup> </a> <span className="total">32</span> </li>
                                        <li> <a href="#" className="comment"><img src={iconforward}/></a> <span className="total">20</span> </li>
                                        <li> <a href="#" className="comment"><img src={iconpin}/></a> <span className="total">08</span> </li>
                                        <li className="border-none"  data-toggle="modal" data-target="#myflag1"> <a href="#" className="comment"><img src={iconflag}/></a> <span className="total">01</span> </li>
                                        <li className="float-right"  data-toggle="modal" data-target="#myAddToPlayList"> <a href="#" className="comment"><img src={iconmusic}/> <span className="total">Add to playlist</span> </a></li>
                                        </ul>
                                    </div>
                                    {/* <!--//--> */}
                                    </div>
                                </div>
                                {/* <!--//--> */}
                                {/* <!-- Section Body --> */}
                                <div className="section-body mb-3">
                                    <div className="article">
                                    {/* <!-- Media --> */}
                                    <div className="media p-3"> <img src={author1} alt="John Doe" className="mr-3 rounded-circle" style={{width:'86px'}}/>
                                        <div className="media-body">
                                        <div className="article-title">
                                            <h5 >Why Colleges now imposing uniforms? <a href="#" className="btn btn-round prm-btn font-12 float-right">Follow</a> </h5>
                                        </div>
                                        <div className="article-body">
                                            <h5>I Totally agree 
                                                {/* <a href=""><img src={dlt11} className="float-right ml-2"/></a> */}
                                                  <a className="btn btn-outline-primary btn-round font-12 float-right create-post blue-create-post"> &nbsp; <b>Create Post</b> </a> </h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><small><u>more...</u></small></a></p>
                                            <p className="author">Posted by <a href="#">James_007 </a>2 hours ago</p>
                                            {/* <!----> */}
                                            <div className="tags mb-4"> <a href="#" className="btn btn-tags selected mr-1"> #COLLEGE </a> <a href="#" className="btn btn-tags mr-1"> #EDUCATION </a> <a href="#" className="btn btn-tags mr-1"> #SCHOOL </a> </div>
                                            {/* <!--//-->      */}
                                            <div className="popup-images d-flex"> <a href="#" className="m-1"> <img src={widget1} className="brd-rounded5"/> </a> <a href="#" className="m-1"> <img src={widget2} className="brd-rounded5"/> </a> <a href="#" className="m-1"> <img src={widget3} className="brd-rounded5"/> </a> <a href="#" className="m-1"> <img src={widget4} className="brd-rounded5"/> </a> </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* <!--//--> */}
                                    {/* <!-- Comments --> */}
                                    <div className="comment p-3 mt-2 mb-3">
                                        <ul className="list-unstyled coments-use">
                                        <li> <a href="#" className="comment"><img src={iconlike}/></a> <span className="total">1 K</span> </li>
                                        <li> <a href="#" className="comment"><img src={icondislike}/></a> <span className="total">15</span> </li>
                                        <li> <a href="#"> <img src={iconcomment}/> </a> <span className="total">32</span> </li>
                                        <li> <a href="#" className="comment"><img src={iconforward}/></a> <span className="total">20</span> </li>
                                        <li> <a href="#" className="comment"><img src={iconpin}/></a> <span className="total">08</span> </li>
                                        <li className="border-none"  data-toggle="modal" data-target="#myflag1"> <a href="#" className="comment"><img src={iconflag}/></a> <span className="total">01</span> </li>
                                        <li className="float-right"  data-toggle="modal" data-target="#myAddToPlayList"> <a href="#" className="comment"><img src={iconmusic}/> <span className="total">Add to playlist</span></a> </li>
                                        </ul>
                                    </div>
                                    {/* <!--//--> */}
                                    </div>
                                </div>
                                {/* <!--//--> */}
                                {/* <!-- Section Body --> */}
                                <div className="section-body mb-3">
                                    <div className="article">
                                    {/* <!-- Media --> */}
                                    <div className="media p-3"> <img src={author1} alt="John Doe" className="mr-3 rounded-circle" style={{width:'86px'}}/>
                                        <div className="media-body">
                                        <div className="article-title">
                                            <h5 >Why Colleges now imposing uniforms?  <a href="#" className="btn btn-round prm-btn font-12 float-right">Follow</a> </h5>
                                        </div>
                                        <div className="article-body">
                                            <h5>I Totally agree
                                                {/* <a href=""><img src={dlt11} className="float-right ml-2"/></a>  */}
                                                <a className="btn btn-outline-primary btn-round font-12 float-right create-post blue-create-post">&nbsp; <b>Create Post</b> </a> </h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><u>more...</u></a></p>
                                            <p className="author">Posted by <a href="#">James_007 </a>2 hours ago</p>
                                            {/* <!----> */}
                                            <div className="tags mb-4"> <a href="#" className="btn btn-tags selected mr-1"> #COLLEGE </a> <a href="#" className="btn btn-tags mr-1"> #EDUCATION </a> <a href="#" className="btn btn-tags mr-1"> #SCHOOL </a> </div>
                                            {/* <!--//--> */}
                                        </div>
                                        </div>
                                    </div>
                                    {/* <!--//--> */}
                                    {/* <!-- Comments --> */}
                                    <div className="comment p-3 mt-2 mb-3">
                                        <ul className="list-unstyled coments-use">
                                        <li> <a href="#" className="comment"><img src={iconlike}/></a> <span className="total">1 K</span> </li>
                                        <li> <a href="#" className="comment"><img src={icondislike}/></a> <span className="total">15</span> </li>
                                        <li> <a href="#"> <img src={iconcomment}/> </a> <span className="total">32</span> </li>
                                        <li> <a href="#" className="comment"><img src={iconforward}/></a> <span className="total">20</span> </li>
                                        <li> <a href="#" className="comment"><img src={iconpin}/></a> <span className="total">08</span> </li>
                                        <li className="border-none"  data-toggle="modal" data-target="#myflag1"> <a href="#" className="comment"><img src={iconflag}/></a> <span className="total">01</span> </li>
                                        <li className="float-right"  data-toggle="modal" data-target="#myAddToPlayList"> <a href="#" className="comment"><img src={iconmusic}/> <span className="total">Add to playlist</span> </a></li>
                                        </ul>
                                    </div>
                                    {/* <!--//--> */}
                                    </div>
                                </div>
                                {/* <!-- // --> */}
                                {/* <!-- loading icon --> */}
                                <div className="pt-5 pb-5 text-center">
                                    <img src={loading}/>
                                </div>
                                {/* <!-- loading icon ending --> */}
                                </div>
                            {/* <!--  tab Saved --> */}
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                {/* <!-- Section Body --> */}
                                <div className="section-body mb-3">
                                    <div className="article">
                                    {/* <!-- Media --> */}
                                    <div className="media p-3"> <img src={author1} alt="John Doe" className="mr-3 rounded-circle" style={{width:'86px'}}/>
                                        <div className="media-body">
                                        <div className="article-title">
                                            <h5 >Why Colleges now imposing uniforms? <a href="#" className="btn btn-round prm-btn font-12 float-right">Follow</a> </h5>
                                        </div>
                                        <div className="article-body">
                                        <h5>I Totally agree 
                                            {/* <a href=""><img src={dlt11} className="float-right ml-2"/></a> */}
                                             <a><img src={saved} className="float-right ml-2"/> &nbsp;</a> </h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><small><u>more...</u></small></a></p>
                                        <p className="author">Posted by <a href="#">James_007 </a>2 hours ago</p>
                                        {/* <!----> */}
                                        <div className="tags mb-4"> <a href="#" className="btn btn-tags selected mr-1"> #COLLEGE </a> <a href="#" className="btn btn-tags mr-1"> #EDUCATION </a> <a href="#" className="btn btn-tags mr-1"> #SCHOOL </a><a href="#" className="btn btn-language float-right"> MALAYALAM </a> </div>
                                        {/* <!--//--> */}
                                        <img src={voiceimage} className="img-fluid mb-4"/>
                                        <div className="popup-images d-flex"> <a href="#" className="m-1"> <img src={widget1} className="brd-rounded5"/> </a> <a href="#" className="m-1"> <img src={widget2} className="brd-rounded5"/> </a> <a href="#" className="m-1"> <img src={widget3} className="brd-rounded5"/> </a> <a href="#" className="m-1"> <img src={widget4} className="brd-rounded5"/> </a> </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* <!--//--> */}
                                    
                                </div>
                                </div>
                                {/* <!--//--> */}
                                {/* <!-- Section Body --> */}
                                <div className="section-body mb-3">
                                <div className="article">
                                    {/* <!-- Media --> */}
                                    <div className="media p-3"> <img src={author1} alt="John Doe" className="mr-3 rounded-circle" style={{width:'86px'}}/>
                                    <div className="media-body">
                                        <div className="article-title">
                                        <h5 >Why Colleges now imposing uniforms? <a href="#" className="btn btn-round prm-btn font-12 float-right">Follow</a> </h5>
                                        </div>
                                        <div className="article-body">
                                        <h5>I Totally agree 
                                            {/* <a href=""><img src={dlt11} className="float-right ml-2"/></a>  */}
                                             <a><img src={saved} className="float-right ml-2"/> &nbsp; </a> </h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><small><u>more...</u></small></a></p>
                                        <p className="author">Posted by <a href="#">James_007 </a>2 hours ago</p>
                                        {/* <!----> */}
                                        <div className="tags mb-4"> <a href="#" className="btn btn-tags selected mr-1"> #COLLEGE </a> <a href="#" className="btn btn-tags mr-1"> #EDUCATION </a> <a href="#" className="btn btn-tags mr-1"> #SCHOOL </a>  </div>
                                        {/* <!--//--> */}
                                        <div className="popup-images d-flex"> <a href="#" className="m-1"> <img src={widget1} className="brd-rounded5"/> </a> <a href="#" className="m-1"> <img src={widget2} className="brd-rounded5"/> </a> <a href="#" className="m-1"> <img src={widget3} className="brd-rounded5"/> </a> <a href="#" className="m-1"> <img src={widget4} className="brd-rounded5"/> </a> </div>
                                    </div>
                                    </div>
                                </div>
                                {/* <!--//--> */}
                                </div>
                            </div>
                            {/* <!--//--> */}
                            {/* <!-- Section Body --> */}
                            <div className="section-body mb-3">
                                <div className="article">
                                {/* <!-- Media --> */}
                                <div className="media p-3"> <img src={author1} alt="John Doe" className="mr-3 rounded-circle" style={{width:'86px'}}/>
                                    <div className="media-body">
                                    <div className="article-title">
                                        <h5 >Why Colleges now imposing uniforms?  <a href="#" className="btn btn-round prm-btn font-12 float-right">Follow</a> </h5>
                                    </div>
                                    <div className="article-body">
                                        <h5>I Totally agree 
                                            {/* <a href=""><img src={dlt11} className="float-right ml-2"/></a>  */}
                                            <a href=""><img src={saved} className="float-right ml-2"/> </a></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><u>more...</u></a></p>
                                        <p className="author">Posted by <a href="#">James_007 </a>2 hours ago</p>
                                        {/* <!----> */}
                                        <div className="tags mb-4"> <a href="#" className="btn btn-tags selected mr-1"> #COLLEGE </a> <a href="#" className="btn btn-tags mr-1"> #EDUCATION </a> <a href="#" className="btn btn-tags mr-1"> #SCHOOL </a> 
                                        </div>
                                        {/* <!--//--> */}
                                    </div>
                                    </div>
                                </div>
                                {/* <!--//--> */}
                                </div>
                            </div>
                            {/* <!-- // --> */}
                            
                            {/* <!-- loading icon --> */}
                            <div className="pt-5 pb-5 text-center">
                                <img src={loading}/>
                            </div>
                            {/* <!-- loading icon ending --> */}
                            </div>

                            </div>

                            </section>
                            {/* <!--//--> */}

            </div>
        );
    }
}
export default Pinbody;