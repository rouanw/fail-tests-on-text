module.exports = (textToFail) => {
  const realConsoleError = console.error;

  console.error = (error) => {
    if (error.toString().indexOf(textToFail) >= 0) { // If it looks like a React warning
      throw new Error(error);
    }
    realConsoleError(error);
  };
  
  return () => {
    console.error = realConsoleError;
  };
};
