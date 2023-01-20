import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import _ from 'lodash';
import styled from 'styled-components';

//*************  example of use this component*/
/*
thead data should be like 
label: your table head name
value: key with the help of we can get that data

rowData: your data which you pass from apis and in different way. it should be array
*/

const TableComponentStyle = styled.div`
table {
    tr {
        th,td {

        }
        th {
            white-space: nowrap;
        }
    }
}
`;

interface IThead { label: string, value: string | any }

interface ITableComponent {
    theadValues: IThead[];
    rowData: any[];
}

const TableComponent: React.FC<ITableComponent> = ({
    theadValues,
    rowData,
    ...props
}) => {
    return (
        <TableComponentStyle>
            <TableContainer component={'div'} className="table_container">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {_.map(theadValues, ({ label }: IThead, index: number) => (
                                <TableCell align='left' component={'th'} key={"thead" + index}>{label}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {_.map(rowData, (row: any, index: number) => (
                            <TableRow key={"data" + index} >
                                {_.map(theadValues, ({ value }: IThead, index: number) => {
                                    if (value !== "action") {
                                        return <TableCell key={value}>{row[value]}</TableCell>;
                                    } else {
                                        return <TableCell key={"action" + index}>{row[value]}</TableCell>;
                                    }
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableComponentStyle>
    );
}
export default TableComponent;