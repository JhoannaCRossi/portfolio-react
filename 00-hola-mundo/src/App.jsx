import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App(){
    const formatUserName = (userName) => `@${userName}`;
    return(
        <section className="App">
            {/* <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName='midudev' 
                name="Midu" 
                isFollowing/>
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName='blue' 
                name="Blue" 
                isFollowing={false}/>
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName='gray' 
                name="Gray" 
                isFollowing/> */}
            {/* //practica children */}
            <TwitterFollowCard 
                userName='gray' 
                isFollowing>
                    Pelipe Yepez
            </TwitterFollowCard>
            <TwitterFollowCard 
                userName='blue' 
                isFollowing>
                    Sonia Carrillo
            </TwitterFollowCard>
            <TwitterFollowCard 
                
                isFollowing>
                    CantaClara Ortiz
            </TwitterFollowCard>
        </section>
    )
}