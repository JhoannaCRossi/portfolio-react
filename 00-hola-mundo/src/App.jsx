import './App.css';
import { useState } from "react";

import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App(){
    const[name, setName] = useState('rossi')

    return(
        <section className="App">
            <TwitterFollowCard 
                userName={name}>
                    Pelipe Yepez
            </TwitterFollowCard>
            <TwitterFollowCard 
                userName='blue'>
                    Sonia Carrillo
            </TwitterFollowCard>
            <TwitterFollowCard>
                    CantaClara Ortiz
            </TwitterFollowCard>
            <button onClick={() => setName('jhoa')}>
                Cambio Nombre
            </button>
        </section>
    )
}