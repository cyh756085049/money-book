import React, { Component } from 'react'
import {padLeft, range} from '../Const'
import PropTypes from 'prop-types'

class MonthPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 点击月份按钮显示隐藏状态
            isOpen: false,
            // 当前选择的年份
            selectedYear: this.props.year
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick, false)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false)
    }

    handleClick = (event) => {
        if(this.node.contains(event.target)) {
            return;
        }
        this.setState({
            isOpen: false
        })
    }
    // 月份下拉框显示隐藏状态改变方法
    toggleDropdown = (event) => {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    // 月份下拉框中的值与当前年份、月份相等时，高亮
    numberActive = (value, current) => {
        return (value === current) ? 'dropdown-item active' : 'dropdown-item';
    }

    // 选择年份修改年份状态
    selectYear = (event, yearNumber) => {
        event.preventDefault();
        this.setState({
            selectedYear: yearNumber
        })
    }

    // 选择月份后，关闭下拉框，将选择的年份和月份通过props传给页面
    selectMonth = (event, monthNumber) => {
        event.preventDefault();
        this.setState({
            isOpen: false
        })
        this.props.onChange(this.state.selectedYear, monthNumber);
    }


    render() {
        const { year, month } = this.props
        // 月份下拉框状态、年份
        const {isOpen, selectedYear} = this.state
        // 月份数组 1~12
        const monthRange = range(12, 1)
        // 年份数组 当前年份-4~当前年份+4
        const yearRange = range(9, -4).map(number => number + year)
        return (
            <div className="dropdown month-picker-component" ref={(ref) => {this.node = ref}}>
                <p>选择月份</p>
                <button 
                className="btn btn-lg btn-secondary dropdown-toggle" 
                onClick={this.toggleDropdown}
                >
                    {`${year}年${padLeft(month)}月`}
                </button>
                {/* 月份下拉框展示列表 */}
                {isOpen && 
                <div className="dropdown-menu" style={{display: 'block'}}>
                    <div className="row">
                        <div className="col border-right">
                            {yearRange.map((yearNumber, index) => 
                                <a key={index} 
                                className="dropdown-item"
                                href="#"
                                className={this.numberActive(yearNumber, selectedYear)}
                                onClick={(event) => {this.selectYear(event, yearNumber)}}
                                >
                                    {yearNumber} 年
                                </a>
                            )}                    
                        </div>
                        <div className="col">
                            {monthRange.map((monthNumber, index) => 
                                <a key={index}
                                className={this.numberActive(monthNumber, month)}
                                onClick={(event) => {this.selectMonth(event, monthNumber)}}
                                >
                                    {padLeft(monthNumber)} 月
                                </a>
                            )}                    
                        </div>
                    </div>
                </div>
                }
            </div>
        )
    }
}
MonthPicker.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}
export default MonthPicker
