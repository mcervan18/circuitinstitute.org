import React, {Component} from 'react';
import { render } from 'react-dom';
import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import Link from 'react-router/lib/Link'
import hashHistory from 'react-router/lib/hashHistory'

// import css from './style.less';

import Homepage from './components/Homepage.jsx';

import About from './components/About.jsx';
import Application from './components/Application.jsx';
import Learn from './components/Learn.jsx';
import Tutorial from './components/Tutorial.jsx';
import SynapseProof from './components/SynapseProof.jsx';
import NeuronProof from './components/NeuronProof.jsx';

import { Grid, Row, Col } from 'react-styled-flexboxgrid';

// import NotFound from './components/NotFound.jsx';


const style = {
    banner: {
        backgroundColor: "rgba(240, 240, 245, 0.7)",
        // backgroundImage: "url(./images/seg_test.jpg)",
        backgroundSize: "cover"
    },
    header: {
        margin: "0 3rem",
        paddingTop: "1em",
        textAlign: "center"
    }
}

class Banner extends Component {
    render() {
        return (
            <Grid fluid style={ style.banner }>
                <Row center="xs">
                    <Col xs={12}>
                        <br />
                        <br />
                        <Link to="/">
                            <img
                                src="/images/full_logo.png"
                                width={"50%"}
                                />
                        </Link>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

class Announcements extends Component {
    render() {
        return (
            <Grid fluid style={{
                backgroundColor: "red",
                color: "white",
                textAlign: "center"
             }}>
                <Row>
                    <Col xs={12}>
                        No announcements right now!
                    </Col>
                </Row>
            </Grid>
        )
    }
}



class MainLayout extends Component {
    render() {
        return (
            <div className="content">
                <Banner />
                { this.props.hasAnnouncements ?
                    <Announcements /> :
                    <br />
                }
                { this.props.children }
            </div>
        );
    }
}


const routes = {
    path: '/',
    component: MainLayout,
    indexRoute: { component: Homepage },
    childRoutes: [
        { path: 'about', component: About },
        { path: 'application', component: Application },
        { path: 'learn', component: Learn },
        { path: 'tutorial', component: Tutorial },
        { path: 'synapseProof', component: SynapseProof },
        { path: 'neuronProof', component: NeuronProof },
    //     { path: '*', component: NotFound },
    ]
}

render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('react-target')
);
