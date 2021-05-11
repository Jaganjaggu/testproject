// import logo from './logo.svg';
// import './App.css';
import Footer from './Footer';
import Header from './Header';
import Leftsidebar from './Leftsidebar';
import Postcard from './Postcard';


function App() {
  return (
    <div>
      {/* HEADER PART */}
      <Header/>
      <div>
      <section className="main">
        <div className="container-fluid">
          <div className="row clearfix">
            <Leftsidebar/>
            <Postcard/>
          </div>
        </div>
      </section>

      </div>
      <br/>
      <br/>
      <br/>
      <br/>
   
      
      {/* FOOTER PART */}
      
      <Footer/>   
    </div>
  );
}

export default App;
