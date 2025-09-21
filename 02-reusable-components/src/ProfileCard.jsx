function ProfileCard ({title, handle, image, description}){
    console.log(title, handle);
    return(
        <div className="Card">
            <div className="Card-image">
                <figure className="image is-1by1">
                    <img src = {image} alt= "pda logo" />
                </figure>

            </div>

            <div className="Card-content">
                <div className="media">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;