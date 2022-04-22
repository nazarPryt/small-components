import React, {useState} from 'react';
import s from './Accordion.module.css'
import {accordionUsersType} from "../App";

type AccordionType = {
    title: string
    users: accordionUsersType[]
}


function Accordion(props: AccordionType) {

    const [openCloseValue, setOpenCloseValue] = useState<boolean>(true)
    const [userValue, setUserValue] = useState(props.title)


    return (
        <div>
            <h1 onClick={() => setOpenCloseValue(!openCloseValue)}>--- {userValue} ---</h1>
            {openCloseValue
                ? <ul className={s.listWrapper}>
                    {props.users.map(el => {
                        const yo = () => {
                            setUserValue(el.name)
                            setOpenCloseValue(false)
                        }
                        return <li key={el.id} className={s.itemWrapper} onClick={yo}>{el.name}</li>
                    })
                    }
                </ul>
                : ''
            }</div>
    );
}

export default Accordion;