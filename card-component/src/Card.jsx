import profilePic from "./assets/images/edinburg.jpg"

function Card(){

    return(
        <div className="card">
            <img className="card-image"src= {profilePic} alt="profile picture" />
            <h2 className="card-title">Edinburgh</h2>
            <p>Edinburgh is the capital city of Scotland. It is located in central eastern Scotland, near the Firth of Forth, close to the North Sea. The city is renowned for its history, architecture, scenery and cultural attractions. Edinburgh is often considered one of the most lively cities in Europe, thanks to its spectacular rocks, rustic buildings and a huge collection of medieval and classic architecture, including numerous stone decorations.</p>

        </div>
    );
}

export default Card

