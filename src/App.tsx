import React from 'react';
import Counter from './Counter'

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

// propsのデフォルト値を決定する
App.defaultProps = {
  message: 'Hello, defaultProps!',
}

export default App;
