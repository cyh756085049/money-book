import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MonthPicker from './components/MonthPicker'
import ViewTab from './components/ViewTab';
import { LIST_VIEW, parseToYearAndMonth } from './Const'
import Home from './containers/Home'
import Create from './containers/Create'
import { parseToYearAndMonth } from './Const'
// import PriceList from './components/PriceList'
const items = [
    {
        "id": "1",
        "title": "去云南旅游",
        "price": 200,
        "date": "2020-01-11",
        "category": {
            "id": "1",
            "name": "旅游",
            "type": "income",
            "iconName": "ios-plane"
        }
    },
    {
        "id": "2",
        "title": "去云南旅游",
        "price": 400,
        "date": "2020-01-14",
        "category": {
            "id": "1",
            "name": "旅游",
            "type": "outcome",
            "iconName": "ios-plane"
        }
    }
]

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: {},
            categories: {},
            currentDate: parseToYearAndMonth()
        }
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container pb-5">
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/create" component={Create}></Route>
                        <Route path="/edit/:id" component={Create}></Route>
                    </div>
                {/* <Home></Home> */}
      
                {/* 月份选择器
                <MonthPicker 
                year={2020} 
                month={8}
                onChange={(year, month) => {console.log(year, month)}}
                ></MonthPicker>           */}
                
                {/* Tab 切换
                <ViewTab 
                activeTab={LIST_VIEW}
                onTabChange={(view) => {console.log(view)}}
                ></ViewTab> */}

                {/* 记账列表
                <PriceList
                    items={items}
                    onModifyItem={(item)=>{alert(item.id)}}
                    onDeleteItem={(item)=>{alert(item.id)}}
                ></PriceList> */}
                </div>  
            </Router>
        )
    }
}

export default App;
