import PropTypes from 'prop-types'

const Profile = ({userData}) => {
    return (
        <header>
            <h1>Profile</h1>
            <p>{userData.name}</p>
            <p>{userData.surname}</p>
            <p>{userData.birthday}</p>
            <p>{userData.citizenId}</p>
            <p>{userData.occupation}</p>
            <p>{userData.address}</p>
        </header>
    )
}

Profile.defaultProps = {
    userData : {
        "name": "Harry",
        "surname": "Hacker",
        "birthday": "00/00/0000",
        "citizenId": "123456789",
        "occupation": "Hacker",
        "address": "Unknown"
    }
}

Profile.propTypes = {
    userData : PropTypes.shape({
        name: PropTypes.string,
        surname: PropTypes.string,
        birthday: PropTypes.string,
        citizenId: PropTypes.string,
        occupation: PropTypes.string,
        address: PropTypes.string,
    })
}
export default Profile