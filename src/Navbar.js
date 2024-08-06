import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <h3>The Pogo Blog</h3>
            <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/create' style={{
                color: "white",
                backgroundColor: "#8a2ce2",
                borderRadius: "10px"
            }}>New Blog</Link>
            </div>
        </div>
    );
}
 
export default Navbar;