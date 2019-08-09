import React from 'react';

import store from './store';
import { Provider } from 'react-redux';

import Title from './components/UI/Title';
import UrlBox from './containers/UrlBox';
import Aux from './hoc/Aux/Aux';
import ImageDisplay from './containers/ImageDisplay';


class ScreenLoop extends React.Component {

    render() {
        const currentInterval = this.props.currentInterval;
        console.log("Current Interval: " + currentInterval);
        return (
            <Aux>
                <div className="App">
                    <div className="jumbotron jumbotron-fluid" style={{ marginTop: "100px" }}>
                        <div className="container">
                            {/* Add Provider */}
                            <Provider store={store}>
                                <Title
                                    headerTitle="Screen Loop"
                                    comments="A list of pages to be looped."
                                />
                                <UrlBox />
                                <ImageDisplay />
                            </Provider>
                        </div>
                    </div>
                </div>

            </Aux>
        )

    }
}

export default ScreenLoop;