import React from 'react'
import ShowBalance from './showBalance'
import firebase from '../firebase/firebase'
import DataTest from '../testData/dataG.json'
import Transaction from '../component/transaction'

class History extends React.Component{

    state = {
        Income: [],
        Expense: [],
        data: [],
    }

    componentDidMount(){
        this.queryData()
        // this.queryDataTest()
    }

    delDataTest = (e) => {
        let con = window.confirm('Sure to delete?')
        if(con){
            this.setState({
                Income: [],
                Expense: [],
                data: [],
            })
        }
    }

    queryDataTest(){
        var dataList = []
        var incomeList = []
        var expensesList = []
        DataTest.forEach((item)=>{
            dataList.push(item)
            if(item.amount > 0){
                incomeList.push(item.amount)
            }else{
                expensesList.push(item.amount)
            }
        })
        this.setState({
            Income: incomeList,
            Expense: expensesList,
            data: dataList,
        })
    }

    delData = (e) => {
        let con = window.confirm('Sure to delete?')
        if(con){
            var db = firebase.firestore()
            this.state.data.forEach((item)=>{
                db.collection("history").doc(item.id).delete().then(()=>{
                    console.log(`${item.id} successfully deleted !!!`)
                }).catch(function(error) {
                    console.error("Error removing document: ", error);
                })
            })
            this.setState({
                Income: [],
                Expense: [],
                data: [],
            })
        }
    }

    queryData(){
        var db = firebase.firestore()
        db.collection("history").orderBy("date").onSnapshot(querySnapshot => {
            var incomeList = []
            var expensesList = []
            var dataList = []
            querySnapshot.forEach((doc)=>{
                let dataQ = doc.data()
                dataQ["id"] = doc.id
                dataList.push(dataQ)
                let amount = Number(doc.data().amount)
                if(amount > 0){
                    incomeList.push(amount)
                }else{
                    expensesList.push(amount)
                }
            })
            this.setState({
                Income: incomeList,
                Expense: expensesList,
                data: dataList,
            })
        })
    }

    showLog = ()=>{
        console.log(this.state.data)
    }

    render(){
        return (
            <div className="History">
                <ShowBalance income={this.state.Income.reduce((a,b) => a + b, 0)} expense={this.state.Expense.reduce((a,b) => a + b, 0)}/>
                <table align="center" className="table">
                    <tbody>
                        <tr>
                            <td style={{textAlign: "center", fontSize: "200%", paddingBlockEnd: "3%"}}>
                                <span style={{opacity: 0.8}}>Transaction History</span>
                            </td>
                        </tr>
                        <tr style={{paddingBlockEnd: "3%"}}>
                            <td>
                                <table className="table is-striped is-fullwidth" align="center">
                                    <thead>
                                        <tr>
                                            <th style={{opacity: 0.8}}>Name</th>
                                            <th style={{opacity: 0.8}}>Amount</th>
                                            <th style={{opacity: 0.8}}>Type</th>
                                            <th colSpan="2" style={{opacity: 0.8}}>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyData">
                                        {
                                            this.state.data.map((item) => 
                                            (<Transaction transaction={item} key={item.id}/>)
                                            )
                                        }
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <button type="button" className="button is-fullwidth is-danger" style={{display: "block", width: "100%"}} onClick={this.delData}>Clear History</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            )
    }
}

export default History