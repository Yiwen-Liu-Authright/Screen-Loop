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
                                    comments="A list of resources to be looped."
                                />
                                <Switch>
                                    <Route path="/Images" exact component={ImageDisplay} />
                                    <Route path="/Videos" component={VideoDisplay} />
                                    <Route path="/PowerPoint" component={PptDisplay} />
                                </Switch>
                            </Provider>
                        </div>
                    </div>
            </Aux>
        )

    }
}

export default ScreenLoop;