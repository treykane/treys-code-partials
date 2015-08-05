// This is an error handler for plumber that does not need gulp-notify
// Call .pipe(plumber(onError))  
// Dependencies: gulp-plumber gulp-util


// Error Handling
var onError = function (err) {  
    var errorString = '[' + gutil.colors.bold.red(err.plugin) + ']'; // Initial build of error
    errorString += ' ' + err.message.replace("\n",''); // Removes new line
  
      if(err.fileName) // If the error contains filename or line number add to string
          errorString += ' in ' + err.fileName;
      if(err.lineNumber)
          errorString += ' on line ' + err.lineNumber;

    console.error(errorString); // Output the error
  
this.emit('end');// Resets Watch Task 
};
