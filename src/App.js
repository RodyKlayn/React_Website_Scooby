import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"
import Content2 from "./Content2"
import Content4 from "./Content4"
import Content5 from "./Content5"
import Content6 from "./Content6"
import Content7 from "./Content7"
import Content8 from "./Content8"
import Content9 from "./Content9"
import Content10 from "./Content10"
import Content11 from "./Content11"
import Content12 from "./Content12"
import Content13 from "./Content13"
import Content14 from "./Content14"
import Content15 from "./Content15"
import Contentgod from "./Contentgod"
import "./App.css"
import scooby1 from "./imagens/SVG/Scooby_01_svg.svg"

  
  const App = () => {    
    return (<div>
    {/* header */}
      <Header name="ScoobyVerse" />
    {/* body */}
        <div class="container">
            <Content scooby1={scooby1} />
            <Content2 />
            <Content4 />
            <Content5 />
            <Content6 />
            <Content7 />
            <Content8 />
            <Content9 />
            <Content10 />
            <Content11 />
            <Content12 />
            <Content13 />
            <Content14 />
            <Content15 />
            <Contentgod />
        </div>
    {/* footer */}
        <Footer text="by Rodrigo." />
    </div>
    );
};

export default App;


