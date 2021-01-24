import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MonthPicker from './components/MonthPicker'
import ViewTab from './components/ViewTab';
import { LIST_VIEW } from './Const'
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
    render() {
        return (
            <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      
      {/* 月份选择器 */}
      <MonthPicker 
      year={2020} 
      month={8}
      onChange={(year, month) => {console.log(year, month)}}
      ></MonthPicker>          
      
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
        )
    }
}

export default App;
