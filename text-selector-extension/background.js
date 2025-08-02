chrome.runtime.onInstalled.addListener(() => {
    console.log('텍스트 선택 감지기 확장 프로그램이 설치되었습니다.');
  });
    
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.text) {
      console.log('콘텐츠 스크립트로부터 받은 텍스트:', request.text);
    }
  });
  