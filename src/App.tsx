import React from 'react';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <div>
      <CounterWithReducer />
    </div>
  );
};

// propsのデフォルト値を決定する
App.defaultProps = {
  message: 'Hello, defaultProps!',
}

export default App;
