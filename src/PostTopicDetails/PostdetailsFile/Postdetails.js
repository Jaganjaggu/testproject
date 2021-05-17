import React from 'react'
import Feed from '../../Feedfile/Feed';
import Feedresponse from '../../Feedfile/Feedrespose';

import Footer from '../../Footer';
import Header from '../../Header';
import TopRated from '../TopRated';
import Invite from './Invite';
import Widget from './Widget';



const Postdetails = () => {
    return (
        <div className="wrapper">
            <div id="content" className="App">
            <Header />
            <section className="main">
                <div className="container-fluid visiblity">
                    <div className="row clearfix">
                        {/* <Post/> */}
                        
                        {/* Feed and Feed Response */}
                        <div className="col-md-9 pt-5">
                            <div className="section-body mb-3">
                                <div className="article">
                                    {/* Feed */}
                                    <Feed/>
                                    {/* Feed End */}
                                </div>
                                {/* Feed Response */}
                                    <Feedresponse/>
                                {/* Feed Response End */}
                            </div>
                        </div>
                        {/* Feed and Feed Responses End */}




                        <div className="col-md-3"> 
                            <div className="row clearfix">    
                                <TopRated/>
                                <Invite/>
                                <Widget/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            </div>
        </div>
    )
}

export default Postdetails
