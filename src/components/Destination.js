import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain8 from "../assets/8.jpg"
import Mountain5 from "../assets/5.jpg"
import"./Destinationstyle.css"
import DestinationData from "./DestinationData"

const Destination = () =>{
 
    return(
        <>
             <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give You the opportunity to see a lot, within a time frame.</p>
            </div>
            <DestinationData 
            classname="first-des"
                heading="Taal Volcano, Batanags"
                text="  one of the most iconic
                view in luzon,Mt.Taal
                boasts a vVolcano
                inside a lake inside an
                island. if you fancy a 
                closer look, the hike
                up to the crater is a mere
                45 mintes, and is easy 
                enough for
                beginners. Guides will
                assist you most of the way,
                and you'll see
                the peculair enviroment
                found on an active volcano,
                including
                volcanic roks and steam
                vents. the hike can beginnersdusty and hot, so
                plan for an early morning
                trip, and them unwid within
                some bulalo
                before heading back home."
                img1={Mountain1}
                 img2={Mountain2}
            />
             <DestinationData 
            classname="first-des-reverse"
                heading="Mt. Daguldul,  Batangas"
                text="  one of the most iconic
                view in luzon,Mt.Taal
                boasts a vVolcano
                inside a lake inside an
                island. if you fancy a 
                closer look, the hike
                up to the crater is a mere
                45 mintes, and is easy 
                enough for
                beginners. Guides will
                assist you most of the way,
                and you'll see
                the peculair enviroment
                found on an active volcano,
                including
                volcanic roks and steam
                vents. the hike can beginnersdusty and hot, so
                plan for an early morning
                trip, and them unwid within
                some bulalo
                before heading back home."
                img1={Mountain8}
                img2={Mountain5}
            />
        </>
       
             
    )

}
export default Destination;