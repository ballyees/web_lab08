import React from 'react'
import firebase from '../firebase/firebase'

class InputExpenses extends React.Component{

    state = {
        transaction: "",
        amount: "",
    }

    updateInput = e =>{
        // console.log(`[${e.target.id}]: ${e.target.value}`)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    setInputNull(params = []) {
        this.setState({
            transaction: "",
            amount: "",
        })
    }

    addTransaction = () =>{ 
        const {transaction, amount} = this.state
        if(transaction!="" && isNaN(transaction)){
            // let amount = Number(document.getElementById("amount").value)
            if(amount==0){
                alert("please enter amount and amount is not zero")
            }else{
                const db = firebase.firestore()
                let c = (amount>0)?"I":"E"
                db.collection("history").add({
                    name: transaction,
                    amount: amount,
                    type: c,
                    date: new Date(),
                }).then(
                    (docRef) => {
                        console.log("Document written with ID: ", docRef.id)
                    }).catch(function(error) {
                        console.error("Error adding document: ", error);
                    });
            }
        }else{
            alert((transaction=="")?"please enter transaction":"transaction not is number")
        }
        this.setInputNull(["transaction", "amount"])
     }
    goAbout = () => { window.location.href += (this.props.hrefOnClick == null)?"about":this.props.hrefOnClick }
    render(){
        return (
            <div className="InputExpenses">
                <table align="center">
                    <tbody>
                        <tr>
                            <td style={{textAlign: "center", paddingBlockEnd: "3%"}}><h1 onClick={this.goAbout} style={{fontSize: "400%", color: "#93e0ed"}}><b>$</b> My Expenses</h1></td>
                        </tr>
                        <tr>
                            <td style={{paddingBlockEnd: "3%"}}>
                                <span style={{opacity: 0.8}}>TransactionName:</span>
                                <br/>
                                <input className="input is-info" type="text" placeholder="Expense detail" id="transaction" onChange={this.updateInput} value={this.state.transaction}></input>
                            </td>
                        </tr>
                        <tr>
                            <td style={{paddingBlockEnd: "3%"}}>
                                <span style={{opacity: 0.8}}>Amount (+:income / -:expense):</span>
                                <br/>
                                <input className="input is-info" type="number" placeholder="0.00" id="amount" onChange={this.updateInput} value={this.state.amount}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" className="button is-info" style={{display: "block", width: "100%"}} onClick={this.addTransaction}>Add Transaction</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default InputExpenses