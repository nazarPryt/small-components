import React from 'react';
import './App.css';
import OnOffClicker from "./OnOffClicker/OnOffClicker";
import Accordion from "./Accordion/Accordion";

export type accordionUsersType = {
    name: string
    id: number
}

const accordionUsers: accordionUsersType[] = [
    {name: 'nazar', id: 1},
    {name: 'oleh', id: 2},
    {name: 'bogdan', id: 3},
    {name: 'taras', id: 4},
    {name: 'roman', id: 5}]


function App() {
    return (
        <div className="App">
            <hr/>
            <hr/>
            <hr/>
            <OnOffClicker/>
            <hr/>
            <hr/>
            <hr/>
            <Accordion title={'users'} users={accordionUsers}/>
        </div>
    );
}

export default App;
