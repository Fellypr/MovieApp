import "./Navbar.css"

//icones
import { FcSearch } from "react-icons/fc";
import { BiCameraMovie } from "react-icons/bi";
import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { useAuth } from "../components/context";



function Navbar (){
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const {email} = useAuth();


    

    function handleSearch(e){
        e.preventDefault();
        console.log(search);
        if (!search) {
           return; 
        }

        navigate(`/search?q=${search}`); 
        setSearch("");

    }
    return(
        <div className="navbar">
            <h1 className="typing"><Link to={'/container'}>The Movies</Link></h1> <BiCameraMovie size={30} className="iconmovie"/>
            <form onSubmit={handleSearch}>
                <input type="text" className="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/> <button className="iconsearch" type="submit"><FcSearch size={23} /></button>
            </form>

            <h3 className="leFadeInRight">Wellcome:{email.split("@")[0]}@</h3>
        </div>
    )
}

export default Navbar;