import GameCard from "../GameCard/GameCard.tsx";
import "./GamesDisplay.css"

interface IGameDisplayProps {
    published?: boolean,
    jams?: boolean,
    wip?: boolean
}

export default function GamesDisplay(props: IGameDisplayProps) {
    return <>
        {props.published &&
            <>
                <h2>Published games and apps</h2>
                <div className="games-display">
                    {/* <GameCard
            gameTitle="test"
            pagePath="test"
            itchId="test"
            googlePlayURL="https://play.google.com/store/apps/details?id=org.wafflestock.ftf"
            privacyPolicy /> */}
                    <GameCard
                        gameTitle="Fish the Fishes"
                        pagePath="FishTheFishes"
                        itchId="3414737"
                        googlePlayURL="https://play.google.com/store/apps/details?id=org.wafflestock.ftf"
                        privacyPolicy />
                    <GameCard
                        gameTitle="Voc'cards"
                        pagePath="VocCards"
                        itchId="4270301"
                        googlePlayURL="https://play.google.com/store/apps/details?id=org.wafflestock.voccard"
                        privacyPolicy />
                </div>
            </>
        }
        {props.jams &&
            <>
                <h2>Gamejam submissions</h2>
                <div className="games-display">
                    <GameCard
                        gameTitle="FlipPinball"
                        pagePath="FlipPinball"
                        itchId="3404181" />
                    <GameCard
                        gameTitle="SplatFace"
                        pagePath="SplatFace"
                        itchId="2718599"
                        privacyPolicy />
                    <GameCard
                        gameTitle="BpaiNǎiNaiTai"
                        pagePath="BpaiNaiNaiTai"
                        itchId="3502034" />
                </div>
            </>
        }
        {props.wip &&
            <>
                <h2>Works in progress</h2>
                <div className="games-display">
                    <GameCard
                        gameTitle="Space Shooter"
                        pagePath="SpaceShooter"
                        itchId="4270046" />
                    <GameCard
                        gameTitle="HexNihilo"
                        pagePath="HexNihilo"
                        itchId="3480768"
                        privacyPolicy />
                </div>
            </>
        }
    </>
}