import logo from '../assets/images/logo.svg'

function Footer(){
    return (
        <footer>
            <div>
                <img src={logo}></img>
            </div>
            <div>
                <p>Copyright Little Lemon</p>
            </div>
        </footer>
    );
};

export default Footer;