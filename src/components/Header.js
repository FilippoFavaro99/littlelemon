import logo from '../assets/images/logo.svg'

function Header(){
    return (
        <header>
            <div>
                <img src={logo}></img>
            </div>
        </header>
    );
};

export default Header;