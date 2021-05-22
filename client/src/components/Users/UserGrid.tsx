import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridValueFormatterParams } from '@material-ui/data-grid';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import './style.css';
import { useEffect, useState } from 'react';
import API from '../../utils/API';

const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nickName', headerName: 'Preferred Name', width: 130 },
  { field: 'Name', headerName: 'Name', width: 130 },
  {field: 'Status', headerName: 'Age', width: 90, },
  {field: 'location', headerName: 'Location', width: 160},
  {field: 'email', headerName: 'email', width: 160},
  {field: 'phone', headerName: 'phone', width: 160},
];

const rows = [
  { id: 1, nickName: 'Snow', Name: 'Jon', Status: 35, location: 'Boston', email:"imakemusic@gmail.com", phone:"728-9302-6281"},
  { id: 2, nickName: 'Snow', Name: 'Jon', Status: 35, location: 'Boston', email:"imakemusic@gmail.com", phone:"728-9302-6281"},
  { id: 3, nickName: 'Snow', Name: 'Jon', Status: 35, location: 'Boston', email:"imakemusic@gmail.com", phone:"728-9302-6281"},
  { id: 4, nickName: 'Snow', Name: 'Jon', Status: 35, location: 'Boston', email:"imakemusic@gmail.com", phone:"728-9302-6281"},
  { id: 5, nickName: 'Snow', Name: 'Jon', Status: 35, location: 'Boston', email:"imakemusic@gmail.com", phone:"728-9302-6281"},
  { id: 6, nickName: 'Snow', Name: 'Jon', Status: 35, location: 'Boston', email:"imakemusic@gmail.com", phone:"728-9302-6281"},
  { id: 7, nickName: 'Snow', Name: 'Jon', Status: 35, location: 'Boston', email:"imakemusic@gmail.com", phone:"728-9302-6281"},
];

export interface UserI {
  nickName: string,
  firstName: string,
  lastName: string,
  intentionStatus: string,
  location: string,
  email: string,
  phone: string,
  blurb: string,
}


export default function UserGrid() {
  const [users, setUsers] = useState<UserI[]>([])
  let columns: GridColDef[] = [
    { 
      valueFormatter: (params: GridValueFormatterParams) => { 
       const id = params.value
       return id
      },
      field: 'Nick Name', 
      headerName: 'nick name',
      width: 130 
    },
    { 
      // valueFormatter: (params: GridValueFormatterParams) => { 
      //   console.log(params)
      //   const name = params.value as NameI
      //   // "as InterfaceName" casts the above
        
      //   return name.first + " " + name.last
      // },
      field: 'Name', 
      headerName: 'Name',
      width: 150 
    },
    { 
      valueFormatter: (params: GridValueFormatterParams) => { 
        const cell = params.value 
        return cell
      },
      field: 'Cell', 
      headerName: 'Cell',
      width: 150 
    },
    { 
      valueFormatter: (params: GridValueFormatterParams) => { 
        const email = params.value 
        return email
      },
      field: 'Email', 
      headerName: 'Email',
      width: 250
    },
    { 
      valueFormatter: (params: GridValueFormatterParams) => { 
        const city = params.value 
        return city
      },
      field: 'City', 
      headerName: 'City',
      width: 200 
    },
    { 
      valueFormatter: (params: GridValueFormatterParams) => { 
        const location = params.value 
        return location
      },
      field: 'State', 
      headerName: 'State',
      width: 200 
    },
    // { 
    //   valueFormatter: (params: GridValueFormatterParams) => { 
    //     const dob = params.value 
    //     return dob
    //   },
    //   field: 'dob', 
    //   headerName: 'dob',
    //   width: 200 
    // },
    { 
      valueFormatter: (params: GridValueFormatterParams) => { 
        const picture = params.value 
        return picture
      },
      field: 'picture', 
      headerName: 'picture',
      width: 120
    },
  ]
  const dbUsers = (data: any[]) => {
    const userUser: UserI[] = data.map((dbUser) => {
        return {
            nickName: dbUser.nickName,
            firstName: dbUser.firstName,
            lastName: dbUser.lastName,
            intentionStatus: dbUser.intentionStatus,
            location: dbUser.location,
            email: dbUser.email,
            phone: dbUser.phone,
            blurb: dbUser.blurb
        }
    })
    setUsers(userUser)
}

useEffect(() => {
    API.getUsers().then(res => {
        console.log(res.data)
        dbUsers(res.data);
    })
}, [])
  // const classes = useStyles
  return (
    // style={{ height: 600, width: '100%' }}
    <div style={{ paddingTop: 100, height: 600, width: '100%' }}>
      <DataGrid rowHeight={600}rows={rows} columns={columns} pageSize={1}  />
    </div>
  );
}

