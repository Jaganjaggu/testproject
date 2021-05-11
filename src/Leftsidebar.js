import React, { Component } from 'react';
import './Leftsidebar.css';

import p1 from './images/p1.png';
import p3 from './images/p3.png';
import p4 from './images/p4.png';
import p5 from './images/p5.png';
import p6 from './images/p6.png';
import p7 from './images/p7.png';
import p8 from './images/p8.png';
import p9 from './images/p9.png';
import p10 from './images/p10.png';



class Leftsidebar extends Component{
    render(){
        return(
            <div>
                {/* <!-- Left Sidebar --> */}
                <div className="col-md-2" id="leftSidebar">
                    <div className="row clearfix">
                        {/* <!-- Top rated widget--> */}
                        <div className="widget-section blue-bg col-md-12 pt-4">
                            <section>
                                <ul className="list-unstyled sidebarlink text-uppercase">
                                <li><a href="#"><img src={p1} alt=""/> My Station </a> </li>
                                <li><a href="#"><img src={p3} alt=""/> Topics </a></li>
                                <li className="selected"><a href="#"><img src={p4} alt=""/> Posts </a></li>
                                <li><a href="#"><img src={p5} alt=""/> Comments </a></li>
                                <li><a href="#"><img src={p6} alt=""/> Pins </a></li>
                                <li><a href="#"><img src={p7} alt=""/> Upvoted </a></li>
                                <li><a href="#"><img src={p8} alt=""/> Flagged </a></li>
                                <li><a href="#"><img src={p9} alt=""/> Downvoted </a></li>
                                <li><a href="#"><img src={p10} alt=""/> Playlist </a></li>
                                 </ul>
                            </section>
                        </div>
                        {/* <!--//--> */}
                    </div>
                </div>
                {/* <!--//--> */}
            </div>
        );
    }
}
export default Leftsidebar;
    