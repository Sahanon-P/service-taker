import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = ({title}) => {
    return (
        <header className= "header">
            <h1 className="header-txt">{title}</h1>
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
