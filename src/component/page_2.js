import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import '../resource/figma.png'


class Page_2 extends Component {
    render() {
      return (
        <div className="page_2">
            <ButtonBack className="to-top-project">
                <span className="fa fa-angle-double-up" aria-hidden="true"></span>
            </ButtonBack>
            <div className="container-fluid">
              <div className="title-wrapper">
                <h2 className="project-title">AutoDidacta</h2>
                <h4 className="sub-title">Algunos conocimiento adquiridos en Udemy </h4>
              </div>

              <div className="content-wrapper row">
                <div className="col-md-6 video-wrapper">
                  <div className="embed-responsive embed-responsive-16by9 media">
                    <iframe title="project1" src="../resource" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div className="btn-wrapper">
                    <div className="btn-group" role="group" aria-label="button group">
                      <form action="https://github.com/Angerr93" target="_blank">
                        <button type="submit" className="btn btn-info-link btn-outline-secondary">
                          <span className="fa fa-github" aria-hidden="true"></span>
                          &nbsp;Github
                        </button>
                      </form>
                      <button onClick={() => window.open('../resource/figma.png', '_blank')}>[url]</button>
                      <button onClick="window.open('../resource')" className="btn btn-info-link btn-outline-secondary">
                          <span className="fa fa-pencil-square-o" aria-hidden="true"></span>
                          &nbsp;Document
                      </button>
                      <form action="https://www.youtube.com/" target="_blank">
                        <button type="submit" className="btn btn-info-link btn-outline-secondary">
                          <span className="fa fa-youtube-play" aria-hidden="true"></span>
                          &nbsp;Youtube
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <ul className="info">
                    <li className="info-list">
                      <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span>Diseño Web</h5>
                      <p className="content-text-summary fa fa-angle-right" aria-hidden="true"> Con React</p>
                    </li>
                    <li className="info-list">
                      <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span>  FrameWork </h5>
                      <ul className="content-text-wil">
                        <li className="fa fa-check" aria-hidden="true"> Bootstrap</li><br />
                        <li className="fa fa-check" aria-hidden="true"> AntDesign</li><br />
                        <li className="fa fa-check" aria-hidden="true"> MaterialUI</li><br />
                        <li className="fa fa-check" aria-hidden="true"> Foundation </li>
                      </ul>
                    </li>
                    <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> Herramientas</h5>
                    <p className="content-text-stacks fa fa-angle-right" aria-hidden="true"> <code>HTML</code> <code>CSS/SASS</code> <code>JSP</code> <code>NODE.JS</code> <code>Flutter</code> <code>WordPress</code>
                    </p>
                  </ul>
                </div>
              </div>
            </div>
            <ButtonNext className="to-bottom-project">
                <span className="fa fa-angle-double-down" aria-hidden="true"></span>
            </ButtonNext>
        </div>
      );
    }
  }
  
  export default Page_2;