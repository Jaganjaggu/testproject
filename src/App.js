// import logo from './logo.svg';
// import './App.css';




// import Footer from './Footer';
// import Header from './Header';
// import Leftsidebar from './Leftsidebar';
import Postpage from './Postpage';
import Pincard from './Pincard';


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Postdetails from './PostTopicDetails/PostdetailsFile/Postdetails';
import Topic from './PostTopicDetails/Topicdetailsfile/Topic';
// import Leftsidebar from './Leftsidebar';


function App() {
  return (
    // <div>
    //   {/* HEADER PART */}
    //   <Header/>

    //   <div class="wrapper">
    //     <div id="content">
    //       <section className="main">
    //         <div className="container-fluid">
    //           <div className="row clearfix">
    //             <Leftsidebar/>
    //             <Postcard/>
    //           </div>
    //         </div>
    //       </section>   
          
          
    //       {/* FOOTER PART */}
          
    //       <Footer/>   

          
    //     </div>
    //   </div>
    
   
    
      
     
    // </div>
    <div>
      
      <Router>
        
        <Switch>
            <Route exact path='/' component={Postpage} />
            <Route  path='/Posts' component={Postpage} />
            <Route path='/pins' component={Pincard} />
            <Route path='/post-details' component={Postdetails} />
            <Route path='/topic-details' component={Topic} />
        </Switch>

      </Router>
     
    </div>

  );
}

export default App;
