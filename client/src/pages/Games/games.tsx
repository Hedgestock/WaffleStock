import GameCard from "../../components/GameCard/GameCard.tsx";
import "./games.css"

export default function Games() {
    return (
        <div className="games-container">
            <GameCard
                gameTitle="Fish the Fishes"
                pagePath="FishTheFishes"
                itchId="3414737"
                googlePlayURL="https://play.google.com/store/apps/details?id=org.wafflestock.ftf"
                appleAppStoreURL="lol"
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
    )
}