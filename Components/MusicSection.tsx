export default function MusicSection() {
    return (
        <div className={"music-section"}>
            <div className={"back-element"}/>

            <div className={"front-container"}>

                <img
                    className={"front-container__icon"}

                    alt=""/>

                <div className={"front-container__right"}>
                    <h4 className={"front-container__title"}>
                        MUSIKK
                    </h4>

                    <iframe className={"spotify-frame"}
                            src="https://open.spotify.com/embed/artist/6uqHSrgWf3HZhgb4bSHRJG?utm_source=generator"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="eager"></iframe>

                    <div className={"front-container__links"}>
                        <img alt="SPOTIFY"/>
                        <img alt="YOUTUBE"/>
                        <img alt="SOUNDCLOUD"/>
                    </div>

                </div>

            </div>
        </div>


    )
}
