import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '6 Dec, 2021',
    'Bogdan',
    '45',
    
  ),
  createData(
    1,
    '5 Dec, 2021',
    'Andriy',
    '40',
    
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', '33', ),
  createData(
    3,
    '3 Dec, 2021',
    'Bogdan',
    '32',
    
  ),
  createData(
    4,
    '15 Mar, 2021',
    'Bruce Springsteen',
    '28',
    
  ),
  createData(
    5,
    '15 Mar, 2021',
    'Bruce Springsteen',
    '23',
    
  ),
  createData(
    6,
    '15 Mar, 2021',
    'Bruce ',
    '22',
    
  ),
  createData(
    7,
    '15 Mar, 2021',
    'Bruce Springsteen',
    '21',
    
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment >
      <h1 style={{textAlign: 'center'}}>Top</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Score</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}