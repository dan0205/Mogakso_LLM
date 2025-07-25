// 마우스 버튼을 뗄 때 발생하는 'mouseup' 이벤트를 감지
document.addEventListener('mouseup', function(event) {
    // window.getSelection()으로 현재 선택된 텍스트 정보를 가져옴
    // .toString()으로 텍스트 내용만 추출하고, trim()으로 양쪽 공백 제거
    const selectedText = window.getSelection().toString().trim();
  
    // 선택된 텍스트가 있을 경우에만 실행
    if (selectedText.length > 0) {
      console.log('선택된 텍스트:', selectedText); // 확인을 위해 콘텐츠 스크립트에서도 로그 출력
  
      // 백그라운드 스크립트로 메시지 전송
      // chrome.runtime.sendMessage API 사용
      chrome.runtime.sendMessage({ text: selectedText });
    }
  });
  