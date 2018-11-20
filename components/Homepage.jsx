const text = `

## Cohort-based Integrated Research Community for Undergraduate Innovation and Trailblazing


CIRCUIT offers Johns Hopkins University (JHU) students an opportunity to participate in a cutting-edge research experience, while building skills to make significant contributions to science in a fun, collaborative environment. All students affiliated with JHU (all schools and degree levels) are invited to apply! Please carefully read the <a href="http://circuitinstitute.org/#/about">About page</a> to learn more about the program and the <a href="http://circuitinstitute.org/#/learn">Learn page</a> to read more about our previous work in the field of connectomics. Students do not need a background in computer science or engineering, however, students should be able to demonstrate an interest in science and inquiry in their application. Possible research areas include Artificial Intelligence, Precision Medicine, Connectomics, and Bio-Inspired Robotics.

This program is offered in collaboration with the Hopkins Office of Undergraduate Research (HOUR) at Johns Hopkins University and the <a href="http://www.jhuapl.edu/">Johns Hopkins University Applied Physics Laboratory</a> (JHU/APL).

Program and leadership support will come from APL staff at the Intelligent Systems Center (ISC). <a href="http://www.jhuapl.edu/isc">The ISC</a> is a JHU/APL cross-disciplinary research center spanning machine learning, robotic and autonomous systems and applied neuroscience.

CIRCUIT consists of a cohort-based summer session and a school year session. During the summer, students will dedicate 11 weeks of full-time work at the ISC located on the JHU/APL campus. During the school year session, students will be required to work part-time remotely. The program offers an integrated experience, so both summer and school year participation are highly encouraged. CIRCUIT provides a stipend to help cover living expenses and transportation costs to and from JHU/APL during the summer. During the school year, students are paid a stipend and provided research credit for their work.

Please see the <a href="http://circuitinstitute.org/#/about">About page</a> for more details about the program and application process.  A video from last year's program is available <a href="https://www.youtube.com/watch?v=5u7N0Gq9q3w">here</a>.

We especially encourage applications from trailblazing students. We define trailblazers as high-achieving students from underserved backgrounds (e.g., first generation students, low-income backgrounds), women in STEM, other students who are underrepresented in STEM fields, and those who may not have previously had an opportunity for a research experience. Our program will provide training and mentoring to support students in the broader research community.

Once you are ready, please apply via the apply link below. Applications will be reviewed on a rolling basis, so apply now!  For questions please contact:


- William Gray Roncal, Ph.D. (william.gray.roncal@jhuapl.edu)
- Martha Cervantes (martha.cervantes@jhuapl.edu)
`;


import React, { Component } from 'react';
import marked from 'marked';
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
        const html = marked(text);

        return (
            <div>
                <Row around="xs">
                    <Col xs={10}>
                        <div dangerouslySetInnerHTML={{
                            __html: html
                        }}></div>
                    </Col>
                </Row>

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
                                    <a href="https://research.jhu.edu/hour/internal-programs/circuit/">Application</a>
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
                    </Col>
                </Row>
                <center>&copy; 2018 The Johns Hopkins University Applied Physics Laboratory.  All Rights Reserved.</center>
            </div>
        );
    }
}


export default class Homepage extends Component {
    render() {
        return (
            <div style={style.background}>
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
