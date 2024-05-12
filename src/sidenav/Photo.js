import myimg from "../assets/mypic.jpg"

function Photo() {
    return (
        <div className="photo">
            <img src={myimg} className="mypicture" title="This is me" />
            <div className="name">Pedro Lemos</div>
        </div>
    )
}

export default Photo;