import React from 'react';
import '../../Style.css';
import Header from '../../Header.js';
import Bodyhead from './Bodyhead';
import Feed from '../../Feedfile/Feed';
import Feedresponse from '../../Feedfile/Feedrespose';
import TopRated from '../TopRated';
import Invite from '../PostdetailsFile/Invite';
import Widget from '../PostdetailsFile/Widget';
// import Footer from './Footer.js';
// import Bodyhead from './Bodyhead.js';
// import Body from './Body.js';
// import Body1 from './Body1.js';
// import Body2 from './Body2.js';



function Topic() {
    return (
        <div>

            
             <div className="wrapper">
                <div id="content" className="App">
                <Header/>
                   
                        {/* <!-- Main --> */}
                        <section class="main">
                            <div class="container-fluid visibility">
                                <div class="row clearfix">
                                    {/* <!-- section --> */}
                                    <div class="col-md-9 pt-5">
                                    
                                        <Bodyhead/>

                                        <div className="section-body mb-3">
                                            <div className="article">
                                                {/* <!-- Media --> */}
                                                {/* Feed */}
                                                <Feed/>
                                                {/* Feed End */}

                                                {/* <!--//--> */}
                                                {/* <!-- Comments --> */}

                                                <Feedresponse/>

                                                {/* <!--//--> */}
                                            
                                            </div>
                                        </div>
                                        {/* <Body /> */}
                                        {/* <Body2/> */}
                                        {/* <Body1 /> */}
                                        {/* <Body /> */}
                                        {/* <Body2/> */}
                                        
                                    </div>
                                    {/* <!-- // --> */}
                                    {/* <!-- Right Sidebar --> */}
                                    <div className="col-md-3"> 
                                        <div className="row clearfix">    
                                            <TopRated/>
                                            <Invite/>
                                            <Widget/>
                                        </div>
                                    </div>
                        

                                    {/* <!-- // --> */}
                                </div>
                            </div>
                        </section>
                    
                    {/* <Footer/> */}
                </div>

                        
            </div>
        </div>
    );
}

export default Topic;