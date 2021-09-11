import '../App.css';
import Badge from '../images/Badge.svg';
import Playbutton from '../images/Playbutton.svg';
import ImageHeader from '../images/ImageHeader.svg';


function Header() {
    return(
      <section className="principal">
        <div className="header">
          <div className="logo">
            <img src={ Badge } alt="logo-img"/>
          </div>
          <div className="nav-bar">
            <div className="menu">
              <div className="menu-right">
                  <div class="buttons_nav"><a href=" ">Create Your Nanny Share</a></div>
                  <div class="buttons_nav"><a href=" ">Browse Shares</a></div>
                  <div class="buttons_nav"><a href=" ">Our Story</a></div>
              </div>
              <div className="menu-left">
                <a href=" "><div class="button_green">Become a Nanny Share Host</div></a>
                <div class="buttons_nav"><a href=" ">Sign In</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-main">
            <div className="center">
              <div className="center_rigth">
                <h1>Easily create or join a local nanny share with Hapu</h1>
                <p>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
                <div className="play-button">
                  <div><a href=" "><img src={ Playbutton } alt="play-button" /></a></div>
                  <div><a href=" "><p>See hapu in action (27 seconds)</p></a></div>
                </div>
              </div>
              <div className="center_left">
              <a href=" "><img src={ ImageHeader } alt="image_header" /></a>
              </div>
            </div>
          </div>
      </section>
    )
}

export default Header; 