import PropTypes from 'prop-types'

const Button = ({text}) => {
    
    const onClick = (e) =>{
        console.log('Back to Home')
    }

    return (
     <button
     onClick={onClick}
      className='btn'>
          {text}
      </button>
    )
}

Button.defaultProps = {
    text: 'BUTTON',
}

Button.propTypes = {
    text: PropTypes.string,
}

export default Button