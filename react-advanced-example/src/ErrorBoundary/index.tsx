import React, { useState, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children; 
  }
}
export { ErrorBoundary };

// ===================================== //
const ErrorBoundaryExampleApp: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  if (counter === 5) {
    throw new Error("Oops, You triggered Doomsday!");
  }

  const countUntilDoom = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={countUntilDoom}>Click on</button>
      <h2>{counter}</h2>
    </div>
  );
};

export default ErrorBoundaryExampleApp;
