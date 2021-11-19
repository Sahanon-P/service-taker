import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = ({title}) => {
    return (
        <header className= "header-container">
            <h2 className="header-txt">{title}</h2>
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
