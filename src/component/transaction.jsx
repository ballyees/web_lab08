import React from 'react'
import monthName from '../component/month'

class Transaction extends React.Component{
    render(){
        const {id, name, amount, date } = this.props.transaction
        const t_date = new Date(date.toDate())
        // const t_date = new Date(date)
        const datet = `${t_date.getDate()} ${monthName(t_date.getMonth())} ${t_date.getYear()+1900}`
        return (<tr id={id}>
                    <td>{ name }</td>
                    <td>{ amount }</td>
                    <td>{ amount<0?'expense':'income' }</td>
                    <td>{ `${datet}` }</td>
                    <td className={amount<0?"is-danger":"is-success"}></td>
                </tr>)
    }
}
export default Transaction