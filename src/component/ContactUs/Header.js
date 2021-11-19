import PropTypes from 'prop-types'
import './Header.css'

const Header = ({title}) => {
    return (
     
        <header className= "header">
            <h2 className="contact-title">{title}</h2>
        </header>
    
    )
}

Header.defaultProps = {
    title: 'TITLE',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header