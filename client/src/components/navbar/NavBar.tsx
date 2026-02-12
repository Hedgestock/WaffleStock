import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <ul className="navbar">
            <NavButton to="" id="home">WaffleStock</NavButton>
            <NavButton to="/Games">Games</NavButton>
            <NavButton to="">Us</NavButton>
            <NavButton to="">Contact</NavButton>
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

    return <li {...props} onClick={handleNavigation}/>
}