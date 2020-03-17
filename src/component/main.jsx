import React from 'react'
import InputExpenses from './inputExpenses'
import History from './history'
export default function MainPage(){
        return (<div className="main">
                    <InputExpenses hrefOnClick="about"/>
                    <br/>
                    <br/>
                    <History />
                </div>)
}

