import Header from './component/ContactUs/Header'
import ContactProfile from './component/ContactUs/ContactProfile'
import Button from './component/ContactUs/Button'

function Contact() {
  return (
    <div>
      <Header title={'Contact Us'}/>
      <ContactProfile />
      <Button text='Back'/>
    </div>
  );
}

export default Contact;
