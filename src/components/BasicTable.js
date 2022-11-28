import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable() {
  const [data,setData] = useState([])
  const columns = [
    {field: 'symbol'},
    {field: 'currency_quote'},
  ]
  useEffect(()=>{
    axios.get(`https://api.twelvedata.com/cryptocurrencies`)
    .then(
      (a)=>{
        console.log(a.data)
        setData(a.data.symbol)
      }
    )
    .catch(
      (b)=>{
        console.log(Error)
      }
    )
  },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Stock Name</TableCell>
            <TableCell>Quote</TableCell>
          </TableRow>
        </TableHead>
        {data && columns.map(data=><div>{data}</div>)}
      </Table>
    </TableContainer>
  );
}