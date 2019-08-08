import React from 'react';
//import logo from './logo.svg';
import ScreenLoop from './containers/ScreenLoop';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Initial props
const props = {
  optionList: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFEicmlVjxOcfOE_A0quf9A2EPPiN8QWZkIGG1ZLyU1_KagfMG",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EnskTIdRmctYiQbwUKVvInjUfWPk9p3-OOCu-IutovROIT19",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Am1yp6K7oLi_bcVU72ALVwsG_xF9MJsoH9V0a4IKK-8jksLw",
    "http://cms-bucket.ws.126.net/2019/04/02/6b2f4f2690e744b48deb7ee164faee38.jpeg"],
  currentInterval: undefined,
}

// Add Reducer
function reducer() {
  return {...props}
}

// Add Store
const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid" style={{ marginTop: "100px" }}>
        <div className="container">
          {/* Add Provider */}
          <Provider store={store}>
            <ScreenLoop {...props} />
          </Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
