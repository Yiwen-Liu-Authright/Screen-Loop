import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Title from './components/UI/Title';
import Aux from './hoc/Aux/Aux';
import ImageDisplay from './containers/ImageDisplay';
import VideoDisplay from './containers/VideoDisplay';
import PptDisplay from './containers/PptDisplay';
import Toolbar from './components/Navigation/Toolbar/Toolbar';


class ScreenLoop extends React.Component {
    // Test Hello2
    render() {
        const currentInterval = this.props.currentInterval;
        console.log("Current Interval: " + currentInterval);
        return (
            <Aux>
                <Toolbar />
                <Aux>
                    <div className="jumbotron jumbotron-fluid" style={{ marginTop: "0px" }}>
                        <div className="container">
                            {/* Add Provider */}
                            <Provider store={store}>
                                <Title
                                    headerTitle="Screen Loop"
                                    comments="A list of resources to be looped."
                                />
                                <Switch>
                                    <Route path="/Images" exact component={ImageDisplay} />
                                    <Route path="/Videos" component={VideoDisplay} />
                                    <Route path="/PowerPoints" component={PptDisplay} />
                                </Switch>
                            </Provider>
                        </div>
                    </div>
                </Aux>

            </Aux>
        )

    }
}

export default ScreenLoop;