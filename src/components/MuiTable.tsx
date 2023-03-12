import React from 'react'
import {TableContainer, Table,TableHead,TableBody,TableRow,TableCell,Paper, Tab} from '@mui/material'



export const MuiTable = () => {
  return (
<TableContainer component={Paper} sx={{maxHeight:'300px'}}>
    <Table aria-label='simple table' stickyHeader>
    <TableHead>
        <TableRow>
            <TableCell>
                Id
            </TableCell>
            <TableCell>
                First name
                </TableCell>
                <TableCell>
                Last name
                </TableCell>
                <TableCell align='center'>
                Email
                </TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {
            tableData.map(row => (
                <TableRow key={row.id} 
                sx ={{'&:last-child td, &:last-child th':{border:0}}}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell align='center'>{row.email}</TableCell>
                </TableRow>
            ))
        }
    </TableBody>
    </Table>
</TableContainer>
  )
}
const tableData =[{
    "id": 1,
    "first_name": "Sinclair",
    "last_name": "Yaakov",
    "email": "syaakov0@smh.com.au",
    "gender": "Male",
    "ip_address": "241.144.193.244"
  }, {
    "id": 2,
    "first_name": "Cathe",
    "last_name": "Bruneton",
    "email": "cbruneton1@netlog.com",
    "gender": "Genderqueer",
    "ip_address": "58.170.189.16"
  }, {
    "id": 3,
    "first_name": "Loralie",
    "last_name": "Trower",
    "email": "ltrower2@e-recht24.de",
    "gender": "Female",
    "ip_address": "188.28.172.238"
  }, {
    "id": 4,
    "first_name": "Raf",
    "last_name": "Weeden",
    "email": "rweeden3@networksolutions.com",
    "gender": "Female",
    "ip_address": "177.28.29.125"
  }, {
    "id": 5,
    "first_name": "Webster",
    "last_name": "Feldberger",
    "email": "wfeldberger4@google.pl",
    "gender": "Male",
    "ip_address": "87.147.40.157"
  }, {
    "id": 6,
    "first_name": "Tully",
    "last_name": "Rosenthaler",
    "email": "trosenthaler5@xinhuanet.com",
    "gender": "Male",
    "ip_address": "138.226.103.11"
  }, {
    "id": 7,
    "first_name": "Fergus",
    "last_name": "Rasch",
    "email": "frasch6@umich.edu",
    "gender": "Agender",
    "ip_address": "149.25.21.9"
  }, {
    "id": 8,
    "first_name": "Lib",
    "last_name": "Simeons",
    "email": "lsimeons7@globo.com",
    "gender": "Female",
    "ip_address": "176.70.140.112"
  }, {
    "id": 9,
    "first_name": "Timmie",
    "last_name": "Gieves",
    "email": "tgieves8@wikia.com",
    "gender": "Female",
    "ip_address": "47.95.147.124"
  }, {
    "id": 10,
    "first_name": "Oran",
    "last_name": "Biaggelli",
    "email": "obiaggelli9@auda.org.au",
    "gender": "Genderqueer",
    "ip_address": "66.156.167.36"
  }];