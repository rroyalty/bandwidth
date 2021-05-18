import React from 'react';
import { DataGrid, GridColDef, GridValueFormatterParams, GridValueGetterParams } from '@material-ui/data-grid'
import './style.css';


        const columns: GridColDef[] = [
          // { field: 'id', headerName: 'ID', width: 70 },
          { field: 'photo', headerName: 'Photo', width: 130 },
          { field: 'name', headerName: 'Name', width: 130 },
          { field: 'status', headerName: 'Status', width: 160, },
          { field: 'email', headerName: 'Email', width: 170 },
          { field: 'city', headerName: 'City', width: 130 },
          { field: 'state', headerName: 'State', width: 130 },
          { field: 'instrument', headerName: 'Instrument', width: 150 },
          { field: 'genre', headerName: 'Genre',  width: 150 },
        ];
          
          const rows = [
            { id: 1, photo: 'photo goes here', name: 'Toni Powell', status: 'Available', email: 'snow@gmail.com', city: 'Boston', state: 'Massachusetts', instrument: 'ukelele', genre: 'metal' },
            { id: 2, photo: 'photo goes here', name: 'Jon Hammond', status: 'Not Available', email: 'lanniser@gmail.com', city: 'Long Island', state: 'New York', instrument: 'insane vocals',genre: 'Pop Funk' },
            { id: 3, photo: 'photo goes here', name: 'Ryan Royalty', status: 'Not Available', email: 'lanniser@gmail.com', city: 'Buffalo', state: 'New York', instrument: 'bass', genre: 'Elvis Covers only' },
            { id: 4, photo: 'photo goes here', name: 'Bjorn Yourey', status: 'Available', email: 'snow@gmail.com', city: 'Sacramento', state: 'California',  instrument: 'violin',genre: 'Rock and Roll' },
            { id: 5, photo: 'photo goes here', name: 'Cathy Marchese', status: 'Its complicated', email: 'lanniser@gmail.com', city: 'Des Moines', state: 'Iowa',  instrument: 'banjo',genre: 'Techno' },
            { id: 6, photo: 'photo goes here', name: 'Cersei Lannister', status: 'Looking for bands with benefits', email: 'lanniser@gmail.com', city: 'Chicago', state: 'Illinois', instrument: 'drums', genre: 'metal' },
            
          ];
          
          export default function UserGrid() {
            return (
              <div style={{ height: 600, width: '100%' }}>
                <DataGrid className="bg" rowHeight={150} rows={rows} columns={columns} pageSize={3}  />
              </div>
            );
          }
    

