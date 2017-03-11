const text = `
# CIRCUIT Call for Applications is Open 
`;

import React, { Component } from 'react';
import marked from 'marked';
import { Row, Col } from 'react-styled-flexboxgrid';


export default class Application extends Component {
    render() {
        const html = marked(text);
        return (
            <div>
                <Row around="xs">
                    <Col xs={10}>
                        <div dangerouslySetInnerHTML={{
                            __html: html
                        }}>
                        </div>
                        <iframe src="https://form.jotform.us/70588437308161" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>   
                    </Col>
                </Row>
            </div>
        )
    }
}