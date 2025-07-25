// 확장 프로그램이 처음 설치될 때 한번 실행됩니다.
chrome.runtime.onInstalled.addListener(() => {
    console.log('텍스트 선택 감지기 확장 프로그램이 설치되었습니다.');
  });
  
  // 콘텐츠 스크립트로부터 메시지를 수신하기 위한 리스너 추가
  // chrome.runtime.onMessage.addListener API 사용
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // 메시지 객체(request)에 우리가 보낸 'text'가 있는지 확인
    if (request.text) {
      // 수신한 텍스트를 백그라운드의 콘솔에 출력
      console.log('콘텐츠 스크립트로부터 받은 텍스트:', request.text);
    }
  });
  