async function loadMathModule() {
    try {
      
      const mathUtils = await import('./mathUtils.js');
  
      
      
      const sum = mathUtils.add(5, 3);
      const difference = mathUtils.subtract(10, 7);
  
      console.log('Sum:', sum); // Sum: 8
      console.log('Difference:', difference); // Difference: 3
    } catch (error) {
      console.error('Failed to load module:', error);
    }
  }
  

  console.log('Before dynamic import');
  loadMathModule();
  console.log('After dynamic import');
  