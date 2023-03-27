import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import FooterLogo from "../images/footer-logo.svg";

const Footer = () => {
    return (
        <>
            <footer className="footer  p-5">
                <div className="flex items-center justify-center mt-10">
                   <img src={FooterLogo} alt=""/>
                </div>
                <ul className="flex items-center justify-center gap-5 my-10 ">
                    <li className="mx-2"><button>About</button></li>
                    <li className="mx-2"><button>Services</button></li>
                    <li className="mx-2"><button>Projects</button></li>
                   
                </ul>
                <ul className="flex items-center justify-center gap-5 my-10">
                    <li className="mx-2"><img src={Facebook} alt=""/></li>
                    <li className="mx-2"><img src={Instagram} alt=""/></li>
                    <li className="mx-2"><img src={Twitter} alt=""/></li>
                    <li className="mx-2"><img src={Pinterest} alt=""/></li>
                
                </ul>

            </footer>
        </>
    )
}

export default Footer