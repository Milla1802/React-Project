import '../App.css';
import ProfileImage from '../images/ProfileImage.svg'

function ProfileBar() {
    return (
        <section className="main-profile">
            <div className="profile_img">
                <img src={ ProfileImage } alt="profileImage"></img>
            </div>
            <div><p><a href=" ">Sarah’s day care available now in North Sydney</a></p></div>
            <div><h4>Wednesday, Thursday, Friday - 7:30 - 5:30</h4></div>

        </section>
    )
}

export default ProfileBar;