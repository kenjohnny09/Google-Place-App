import React from 'react'
import { connect } from 'react-redux'
import { TableCell, TableRow} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {showLocation} from '../actions/actionTypes';

class SearchList extends React.Component{

    componentDidMount(){
        //this.props = ;
    }

    handleRowClick(e, coordinates) {
        this.props.showLocation(coordinates);
    }

    render() {
        return (
            this.props.locationList.map((o,i) =>{
                return (
                    <TableRow key={i}>
                        <TableCell>{o.address}</TableCell>
                        <TableCell>{o.coordinates.lat}</TableCell>
                        <TableCell>{o.coordinates.lng}</TableCell>
                        <TableCell><Button variant="contained" color="primary" onClick={(e) => this.handleRowClick(e, o.coordinates)}>Show</Button></TableCell>
                    </TableRow>
                )
            })
        )
    }
    
}

const mapStateToProps = (state) => {
    return {locationList: state.location.locationList};
}

const mapDispatchToProps = {
    showLocation: showLocation
  }

export default connect(mapStateToProps, mapDispatchToProps)(SearchList)