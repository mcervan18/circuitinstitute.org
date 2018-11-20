const text = `

## Background:

As neural imaging techniques and image processing capabilities have improved, so has our ability to analyze the brain. We are able to interrogate large volumes of the brain at scales ranging from millimeter to nanometer resolution, with a variety of methods including MRI, PET/CT, array tomography, CLARITY, and serial section electron microscopy. This has resulted in a deluge of data available for analysis to answer questions that have puzzled humans for centuries.

Computational neuroscience has enabled these efforts to unfold and expand over the last few decades with large-scale projects (e.g., the Human Brain Project, the Human Connectome Project, BRAIN initiative efforts) underway that will revolutionize the way we do brain research. Currently, the community is working to image petabytes (tissue volume of 1 cubic millimeter ) of electron microscopy data and reconstruct large brain maps. As a result, we will have the ability to investigate the underlying network structure of these neuronal circuits, toward unlocking the capability of new, intelligent machine learning algorithms.

These datasets enable the identification of individual neurons, their synaptic connections and other key features. This will provide information about brain structure, function, and insight on pathologies. Manually tracing these datasets, although the most accurate method, is a monumental effort that would take years to analyze for even a small section of cortex. This approach is infeasible for the larger (petascale) sized volumes being explored in this effort. Therefore, we are currently using computer vision and machine learning to train computers 'to see' and automate the process of reconstructing these brain maps, called connectomes.
It is critical to analyze the resulting network estimates to understand their accuracy, so that we can use the underlying information to understand more about intelligence.

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
