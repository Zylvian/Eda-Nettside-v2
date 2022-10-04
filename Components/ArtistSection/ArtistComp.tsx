import dilecutout from "../../media/images/dilettant-cutout.png";
import dileabstract from "../../media/images/dilettant-abstract.png";

export default function ArtistComp(props) {

    const artistData = props.artistdata;
    // console.log(artistData);
    // console.log(props);

    const artistClassName = "artist-section__artist__" + props.side;


    return (
        <div className={artistClassName}>
            {/*{props.side == "right" &&*/}
            {/*    <style>flex-direction: column-reverse;</style>*/}
            {/*}*/}

            <div className={"artist-section__text"}>
                <h4 className={"artist-section__text__minor"}>
                    {artistData.tagline}
                </h4>

                <h3 className={"artist-section__text__major"}>
                    {artistData.name}
                </h3>
            </div>

            <img
                className={"artist-section__photo"}
                src={artistData.image.src}
                alt="Dilettant photo"/>
            <img
                className={"artist-section__icon"}
                src={artistData.icon.src}
                alt="Dilettant abstract image"
            />
        </div>
    )
}