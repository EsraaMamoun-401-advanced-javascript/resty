import React from 'react';

import './style.scss';

import Header from './header/header.js';

import Footer from './footer/footer.js';

import Form from './form/form.js';


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Form />
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;