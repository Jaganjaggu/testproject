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
        {/* Header End */}
    
        <div class="wrapper">
            <div id="content">
                <section className="main">
                    <div className="container-fluid">
                    <div className="row clearfix">

                        {/* Left Sidebar */}
                        <Leftsidebar/>
                        {/* Left Sidebar End */}

                        {/* Postcard */}
                        <Postcard/>
                        {/* Postcard End */}

                    </div>
                    </div>
                </section>   
            
                {/* FOOTER PART */}
                <Footer/>   
                {/* Footer End */}

            </div>
        </div>
    </div>
  );
}

export default Postpage;


                        