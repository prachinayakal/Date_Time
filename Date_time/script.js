function showTime() {
    const Parent = document.getElementById('parentID');
    const timeDisplay = document.getElementById('timeDisplay');
  
    function updateDateTime() {
      const currentDate = new Date(); // get the current date and time
      const formattedDateTime = currentDate.toLocaleString(); // convert to user-readable format
      timeDisplay.textContent = formattedDateTime; // display date and time
    }
  
    // Update date and time continuously using setInterval every second (1000 milliseconds)
    setInterval(() => {
      updateDateTime();
    }, 1000);
  
    updateDateTime(); // Display date and time immediately when the function is invoked
  }
  
  // Invoke the showTime() function to start displaying the date and time
  showTime();
  