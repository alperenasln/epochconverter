// popup.js

window.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.getElementById('convertButton');
    const epochTimeInput = document.getElementById('epochTimeInput');
    const localTimeResult = document.getElementById('localTimeResult');
    const gmtOffsetText = document.getElementById('gmtOffsetText');
  
    convertButton.addEventListener('click', function() {
      const epochTime = parseInt(epochTimeInput.value, 10);
      const localTime = new Date(epochTime * 1000).toLocaleString();
      const localOffsetHours = -new Date().getTimezoneOffset() / 60;
      const gmtOffset = localOffsetHours >= 0 ? '+' + localOffsetHours : localOffsetHours.toString();
  
      localTimeResult.textContent = 'Local Time: ' + localTime;
      gmtOffsetText.textContent = 'GMT' + gmtOffset;
    });
  });
  