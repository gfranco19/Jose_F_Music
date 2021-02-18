import React from 'react';
import Containers from '../components/Container';
import Bible from '../assets/bible.jpg';
import Grid from '@material-ui/core/Grid';
import "./Header.css";
function Header () {
    
    return (
        <div>
            <Grid item xs ={12} >
            <Containers 
            class='headerImg'
            image ={Bible}
            imgName="bible"
            tittle="Bienvenidos"
            font="headerFont"
            />
            </Grid>

        </div>
    );
}

export default Header;