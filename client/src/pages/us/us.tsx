import { Link } from "react-router-dom";
import "./us.css"
import MemberCard from "../../components/MemberCard/MemberCard.tsx";
import GamesDisplay from "../../components/GamesDisplay/GamesDisplay.tsx";

export default function Us() {
    return (
        <div className="us-container">
            <div className="col">
                <h1>WaffleStock</h1>
                <p>
                    Wafflestock is really a passion project about producing simple but addictive games concocted with love and a touch of depth.
                    <br />
                    <br />
                    The WaffleStock team is composed of <Link to="./beewaffle">Beewaffle</Link>, in charge of the artistic direction as well as producing the assets of our games,
                    and <Link to="./hedgestock">Hedgestock</Link> programmer and lead gameplay designer.
                </p>
                <GamesDisplay published/>
            </div>
            <div className="col">
                <h1>The Team</h1>
                <h2>Core members</h2>
                <div className="members-container">
                    <MemberCard nick="hedgestock" />
                    <MemberCard nick="beewaffle" reverse />
                </div>
            </div>
        </div>
    )
}