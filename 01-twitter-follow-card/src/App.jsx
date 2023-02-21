import './App.css';
import { useState } from "react";
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App(){
    const users= [
        {
            userName: 'Vincetico',
            name:'Vicente Camarra',
            isFollowing: true
        },
        {
            userName: 'Castulo',
            name:'Castulo Gonzalez',
            isFollowing: false
        }, 
        {
            userName: 'Ricky',
            name:'Ricardo Martinez',
            isFollowing: false
        },
        {
            userName: 'Gio',
            name:'Gio Carmona',
            isFollowing: false
        },
        {
            userName: 'Edgar',
            name:'Eguita Ramirez',
            isFollowing: true
        }
    ]
    return(
        <section className="App">
            {users.map(({userName, name, isFollowing}) => {
            return (<TwitterFollowCard
                key={userName} 
                userName={userName} initialIsFallowing={isFollowing}>
                {name}
            </TwitterFollowCard>)
            })}
        </section>
    )
}