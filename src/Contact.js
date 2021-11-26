import Header from './component/Header/Header'
import ContactProfile from './component/ContactUs/ContactProfile2'
import NavBar from './component/NavBar/NavBar'


function Contact() {
  return (
    <div>
      <NavBar/>
      <Header title={'Contact Us'}/>
      <ContactProfile/>
    </div>
  );
}

export default Contact;
