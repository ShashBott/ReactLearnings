import profilePic from "./assets/profile.png"

function Card() {
    return(
        <div className="card">
            <img className="cardImage" src={profilePic} alt="profile picture"></img>
            <h2 className="cardTitle">ShashBot</h2>
            <p className="cardText">I am practising react</p>
        </div>
    );
}

export default Card