import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import Typed from 'typed.js';

class Page_1 extends Component {
  componentDidMount() {
    const options = {
      strings: [
        "Html, Css, Typescript, Jquery, Bootstrap, Wordpress, Sass, Flutter,"
      ],
      typeSpeed: 50,
      startDelay: 500,
      backSpeed: 100,
      backDelay: 1300,
      loop: true,
      smartBackspace: true
    }
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }
  
  render() {
    return (
      <div className="page_1">
          <ButtonBack className="to-top">
              <span className="fa fa-angle-double-up" aria-hidden="true"></span>
          </ButtonBack>
          <div className="container-fluid">
            <div className="page-2-content">
              <h4 className="page-2-h4">Experiencia en &nbsp;
              <strong id="typed" style={{ whiteSpace: "pre" }} ref={(el) => { this.el = el; }}></strong> aprendiendo cada dia mas <strong></strong>  </h4>
            </div>
          </div>
          <ButtonNext className="to-bottom">
              <span className="fa fa-angle-double-down" aria-hidden="true"></span>
          </ButtonNext>
      </div>
    );
  }
}
  
export default Page_1;