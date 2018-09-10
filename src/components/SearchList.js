import React from 'react'
import { connect } from 'react-redux'

const SearchList = () =>{
    return (
        this.props.location.map((o,i) =>{
            return (
                <tr key={i}>
                    <td>{o.lat}</td>
                    <td>{o.lng}</td>
                </tr>
            )
        })
    )
}

const mapStateToProps = (state) => {
    return {location: state.location};
}

export default connect(mapStateToProps)(SearchList)