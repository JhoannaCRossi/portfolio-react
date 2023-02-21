import { useState } from "react";

export function TwitterFollowCard({children, userName = 'unknown', initialIsFallowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFallowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return(
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            className="tw-followCard-avatar"
            alt="El avatar de blue" src={`https://unavatar.io/${userName}`}/>
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUsername">@{userName}</span>
                </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}> 
               
                <span className="tw-followCard-text"> {text}</span>
                <span className="tw-followCard-stopFollow">Dejas de seguir</span>
            </button>
        </aside>
    </article>
    )
}