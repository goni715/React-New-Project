import React, {Component, Fragment} from 'react';

class ErrorPage extends Component {

    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (

             <Fragment>
                 <h1>This is Error PAge</h1>
             </Fragment>
        );
    }
}

export default ErrorPage;