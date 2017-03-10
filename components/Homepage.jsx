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
                <br />
                <br />
                <Row>
                    <Col sm={10} smOffset={1}>
                        <Row>
                            <Col className="gridLink" xs={6} sm={4}>
                                <div
                                    style={{
                                        backgroundImage: 'url(./images/seg_test.jpg)'
                                    }}
                                    className="gridLinkContent">
                                    <Link to="about">About</Link>
                                </div>
                            </Col>
                            <Col className="gridLink" xs={6} sm={4}>
                                <div
                                    style={{
                                        backgroundImage: 'url(./images/seg_test.jpg)'
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
                Footer
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
    }
}