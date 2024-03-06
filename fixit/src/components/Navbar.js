import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () => {
        logout()
    }
    return(
        <header>
            <div className="navbar">
                <Link to="/">
                    <h1>Fix It</h1>
                </Link>
                <nav >
                    {user && (
                        <div> 
                            <span>{user.email}</span>
                            <button className="btn" onClick={handleClick}>Log Out</button>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">SignUp</Link>
                        </div>  
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar