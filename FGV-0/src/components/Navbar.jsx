import './styles/navbar.css'

function Navbar(){

    return (
        <header className="header">
            <a href="/" className="logo">Amadeus</a>

            <navbar className="navbar">
                <a href="/" className="">Home</a>
                <a href="/" className="">About</a>
                <a href="/" className="">Portfolio</a>
                <a href="/" className="">Services</a>
                <a href="/" className="">Contact</a>
            </navbar>

        </header>
    );
}

export default Navbar;