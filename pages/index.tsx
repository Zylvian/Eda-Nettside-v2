import NavBar from "../Components/NavBar"
import BannerWithTitle from "../Components/BannerWithTitle";
import ArtistSection from "../Components/ArtistSection/ArtistSection";
import MusicSection from "../Components/MusicSection";
import BottomSection from "../Components/BottomSection";



export default function EdaPage(props){
    return(


        <div className={"eda-page"}>

            <div className={"top-section"}>

                <NavBar/>

                <BannerWithTitle/>


            </div>

            <ArtistSection/>

            <MusicSection/>

            <BottomSection/>
        </div>
    )
}