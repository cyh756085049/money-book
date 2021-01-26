import React, { Component } from 'react'

export default class PriceForm extends Component {
    render() {
        return (
            <form onSubmit={}>
                <div className="form-group">
                    <label htmlFor="title">标题 *</label>
                    <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="请输入标题"
                    defaultValue={title}></input>
                </div>
            </form>
        )
    }
}
