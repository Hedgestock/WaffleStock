import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <ul className="navbar">
            <NavButton to="" id="home">
                <img style={{width: "3rem", height: "3rem"}} src="/WaffleStock/images/Logo_WaffleStock.webp" />
            </NavButton>
            <NavButton to="/games">Games</NavButton>
            <NavButton to="/us">Us</NavButton>
            <NavButton to="/contact">Contact</NavButton>
        </ul>
    );
}

interface NavButtonProps extends React.LiHTMLAttributes<HTMLLIElement> {
    to: string;
}

function NavButton(props: NavButtonProps) {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(props.to);
    };

    return <li {...props} onClick={handleNavigation} />
}