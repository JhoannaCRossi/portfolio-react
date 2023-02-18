export function TwitterFollowCard(){
    return(<article className="tw-followCard">
    <header className="tw-followCard-header">
        <img 
        className="tw-followCard-avatar"
        alt="El avatar de blue" src="https://unavatar.io/blue"/>
            <div className="tw-followCard-info">
                <strong>Blue</strong>
                <span className="tw-followCard-infoUsername">@blue</span>
            </div>
    </header>
<aside>
    <button className="tw-followCard-button"> Seguir </button>
</aside>
</article>)
}