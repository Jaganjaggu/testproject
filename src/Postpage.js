// import logo from './logo.svg';
// import './App.css';




import Footer from './Footer';
import Header from './Header';
import Leftsidebar from './Leftsidebar';
import Postcard from './Postcard';
// import Pincard from './Pincard';


function Postpage() {
  return (
    <div>
      {/* HEADER PART */}
      <Header/>

      <div class="wrapper">
        <div id="content">
          <section className="main">
            <div className="container-fluid">
              <div className="row clearfix">
                <Leftsidebar/>
                <Postcard/>
              </div>
            </div>
          </section>   
          
          
          {/* FOOTER PART */}
          
          <Footer/>   

        </div>
      </div>
    </div>
   

  );
}

export default Postpage;
