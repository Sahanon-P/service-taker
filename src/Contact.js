import Header from './component/ContactUs/Header'
import ContactProfile from './component/ContactUs/ContactProfile'
import Navbar from './component/ContactUs/Navbar'

function Contact() {
  return (
    <div>
      <Navbar/>
      <Header title={'Contact Us'}/>
      <ContactProfile />
    </div>
  );
}

export default Contact;
