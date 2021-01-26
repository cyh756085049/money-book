import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
// 账目列表
const PriceList = ({items, onModifyItem, onDeleteItem}) => {
    return (
        <ul className="list-group list-group-flush">
            {
            items.map((item) => (
                <li className="list-group-item d-flex 
            justify-content-between align-items-center"
            key={item.id}
          >
              <span className="col-1 badge badge-primary">
                  <Ionicon className="rounded-circle" 
                  fontSize="30px"
                  style={{backgroundColor: '#077bff', padding: '5px'}}
                  color={'#fff'}
                  icon="ios-plane"></Ionicon>
              {item.cid}
              </span>
              <span className="col-5">{item.title}</span>
              <span className="col-2 font-weight-bold">
                  {/* {(item.category.type === 'income') ? '+' : '-'}{item.price}元 */}
                  {item.price}元
              </span>
              <span className="col-2">{item.date}</span>
              <a className="col-1" onClick={() => {onModifyItem(item)}}> 
              {/* 图标 */}
                <Ionicon className="rounded-circle" 
                    fontSize="30px"
                    style={{backgroundColor: '#28a745', padding: '5px'}}
                    color={'#fff'}
                    icon='ios-create-outline'>
                    </Ionicon>
                </a>
              <a className="col-1" onClick={() => {onDeleteItem(item)}}>
                <Ionicon className="rounded-circle" 
                    fontSize="30px"
                    style={{backgroundColor: '#dc3545', padding: '5px'}}
                    color={'#fff'}
                    icon='ios-close'>
                    </Ionicon>
              </a>
          </li>
            ))
            }
        </ul>
    )
}
// 类型检查
PriceList.propTypes = {
    items: PropTypes.array.isRequired,
    onModifyItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired
}
// 类型默认值
PriceList.defaultProps = {
    items: [],
    onModifyItem: () => {}
}
export default PriceList
