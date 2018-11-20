const text = `

## Program Information:

Where: Johns Hopkins University (JHU) and Johns Hopkins University Applied Physics Laboratory (JHU/APL)  
When: May 27, 2019 - August 9, 2019

Students are invited to apply for a research experience that enhances their research skills through hands-on data exploration, staff mentorship, and problem-solving. Students will have the opportunity to participate in seminars, workshops, and research efforts throughout the institute. Some skills that students may obtain are experience with data analytics, coding, scientific communication, developing independent research questions, contributing to abstracts and papers and more!

Compensation has not been finalized, but we plan to provide a $6,000 stipend for the core summer program and an additional $2,000 student stipend (and research credit) for each of the fall and spring terms.  Following the summer work, the school year work will consist of a hybrid model of independent study, and project meetings at JHU/APL. Students are responsible for their transportation, but we will help with carpooling coordination and your stipend will be sufficient to cover these expenses.

At the end of the full-time portion, students will present their findings to JHU/APL staff. After the the full-time portion is completed, students will transition into their part-time work. Part-time responsibilities will consist of 15 hours of work per week. Exceptional performers may be provided with additional opportunities and pathways for internships or full-time positions.  Students are encouraged to commit to the entire year program; a final decision on school year participation will be made based on summer performance.

## Who Should Apply?

All students affiliated with Johns Hopkins University are invited to apply! Students do not need a background in computer science or engineering. However, students should be able to demonstrate a commitment to science and inquiry in their application. Examples of majors include but are not limited to: Chemical and Biomolecular Engineering, Biomedical Engineering, Computer Science, Computer Engineering, Mechanical Engineering, Electrical Engineering, Neuroscience, Biology, Molecular and Cellular Biology, and Applied Mathematics & Statistics. There is no minimum GPA requirement to apply.

Students must be affiliated with JHU throughout Spring 2019 - Spring 2020.  In our past program session, most applicants were sophomores and juniors, although we welcome freshmen and graduate students.

We are also looking for a few students able to serve as teaching assistants; if you are interested in this role, please fill out the application and indicate in your essays.

We especially encourage applications from trailblazing students. We define trailblazers as high-achieving students from underserved backgrounds (e.g., first generation students, low-income backgrounds), women in STEM, other students who are underrepresented in STEM fields, and those who may not have previously had an opportunity for a research experience. Our program will provide training and mentoring to support students in the broader research community.

Our positions will be filled on a rolling basis, so please apply early!!

## Timeline

-	November 16th: Application OPENS
-	January 16th: Priority Deadline (applications after this point are accepted on a space available basis; applications received by this date are considered equally)
-	January 23rd: Interviews Begin
-	Early February: Acceptance letters are sent electronically (tentative)
-	February - May: Optional Spring Training 
-	May 27th: Full-time CIRCUIT begins 
-	August 9th: End of full-time CIRCUIT; present findings at JHU/APL
-	September 2 - May 31st: part-time effort

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
