import React from 'react';

import store from './store';
import { Provider } from 'react-redux';

import Title from './components/UI/Title';
import UrlBox from './containers/UrlBox';
import Aux from './hoc/Aux/Aux';
import ImageDisplay from './containers/ImageDisplay';
import Toolbar from './components/Navigation/Toolbar/Toolbar';


class ScreenLoop extends React.Component {
    render() {
        const currentInterval = this.props.currentInterval;
        console.log("Current Interval: " + currentInterval);
        return (
            <Aux>
                <Toolbar />
                    <div className="jumbotron jumbotron-fluid" style={{ marginTop: "0px" }}>
                        <div className="container">
                            {/* Add Provider */}                          
                            <Provider store={store}>                               
                                <Title
                                    headerTitle="Screen Loop"
                                    comments="A list of Images to be looped."
                                />
                                <UrlBox />
                                <ImageDisplay />
                            </Provider>
                        </div>
                    </div>
            </Aux>
        )

    }
}

export default ScreenLoop;