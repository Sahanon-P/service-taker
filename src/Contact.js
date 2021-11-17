import Header from './component/ContactUs/Header'
import ContactProfile from './component/ContactUs/ContactProfile'
import NavBar from './component/NavBar/NavBar'

function Contact() {
  return (
    <div>
      <NavBar/>
      <Header title={'Contact Us'}/>
      <ContactProfile />
    </div>
  );
}

export default Contact;
