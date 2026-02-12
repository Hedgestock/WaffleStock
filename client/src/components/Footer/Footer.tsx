import { useNavigate } from "react-router-dom";
import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <ul>
                <NavButton to="" id="home">WaffleStock</NavButton>
                <NavButton to="/Games">Games</NavButton>
                <NavButton to="">Us</NavButton>
                <NavButton to="">Contact</NavButton>
            </ul>
        </footer>
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