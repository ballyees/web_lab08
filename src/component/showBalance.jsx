import React from 'react'
import firebase from '../firebase/firebase'

class ShowBalance extends React.Component{
    render(){
        const total = this.props.income + this.props.expense
        return (
            <div className="ShowBalance">
                <table align="center">
                    <tbody>
                        <tr>
                            <td colSpan="3" style={{textAlign: "center", fontSize: "200%", paddingBlockEnd: "3%"}}>
                                <span style={{opacity: 0.8}}>Your Balance</span>
                                <br/>
                                <span>{(total>0)?"+":(total==0)?"":"-"}฿{total}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table className="table" style={{border: "10px solid white"}}>
                                    <tbody>
                                        <tr>
                                            <td style={{textAlign: "center", fontSize: "200%", paddingBlock: "3%"}}>
                                                <span style={{opacity: 0.9}}>Income</span>
                                                <br/>
                                                <span style={{color: "#1bf560", opacity: 0.8}}>฿{this.props.income}</span>
                                            </td>
                                            <td style={{textAlign: "center", fontSize: "400%", paddingBlock: "5%", color: "whitesmoke"}}>
                                                <span>|</span>
                                            </td>
                                            <td style={{textAlign: "center", fontSize: "200%", paddingBlock: "3%"}}>
                                                <span style={{opacity: 0.9}}>Expense</span>
                                                <br/>
                                                <span style={{color: "#e00b21", opacity: 0.8}}>฿{Math.abs(this.props.expense)}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            )
    }
}

export default ShowBalance