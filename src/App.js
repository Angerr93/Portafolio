import React, {Component} from 'react';
import { CarouselProvider, Slider, Slide, ButtonNext } from 'pure-react-carousel';

import Page1 from './component/page_1';
import Page2 from './component/page_2';
import Page3 from './component/page_3';
import Page4 from './component/page_4';
import './App.css';

class App extends Component{

  offsetWidth() {
    if (window.document.body.offsetWidth < 768) {
      return <span className="touch-guide">Ver Mas</span>
    } else {
      return <span className="touch-guide">Ver Mas</span>
    }
  };
  guideMsg() {
    if (window.document.body.offsetWidth < 768) {
      return <span className="fa fa-exclamation-circle guide-msg" aria-hidden="true"> </span>
    } else {
      return <span className="fa fa-exclamation-circle guide-msg" aria-hidden="true"> Con diseño Responsive</span>
    }
  };
  
  render() {
    return(
    <div className="App">
      <CarouselProvider
          visibleSlides={1}
          orientation="vertical"
          totalSlides={5}
          step={1}
          touchEnabled={false}
        >
          <Slider>
            <Slide index={0}>
              <div className="main">
                  <span className="fa fa-check-circle react-msg" aria-hidden="true"> Pagina hecha con REACT</span>
                  {this.guideMsg()}

                  <div className="container-fluid">
                      <div className='main-content'>
                        <p>Hola Bienvenidos</p>
                        <h1> Este es mi Portafolio <strong> Como Developer </strong>FRONT-END.</h1>
                        <p>
                          {/* <a className="btn btn-dark" href="">GIT</a> */}
                          <a className="btn btn-dark" href="https://www.linkedin.com/in/angelica-ramirez-012480237/" role="button" rel="noreferrer" target="_blank">
                            <span className="fa fa-linkelind" aria-hidden="true"/>
                              &nbsp; Linkelind
                          </a>
                        </p>
                      </div>
                      <ButtonNext className="to-bottom-first">
                        {this.offsetWidth()}
                        <br />
                        <span className="fa fa-angle-double-down" aria-hidden="true"></span>
                      </ButtonNext>

                  </div>
                </div>
            </Slide>

            <Slide index={1}>
              <Page1/>
            </Slide>

            <Slide index={2}>
              <Page2/>
            </Slide>

            <Slide index={3}>
              <Page3/>
            </Slide>

            <Slide index={4}>
              <Page4/>
            </Slide>

          </Slider>
        </CarouselProvider>
        
    </div>
    );
  }
}

export default App;
