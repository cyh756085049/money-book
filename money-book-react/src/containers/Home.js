import React, { Component } from 'react'
import logo from '../logo.svg';
import MonthPicker from '../components/MonthPicker'
import TotalPrice from '../components/TotalPrice'
import PriceList from '../components/PriceList'
import CreateBtn from '../components/CreateBtn'
import ViewTab from '../components/ViewTab'
import {LIST_VIEW, padLeft, TYPE_INCOME, TYPE_OUTCOME, parseToYearAndMonth} from '../Const'

export const items = [
    {
        "title": "再次更新标题",
        "price": 2000,
        "date": "2018-09-15",
        "monthCategory": "2018-9",
        "id": "_qmatbbwq0",
        "cid": "1",
        "timestamp": 1536969600000
      },
      {
        "title": "新的吃饭",
        "price": 2000,
        "date": "2018-11-15",
        "monthCategory": "2018-11",
        "id": "_qmatbbw11",
        "cid": "2",
        "timestamp": 1542896269187
      }
]
export const categories = {
    "1": {
        "name": "旅行",
        "iconName": "ios-plane",
        "id": "1",
        "type": "outcome"
      },
      "2": {
        "name": "餐饮",
        "iconName": "ios-restaurant",
        "id": "2",
        "type": "outcome"
      },
      "3": {
        "name": "购物",
        "iconName": "ios-basket",
        "id": "3",
        "type": "outcome"
      },
    }


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: items,
            currentDate: parseToYearAndMonth(),
            tabView: LIST_VIEW
        }
    }

    changeView = (view) => {
        this.setState({
            tabView: view
        })
    }

    changeDate = (year, month) => {
        this.setState({
            currentDate: {year, month}
        })
        console.log(year, month)
    }
    
    tabChange = (view) => {
        console.log(view)
    }
    
    createItem = () => {
        const newItem = {
            "title": "新的吃饭",
            "price": 2000,
            "date": "2018-11-15",
            "monthCategory": "2018-11",
            "id": "_qmatbbw11",
            "cid": "2",
            "timestamp": 1542896269187
          }
        this.setState({
            items: [newItem, ...this.state.items]
        })
    }
    
    modifyItem = (modifiedItem) => {
        const modifyItem = this.state.items.map(item => {
            if(item.id === modifiedItem.id) {
                return {...item, titile: '更新后的标题'}
            }else {
                return item
            }
        })
        this.setState({
            items: modifyItem
        })
    }
    
    deleteItem = (deleteItem) => {
        const filteredItems = this.state.items.filter(item => item.id !== deleteItem.id);
        this.setState({
            items: filteredItems
        })
    }

    render() {
        const { items, currentDate, tabView } = this.state
        const itemsWithCategory = items.map(item => {
            item.category = categories[item.cid]
            return item
        }).filter(item => {
            return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
        })
        let totalIncome = 0, totalOutcome = 0;
        itemsWithCategory.forEach(item => {
            if(item.category.type === TYPE_INCOME) {
                totalIncome += item.price
            } else {
                totalOutcome += item.price
            }
        })
        return (
            <React.Fragment>
                <div className="App-header">
                    <div className="row mb-5 justify-content-center">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="row">
                        <div className="col">
                            <MonthPicker 
                            year={currentDate.year}
                            month={currentDate.month}
                            onChange={this.changeDate}></MonthPicker>
                        </div>
                        <div className="col">
                            <TotalPrice 
                            income={totalIncome}
                            outcome={totalOutcome}></TotalPrice>
                        </div>
                    </div>
                </div>
                <ViewTab 
                activeTab={LIST_VIEW}
                onTabChange={this.tabChange}
                ></ViewTab>
                <CreateBtn onClick={this.createItem}></CreateBtn>
                <PriceList 
                items={items}
                categories={categories}
                onModifyItem={this.modifyItem}
                onDeleteItem={this.deleteItem}></PriceList>
            </React.Fragment>
        )
    }
}

export default Home
