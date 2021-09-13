import '../App.css';
import ImageSection1 from '../images/ImageSection1.svg'


function Main () {
    return(
        <section className="container_section">
            <div className="section1">
                <div className="section1-left">
                    <h2>Share your home, nanny and costs</h2>
                    <p>You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <a href=" ">Hapu means tribe</a> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.</p>
                    <a href=" ">Ready to get started?</a>
                </div>
                <div className="section1-right">
                    <img src={ ImageSection1 } alt="ImageSection1" />
                </div>
            </div>
            <div className= "divider_bar"></div>
            <div className="section2">
                <div className="section2_title">
                    <h3>Are you a parent without a nanny and looking to share?</h3>
                </div>
                <div className="section2_p">
                    <p>Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</p>
                </div>
                <form className="form_container">
                    <div>
                        <label for="name">
                            <input className="form" type="text" placeholder="Your Name" id="name"/>
                        </label>
                    </div>
                    <div >
                        <label for="email">
                            <input className="form" type="email" placeholder="Your email" id="email"/>
                        </label>
                    </div>
                    <div>
                        <label for="send">
                            <input className="form_button" type="button" value="Send" id="send"/>
                        </label>
                    </div>
                </form>
            </div>
            <div className= "divider_bar"></div>
        </section>
    );
}

export default Main;