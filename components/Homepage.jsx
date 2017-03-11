import React, { Component } from 'react';
import Link from 'react-router/lib/Link';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import About from './About.jsx';

const style = {
    background: {
        // backgroundColor: "rgba(230, 230, 240, 0.6)",
        backgroundColor: "white",
    },
};


class GridMenu extends Component {
    render() {
        return (
            <div>
                <ol>
                <h3>Connectomics Institute for Reconstructing Cortex:  Understanding Intelligence Together</h3>
                <br />
                CIRCUIT offers Johns Hopkins University students an opportunity to participate in a cutting-edge summer research experience to map the brain at nanoscale resolution, while building skills to make significant contributions to science in a fun, collaborative environment.  Please carefully read the about page to learn more about the institute and the learn page to learn more about connectomics.  

                All students affiliated with Johns Hopkins University (all schools and degree levels) are invited to apply!  Students do not necessarily need a background in neuroscience, computer science, or engineering. However, students should be able to demonstrate an interest in science and research in their application.  We are also looking for a few students able to serve as teaching assistants. 
                <br /><br />

                We especially encourage applications from undergraduate sophomores and juniors, students from underserved backgrounds (e.g., first generation students, low-income backgrounds), students who are underrepresented in STEM fields, and/or those who may not have previously had an opportunity for a research experience. The positions will be filled on a rolling basis, so please apply early!!   
                    5000 dollar stipend provided.​

                Once you are ready, please apply via the apply link below. Applications will be reviewed on a rolling basis, so apply now!  For questions please contact: 
                <br />
                <br />

                <ul>
                  <li>William Gray Roncal, Ph.D. (william.gray.roncal@jhuapl.edu)</li>
                  <li>Marysol Encarnacion (marysol@jhu.edu)</li>
                </ul>
                </ol>
                <br />
                <br />
                <Row>
                    <Col sm={10} smOffset={1}>
                        <Row>
                            <Col className="gridLink" xs={6} sm={4}>
                                <div
                                    style={{
                                        backgroundImage: 'url(./images/synapse_tile.png)'
                                    }}
                                    className="gridLinkContent">
                                    <Link to="about">About</Link>
                                </div>
                            </Col>
                            <Col className="gridLink" xs={6} sm={4}>
                                <div
                                    style={{
                                        backgroundImage: 'url(./images/membrane_tile.jpg)'
                                    }}
                                    className="gridLinkContent">
                                    <Link to="application">Application</Link>
                                </div>
                            </Col>
                            <Col className="gridLink" xs={6} sm={4}>
                                <div
                                    style={{
                                        backgroundImage: 'url(./images/seg_test.jpg)'
                                    }}
                                    className="gridLinkContent">
                                    <Link to="learn">Learn</Link>
                                </div>
                            </Col>
                        </Row>
                        {/*<Row>
                            <Col className="gridLink" xs={6} sm={4}>
                                <div
                                    style={{
                                        backgroundImage: 'url(./images/seg_test.jpg)'
                                    }}
                                    className="gridLinkContent">
                                    <Link to="tutorial">Tutorial</Link>
                                </div>
                            </Col>
                            <Col className="gridLink" xs={6} sm={4}>
                                <div
                                    style={{
                                        backgroundImage: 'url(./images/seg_test.jpg)'
                                    }}
                                    className="gridLinkContent">
                                    <Link to="synapseProof">Synapse Proof</Link>
                                </div>
                            </Col>
                            <Col className="gridLink" xs={6} sm={4}>
                                <div
                                    style={{
                                        backgroundImage: 'url(./images/seg_test.jpg)'
                                    }}
                                    className="gridLinkContent">
                                    <Link to="neuronProof">Neuron Proof</Link>
                                </div>
                            </Col>
                        </Row>*/}
                    </Col>
                </Row>
                <center>(c)2017 The Johns Hopkins University Applied Physics Laboratory.  All Rights Reserved.</center>
            </div>
        );
    }
}


export default class Homepage extends Component {
    render() {
        return (
            <div style={ style.background }>
                <GridMenu />
            </div>
        )
        const html = marked(text);
        return (
            <Row around="xs">
                <Col xs={10}>
                    <div dangerouslySetInnerHTML={{
                        __html: html
                    }}>
                    </div>
                </Col>
            </Row>
        )
    }
}