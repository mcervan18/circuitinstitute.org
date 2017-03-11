const text = `

## Background:

As technology has improved, so has our ability to analyze the brain. We are able to interrogate large volumes of the brain at scales ranging from millimeter to nanometer resolution, with a variety of methods including MRI, PET/CT, array tomography, CLARITY, and serial section electron microscopy.  This has resulted in a deluge of data available for analysis to answer questions that have puzzled humans for centuries. 
 
Computational neuroscience has enabled these efforts to unfold and expand over the last few decades, with large-scale projects (e.g., the Human Brain Project, the Human Connectome Project, BRAIN initiative efforts) underway that will revolutionize the way we do brain research. Currently, the community is working to image petabytes (1 mm^3) of electron microscopy data and reconstruct large brain maps.  We will then investigate the underlying network structure of these neuronal circuits, toward unlocking the capability of new, intelligent machine learning algorithms. 
 
These datasets enable the identification of individual neurons, their synaptic connections and other key features. This will provide information about brain structure, function, and insight on pathologies. However, manually tracing this data is a monumental effort that would take years to analyze for even a small section of cortex. This approach is completely infeasible for the larger (petascale) sized volumes being explored in this effort. Therefore, we are currently using computer vision and machine learning to train computers 'to see' and automate the process of reconstructing these brain maps, called connectomes.
 
It is critical to analyze the resulting network estimates to understand their accuracy, so that we can use the underlying information to understand more about intelligence.  To support this work, we are looking for talented students to participate in high-impact, cutting-edge research to proofread these putative networks and assess their quality.
 
## Program Information:

Where: The Johns Hopkins University - Applied Physics Lab (APL)
When: April 1st - July 15th (summer months are spent at APL)
 
Students are invited to apply for a summer research experience that actively supports the ground truthing data process, as well as enhances their research skills through hands-on data exploration, problem solving, mentorship and workshops. Students will be responsible for a critical role in evaluating electron microscopy-based brain graphs and creating ground truth.  Students will have the opportunity to participate in seminars, workshops, and research efforts through the institute. Some skills that students may obtain are experience with data analytics, coding, scientific communication, developing independent research questions, contributing to abstracts and papers and more!
 
This program is offered in collaboration with Johns Hopkins University and the JHU Applied Physics Laboratory.
 
The program provides a $5,000 stipend for living costs as well as preparing students for future opportunities for independent research at Homewood in the fall (if desired).  Applicants should be prepared to commit a portion of their spring semester and summer to the program. The first seven weeks (until finals are complete) will be part-time, as students finish their second semester.  We estimate this commitment at 10 hours per week, but will work with your schedules.  From the end of your final exams (approximately May 18th) until July 15th, students are expected to work full-time on the APL campus. Transportation will be provided at no cost, if necessary (details being finalized). 
 
## Who should apply?

All students affiliated with Johns Hopkins University are invited to apply! Students do not necessarily need a background in neuroscience, computer science, or engineering. However, students should be able to demonstrate a commitment to science and research in their application.  We encourage undergraduate sophomores and juniors to apply.  We are also looking for a few students able to serve as teaching assistants.
 
We encourage applications from students from underserved backgrounds (e.g., first generation students, low-income backgrounds), students who are underrepresented in STEM fields, and/or those who may not have previously had an opportunity for a research experience. The positions will be filled on a rolling basis, so please apply early!!
 
## Timeline

- March 8th: Application is OPEN
- March 13th: Interviews begin
- March 31st: Acceptance letters are sent electronically (tentative).
- April 1st:  Training begins
- May XX (immediately after your last final):  Begin full-time institute!
`;

 
import React, { Component } from 'react';
import marked from 'marked';
import { Row, Col } from 'react-styled-flexboxgrid';



export default class About extends Component {
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