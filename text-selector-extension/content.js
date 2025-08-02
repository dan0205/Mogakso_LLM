document.addEventListener('mouseup', function(event) {
    const selectedText = window.getSelection().toString().trim();
  
    if (selectedText.length > 0) {
      console.log('선택된 텍스트:', selectedText); 
  
      chrome.runtime.sendMessage({ text: selectedText });
    }
  });
  