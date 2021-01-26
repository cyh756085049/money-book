import React, { Component } from 'react'
import { categories } from './Home'

export default class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCategory: null
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params
        
    }
    render() {
        const { id } = this.props.match.params
        const { selectedCategory } = this.state
        const filterCategories = Object.keys(categories)
        return (
            <div className="create-page py-3 px-3 rounded mt-3"></div>
        )
    }
}
