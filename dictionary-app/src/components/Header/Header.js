import React from 'react';
import './Header.css';
import {TextField,createTheme, ThemeProvider} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import categories from '../../data/category';


const Header = ({category, setCategory, word, setWord, LightMode}) => {

    const darkTheme = createTheme({
        palette: {
            primary:{
                main:LightMode ? "#000" : "#fff"
            },
          mode:LightMode ? "light" : "dark",
        },
      });

      const handleChange = (language)=>{
        setCategory(language);
        setWord("");
      }

  return (
    <div className="header">
        <span className="title">{word ? word : "Dictionary Hunt"}</span>
        <div className="inputs">
            <ThemeProvider theme={darkTheme}>
            <TextField 
            className="search" 
            label="Search a Word" 
            value={word} onChange={(e) => setWord(e.target.value)} 
            id="standard-basic"  
            variant="standard" />
            
            <TextField
            className="select"
            select
            label="Language"
            value={category}
            onChange={(e)=>handleChange(e.target.value)}
            variant="standard"
        >
            {
                categories.map((option)=>(
                    <MenuItem key={option.label} value={option.label}>
                        {option.value}
                    </MenuItem>
                ))
            }
          
            
         
        </TextField>
            </ThemeProvider>
        
        </div>
    </div>
  )
}

export default Header