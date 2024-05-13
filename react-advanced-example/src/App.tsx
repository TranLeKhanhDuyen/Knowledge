import React from "react";
import ContextExample from "./Context";
import ErrorBoundaryExampleApp, { ErrorBoundary } from "./ErrorBoundary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContextExample />
      <ErrorBoundary>
        <ErrorBoundaryExampleApp />
      </ErrorBoundary>
    </div>
  );
}

export default App;
