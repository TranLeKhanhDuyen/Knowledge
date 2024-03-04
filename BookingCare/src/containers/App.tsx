import React, { Component, Fragment } from 'react';

interface AppProps {
  persistor: any; // Add the correct type for persistor
  onBeforeLift?: () => void; // Add the correct type for onBeforeLift
  isLoggedIn: boolean;
}

interface AppState {
  bootstrapped: boolean;
}

class App extends Component {
}



export default App;
