import React from "react";
import Header from "./Components/Headers";
import Formulario from "./Components/Formulario";
import styled from "@emotion/styled";

const Contenedor = styled.div`
max-width:600px;
margin:0 auto;
`;
const ContenedorFormulario=styled.div`
background-color:#ffff;
padding:3rem;

`;

function App() {
   return (
      <Contenedor>
         <Header titulo="Cotizador de vehiculos" />
         <ContenedorFormulario>
          <Formulario/>

         
         </ContenedorFormulario>
      </Contenedor>
   );
}

export default App;
