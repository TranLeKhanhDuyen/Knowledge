const handleException = (errorMessage: string): never => {
  throw Error(errorMessage);
};

function infiniteLoop(): never {
  while (true) {
    console.log("This loop will never end!");
  }
}

infiniteLoop();
