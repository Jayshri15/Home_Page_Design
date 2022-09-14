// import { ChakraProvider } from '@chakra-ui/react'

// // import { chakra } from "@chakra-ui/react";
// import React from "react";
// import ReactDOM from "react-dom";
// import App from './App';


// ReactDOM.render(
//     <ChakraProvider>
//         <App />
//     </ChakraProvider>

//     , document.getElementById("root")
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <ColorModeScript initialColorMode="light"></ColorModeScript>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
