import React from 'react';
import SearchList from './SearchList';
import { Table, TableHead, TableRow, TableBody, TableCell} from '@material-ui/core';

const HistoryTable = ({courses}) => {
    return(
        <Table className="table-places">
        <TableHead>
            <TableRow>
                <TableCell>Places Searched</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <SearchList />
        </TableBody>
    </Table>
    );
};

export default HistoryTable;