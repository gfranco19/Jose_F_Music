import React from 'react';
import Jf from '../assets/Jf.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import "./Avatar.css";

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),

    },
}));
function Avatars() {
    const classes = useStyles();
    return (
        <div className="avatar" >
        <Avatar alt="josefranco" src={Jf} className={classes.large} />
        </div>
    )


}
export default Avatars;
