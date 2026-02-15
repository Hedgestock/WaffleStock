import { useState } from "react";
import Loading from "../Loading/Loading.tsx";
import "./GameCard.css"
import { Link } from "react-router-dom";

interface IGameCardProps {
    gameTitle: string;
    pagePath: string;
    itchId?: string;
    googlePlayURL?: string;
    appleAppStoreURL?: string;
    privacyPolicy?: boolean;
}

export default function GameCard(props: IGameCardProps) {
    const { itchId, googlePlayURL, appleAppStoreURL, gameTitle, pagePath, privacyPolicy } = props;

    const [loading, setLoading] = useState(true);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const rootElement = globalThis.getComputedStyle(document.documentElement)

    const itchWidget =
        <>
            {loading && <Loading />}
            <iframe frameBorder="0" className="itch-embed scaler"
                onLoad={() => { setLoading(false); setWidth(552); setHeight(171) }}
                src={`https://itch.io/embed/${itchId}?border_width=3&bg_color=${rootElement.getPropertyValue("--primary-bg-color").slice(1)}&fg_color=${rootElement.getPropertyValue("--text-color").slice(1)}&link_color=${rootElement.getPropertyValue("--secondary-color").slice(1)}&border_color=${rootElement.getPropertyValue("--primary-color").slice(1)}`}
                width={width} height={height}
            />
        </>

    const googlePlayWidget =
        <a className="scaler" href={googlePlayURL} target="_blank" title={gameTitle}>
            <img className="google-play-button" src="/WaffleStock/images/GetItOnGooglePlay.png" />
        </a>

    const appleWidget =
        <a>
            <img className="google-play-button scaler" src="/WaffleStock/images/GetItOnGooglePlay.png" />
        </a>

    return <div className="game-card">
        <h2>{gameTitle}</h2>
        {itchId == "test" && <div className="itch-embed scaler" style={{ backgroundColor: "red" }}></div>}
        {itchId && itchId != "test" && itchWidget}
        {googlePlayURL && googlePlayWidget}
        {appleAppStoreURL && appleWidget}
        {privacyPolicy && <Link to={`/${pagePath}/privacy-policy`} style={{ whiteSpace: "nowrap" }}>privacy policy</Link>}
    </div>
}
