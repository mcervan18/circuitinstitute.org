const text = `

## Background:

As neural imaging techniques and image processing capabilities have improved, so has our ability to analyze the brain. We are able to interrogate large volumes of the brain at scales ranging from millimeter to nanometer resolution, with a variety of methods including MRI, PET/CT, array tomography, CLARITY, and serial section electron microscopy. This has resulted in a deluge of data available for analysis to answer questions that have puzzled humans for centuries.

Computational neuroscience has enabled these efforts to unfold and expand over the last few decades with large-scale projects (e.g., the Human Brain Project, the Human Connectome Project, BRAIN initiative efforts) underway that will revolutionize the way we do brain research. Currently, the community is working to image petabytes (tissue volume of 1 cubic millimeter ) of electron microscopy data and reconstruct large brain maps. As a result, we will have the ability to investigate the underlying network structure of these neuronal circuits, toward unlocking the capability of new, intelligent machine learning algorithms.

These datasets enable the identification of individual neurons, their synaptic connections and other key features. This will provide information about brain structure, function, and insight on pathologies. Manually tracing these datasets, although the most accurate method, is a monumental effort that would take years to analyze for even a small section of cortex. This approach is infeasible for the larger (petascale) sized volumes being explored in this effort. Therefore, we are currently using computer vision and machine learning to train computers 'to see' and automate the process of reconstructing these brain maps, called connectomes.
It is critical to analyze the resulting network estimates to understand their accuracy, so that we can use the underlying information to understand more about intelligence. To support this work, we are looking for talented students to participate in high-impact, cutting-edge research to proofread these putative networks and assess their quality.
 
## Program Information:

Where: The Johns Hopkins University (JHU) and Johns Hopkins University Applied Physics Laboratory (JHU/APL)  
When: June 1, 2018 - May 31, 2019

Students are invited to apply for a research experience that actively supports high resolution brain-mapping, as well as enhances their research skills through hands-on data exploration, staff mentorship, and problem-solving. Students will be responsible for a critical role in evaluating electron microscopy-based brain graphs and creating ground truth. Students will also have the opportunity to participate in seminars, workshops, and research efforts throughout the institute. Some skills that students may obtain are experience with data analytics, coding, scientific communication, developing independent research questions, contributing to abstracts and papers and more!

Compensation has not been finalized, but we plan to provide a $6,000 stipend for the core summer program and an additional $2,000 student stipend (and research credit) for each of the fall and spring terms.  Following the summer work, the school year work will consist of a hybrid model of independent study, and project meetings at JHU/APL. Students are responsible for their transportation, but we will help with carpooling coordination and your stipend will be sufficient to cover these expenses.

At the end of the full-time portion, students will present their findings to JHU/APL staff. After the the full-time portion is completed, students will transition into their part-time work. Part-time responsibilities will consist of 15 hours of work per week and will be two pronged: ground-truthing electron microscopy data and independent research. Exceptional performers may be provided with additional opportunities and pathways for internships or full-time positions.  Students are required to commit to the entire year program; a final decision on school year participation will be made based on summer performance.

## Who Should Apply?

All students affiliated with Johns Hopkins University are invited to apply! Students do not need a background in neuroscience, computer science, or engineering. However, students should be able to demonstrate a commitment to science and inquiry in their application. Examples of majors include but are not limited to: Chemical and Biomolecular Engineering, Biomedical Engineering, Computer Science, Computer Engineering, Mechanical Engineering, Electrical Engineering, Neuroscience, Biology, Molecular and Cellular Biology, and Applied Mathematics & Statistics. There is not a minimum GPA requirement to apply.

Students must be affiliated with JHU throughout Spring 2018 - Spring 2019.  In our past program session, most applicants were sophomores and juniors, although we welcome freshmen and graduate students.

We are also looking for a few students able to serve as teaching assistants or Javascript/React developers; if you are interested in these roles, please fill out the application and indicate in your essays.

We especially encourage applications from trailblazing students. We define trailblazers as high-achieving students from underserved backgrounds (e.g., first generation students, low-income backgrounds), women in STEM, other students who are underrepresented in STEM fields, and those who may not have previously had an opportunity for a research experience. Our program will provide training and mentoring to support students in the broader research community.

Our positions will be filled on a rolling basis, so please apply early!!

## Timeline

-	March 12th: Application OPENS
-	March 19th: Interviews begin
-	March 23rd: Priority Deadline (applications after this point are accepted on a space available basis; applications received by this date are considered equally)
-	Early April: Acceptance letters are sent electronically (tentative)
-	April - May: Orientation sessions
-	June XX: Full-time CIRCUIT - TBD before you accept an offer
-	August XX:  End of full-time CIRCUIT; present findings at JHU/APL
-	August XX - May 31st: part-time effort

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
