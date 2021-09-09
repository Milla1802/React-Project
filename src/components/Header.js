import '../App.css';
import Badge from '../images/Badge.svg';

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
              
            </div>
          </div>
      </section>
    )
}

export default Header; 