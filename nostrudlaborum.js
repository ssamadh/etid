   let start = Date.now();

   setTimeout(() => {
       let end = Date.now();
       let duration = end - start;
       console.log(`Duration: ${duration} milliseconds`); // Outputs the duration in milliseconds
   }, 2000); // Waits for 2 seconds
   