// import logo from './logo.svg';
// import './App.css';




// import Footer from './Footer';
// import Header from './Header';
// import Leftsidebar from './Leftsidebar';
import Postpage from './Postpage';
import Pincard from './Pincard';


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
            <Route exact path='/Posts' component={Postpage} />
            <Route  path='/Posts' component={Postpage} />
            <Route path='/pins' component={Pincard} />
        </Switch>
      </Router>
     
    </div>

  );
}

export default App;
