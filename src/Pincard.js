import Footer from './Footer';
import Header from './Header';
import Leftsidebar from './Leftsidebar';
import Pinbody from './Pinbody';

function Pincard() {
    return (
        <div>
            
            <Header/>

            <div class="wrapper">
                <div id="content">
                    <section className="main">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <Leftsidebar/>
                            <Pinbody/>
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
  
  export default Pincard;