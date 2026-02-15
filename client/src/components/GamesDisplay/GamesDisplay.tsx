import GameCard from "../GameCard/GameCard.tsx";
import "./GamesDisplay.css"

export default function GamesDisplay() {
    return <div className="games-display">
                <GameCard
            gameTitle="test"
            pagePath="test"
            itchId="test"
            googlePlayURL="https://play.google.com/store/apps/details?id=org.wafflestock.ftf"
            privacyPolicy />
        <GameCard
            gameTitle="Fish the Fishes"
            pagePath="FishTheFishes"
            itchId="3414737"
            googlePlayURL="https://play.google.com/store/apps/details?id=org.wafflestock.ftf"
            privacyPolicy />
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
        <GameCard
            gameTitle="Voc'cards"
            pagePath="VocCards"
            itchId="4270301"
            googlePlayURL="https://play.google.com/store/apps/details?id=org.wafflestock.voccard"
            privacyPolicy />
        <GameCard
            gameTitle="Space Shooter"
            pagePath="SpaceShooter"
            itchId="4270046" />
    </div>
}