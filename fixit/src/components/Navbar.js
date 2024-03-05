import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
    const {logout} = useLogout()

    const handleClick = () => {
        logout()
    }
    return(
        <header>
            <div className="navbar">
                <Link to="/">
                    <h1>Fix It</h1>
                </Link>
                <nav>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">SignUp</Link>
                    </div>
                    <div>
                        <button onClick={handleClick}>Log Out</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar