import React from "react";
import Col from "../components/Col";
import Containers from "../components/Container";
import Tours from "../pages/Tours";

function News() {
    return(
        <Col 
        gridOne={[
            <Containers 
            class='news'
            font='newsFont'
            tittle='Noticias'
            body=''
            />
        ]}
        gridTwo={[<Tours/>]}
        />
    )
    
}
export default News;