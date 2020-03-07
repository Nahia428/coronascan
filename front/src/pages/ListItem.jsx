import React, { Component } from 'react'
import { ListGroupItem } from 'react-bootstrap'

class ListItem extends Component {

    render() {
        const items = this.props.items
        
        return(
            items.map((item)=>{
                return(
                    <div>
                        <ListGroupItem>
                            {item}
                        </ListGroupItem>
                    </div>
                )
            })
        )
    }
}

export default ListItem