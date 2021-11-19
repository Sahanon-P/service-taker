import Header from './component/ContactUs/Header'
import ContactProfile from './component/ContactUs/ContactProfile'
import Footer from './component/Footer/Footer'
import NavBar from './component/NavBar/NavBar'


function Contact() {
  return (
    <div>
      <NavBar/>
      <Header title={'Contact Us'}/>
      <ContactProfile />
      <Footer/>
    </div>
  );
}

export default Contact;
