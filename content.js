// content.js

// Function to check if the selected text is a valid Unix time number
function isValidUnixTime(text) {
    const unixTimeRegex = /^\d+$/;
    return unixTimeRegex.test(text);
}

// content.js

// Function to convert Unix time to local time
function convertUnixToLocalTime(unixTime) {
    const epochTime = parseInt(unixTime, 10);
    const localTime = new Date(epochTime * 1000).toLocaleString();
    const localOffsetHours = -new Date().getTimezoneOffset() / 60;
    const gmtOffset = localOffsetHours >= 0 ? '+' + localOffsetHours : localOffsetHours.toString();
    //console.log(localTime);
    return 'Local Time: ' + localTime + ' GMT' + gmtOffset;
}


// Function to handle the double-click event
function handleDoubleClick(event) {
    const selectedText = window.getSelection().toString().trim();
    if (isValidUnixTime(selectedText)) {
        const convertedTime = convertUnixToLocalTime(parseInt(selectedText, 10));
        //alert(convertedTime);
        event.stopPropagation();
        event.preventDefault();
    }
}

// Function to handle the text selection event
function handleTextSelection(event) {
    const selectedText = window.getSelection().toString().trim();
    if (isValidUnixTime(selectedText)) {
        const convertedTime = convertUnixToLocalTime(parseInt(selectedText, 10));
        const tooltip = document.createElement('div');
        tooltip.textContent = convertedTime;
        tooltip.style.position = 'absolute';
        tooltip.style.background = 'rgba(0, 0, 0, 0.8)';
        tooltip.style.color = 'white';
        tooltip.style.padding = '5px';
        tooltip.style.top = event.clientY + 'px';
        tooltip.style.left = event.clientX + 'px';
        tooltip.style.zIndex = '9999';
        tooltip.style.pointerEvents = 'none';
        document.body.appendChild(tooltip);

        setTimeout(function () {
            document.body.removeChild(tooltip);
        }, 3000);
    }
}

// Add event listeners for double-click and text selection
document.addEventListener('dblclick', handleDoubleClick);
document.addEventListener('mouseup', handleTextSelection);
