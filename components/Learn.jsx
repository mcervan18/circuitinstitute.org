const text = `
# Hi there!

Here's some text about some stuff.

    def test():
        return "Some code!"
`;


import React, { Component } from 'react';
import marked from 'marked';
import { Row, Col } from 'react-styled-flexboxgrid';


export default class Learn extends Component {
    render() {
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