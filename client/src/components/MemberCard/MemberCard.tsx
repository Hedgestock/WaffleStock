interface IMemberCardProps {
    nick: string
}

export default function MemberCard(props: IMemberCardProps) {
    const {nick} = props;
    return (
        <div>
            <img style={{borderRadius: "100%"}} src={`/WaffleStock/members/${nick}/headshot.jpg`} width={256} height={256}/>
        </div>
    )
}