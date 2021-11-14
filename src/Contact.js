import Header from './component/ContactUs/Header'
import ContactProfile from './component/ContactUs/ContactProfile'
import Navbar from './component/nav_bar/NavBar'
import Footer from './component/Footer/Footer'

function Contact() {
  return (
    <div>
      <Navbar/>
      <Header title={'Contact Us'}/>
      <ContactProfile />
      <Footer/>
    </div>
  );
}

export default Contact;
