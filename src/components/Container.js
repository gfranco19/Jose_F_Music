import React from 'react';
import Container from '@material-ui/core/Container';
import "./Container.css";

function Containers (props) {
    return(
        <div>
        <Container className={props.class} maxWidth="xl" >
        {props.misc}
    <h1 className={props.font}>
        {props.tittle}</h1>
        {props.body}
     
        </Container>
        <hr className="Line"/>
        </div>
    );
}
export default Containers;