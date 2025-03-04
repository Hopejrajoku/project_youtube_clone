import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #8a8a8ac5',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px',
       color: '#302f2f',
       borderRadius: "0 40px 40px 0", 
       cursor: "pointer", 
       height: 40, 
       width: 35, 
       margin: 0, 
       border: "1px solid #8a8a8ac5", 
       backgroudColor: "#858484" }} 
       aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
