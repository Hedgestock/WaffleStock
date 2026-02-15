import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MemberCard.css"

interface IMemberCardProps {
    nick: string
    reverse?: boolean
}

export default function MemberCard(props: IMemberCardProps) {
    const { nick, reverse } = props;

    const [memberInfo, setMemberInfo] = useState<IMemberInfo>({});

    useEffect(() => {
        fetch(`/WaffleStock/members/${nick}/info.json`)
            .then(res => res.json())
            .then(test => { setMemberInfo(test) })
            .catch(err => console.error("Load failed", err));
    }, [nick]);

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/us/${nick}`);
    };

    return (
        <div className="member-card scaler" style={{ flexDirection: reverse ? "row-reverse" : "row" }}
            // onClick={handleNavigation}
            >
            <img style={{ borderRadius: "100%" }} src={`/WaffleStock/members/${nick}/headshot.jpg`} width={128} height={128} />
            <div>
                <h3>{memberInfo.name} "{memberInfo.pseudo}" {memberInfo.family_name}</h3>
                <p dangerouslySetInnerHTML={{ __html: memberInfo.short_desc ?? "" }} />
            </div>
        </div>
    )
}

interface IMemberInfo {
    name?: string;
    family_name?: string;
    pseudo?: string;
    short_desc?: string;
}