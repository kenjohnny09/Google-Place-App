import React from 'react'
import { connect } from 'react-redux'

class SearchList extends React.Component{

    componentDidMount(){
        //this.props = ;
    }

    render() {
        return (
            this.props.locationList.map((o,i) =>{
                return (
                    <tr key={i}>
                        <td>{o.lat}</td>
                        <td>{o.lng}</td>
                    </tr>
                )
            })
        )
    }
    
}

const mapStateToProps = (state) => {
    return {locationList: state.location.locationList};
}


export default connect(mapStateToProps)(SearchList)