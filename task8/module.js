const MyModule = (() => {
    const privateMethod = () => {
      console.log("This is a private method.");
    };
  
    const publicMethod = () => {
      console.log("This is a public method.");
      privateMethod();
    };
  
    return {
      publicMethod
    };
  })();
  
  // Usage
  MyModule.publicMethod(); // Calls public and private methods
  