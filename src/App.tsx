import React from 'react';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({message}) => {
  return <div>{message}</div>;
};

// propsのデフォルト値を決定する
App.defaultProps = {
  message: 'Hello, defaultProps!',
}

export default App;
