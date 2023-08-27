import { useState, useEffect } from 'react';

function useEnv(variableName) {
  const [variableValue, setVariableValue] = useState(process.env[variableName]);

  useEffect(() => {
    setVariableValue(process.env[variableName]);
  }, [variableName]);

  return variableValue;
}

export default useEnv;
