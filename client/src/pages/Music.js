import React from 'react';
import Containers from "../components/Container";
import Cards from "../components/Card";



  function Music(props) {
      return (
      <Containers
      class='music'
      font='musicFont'
      tittle='Música'
      body ={[<Cards/>]}
      />
      )
      
  }
  export default Music;