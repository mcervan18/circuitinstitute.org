const text = `

# Learn about connectomics

On this page, we will provide some information to help you learn about the emerging field of brain mapping. 
We will start with some information about why brains are so cool!

Let's start with a short introduction to connectomics. This video was created by the publication Nature and features 
data and analysis created by Dr. Davi Bock under the tutelage of Dr. Clay Reid while at Harvard University.


[![vid1](https://img.youtube.com/vi/dS_ONoUrptg/0.jpg)](https://www.youtube.com/watch?v=dS_ONoUrptg)

This video, recently released by National Geographic, gives an interesting and artistic introduction to connectomics. 
It features one of our collaborators, Dr. Jeff Lichtman, and many of his lab members.


[![vid2](https://img.youtube.com/vi/nvXuq9jRWKE/0.jpg)](https://www.youtube.com/watch?v=nvXuq9jRWKE)

Next Dr. Jeff Lichtman, the Jeremy R. Knowles Professor of Molecular and Cellular Biology and Santiago Ramón y Cajal 
Professor of Arts and Sciences at Harvard University, speaks about his lab's connectomics research in greater detail.


[![vid3](https://img.youtube.com/vi/F37kuXObIBU/0.jpg)](https://www.youtube.com/watch?v=F37kuXObIBU)

Finally Dr. Sebastian Seung, Professor of Computational Neuroscience at MIT, waxes poetically about connectomics.


[![vid4](https://img.youtube.com/vi/HA7GwKXfJB0/0.jpg)](https://www.youtube.com/watch?v=HA7GwKXfJB0)

# Lots more coming soon!
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