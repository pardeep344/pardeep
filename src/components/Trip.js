import "./Tripstyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"
function Trip(){
return(
    <>
    <div className="trip">
        <h1>recent trip</h1>
        <p>You can discover unique
        detinations using Google Maps.</p>
     
    <div className="tripcard">
    <TripData
    image={Trip1}
    heading="Trip in indonesia"
    text="Indonesia is known for its diverse tourist attractions. 
    The country has an endless list of wonderful tourist places,
    from beaches and volcanoes to temples and museums.
    You can visit Mount Rinjani, Kuta Beach,
    Campuhan Ridge Walk,
    Sanur Beach, Saraswati,
    Borobudur temples, and much more."
/>

<TripData
    image={Trip2}
    heading="Koh Chang Beach"
    text="Any local will tell you what makes it special is the spectacular beaches and terrific resorts.
     Koh Chang is loved by visitors for many reasons, and is routinely on national best of lists, including U.S. News Best Places to Visit in Thailand. Ko Chang is one of the largest islands in the Gulf of Thailand."
/>

<TripData
    image={Trip3}
    heading="Cartagena La Heroica"
    text="Cartagena became the first Colombian city to declare its independence from Spain, setting in motion the movement to gain freedom for the entire nation.
     This brave act earned Cartagena its nickname of La Heroica (the Heroic City), and is celebrated throughout the month of November."
/>
</div>
    </div>
    </>
);
}

export default Trip;