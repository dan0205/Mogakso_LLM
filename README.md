## 1주차

### 실습 목표

---

데이터베이스, 캐시, 구글 extension 학습 후 초기 다이어그램 구현

### 실습 내용

---

### 기초 학습

- 다양한 데이터베이스의 기초 특성을 학습 후 postgreSQL이 적합하다고 판단, 해당 db를 기반으로 서버를 구현하고자 계획을 세움
- Redis 학습 및 Redis 캐시를 활용하기로 계획함, 실제 프로그램이 작동될 때 캐시와 db에 어떤 데이터가 들어가야 할지 정리함
- 구글 oauth api가 필요한 경우를 대비해 oauth api 학습
- 구글 extension 개념과 실제 예시를 학습

### 기초 다이어그램 구현

- 만들고자 하는 extension 프로그램을 agile 기법으로 구현할 것이기에 초기 단계의 class diagram, state diagram, usecase diagram을 미리 구현함
- 초기의 usecase 를 기반으로 예상되는 성공 scenario와 실패 scenario를 각각 10개씩 작성
- postgresql과 redis를 활용하는 fastAPI 서버 개발 준비

## 2주차

### 실습 목표

---

- React 기초: 컴포넌트 만들기
- API 호출: 서버에서 데이터 가져오기

### 실습 내용

---

### 컴포넌트

- 컴포넌트 폴더 생성 및 구조 설계
- 함수형 컴포넌트 작성
- 컴포넌트 조합 (조립)
- props를 통한 데이터 전달
- 각각의 컴포넌트 스타일 적용 (선택적)
- 최종적으로 App.js에서 모든 컴포넌트 통합

### API 호출

- 환경 준비 - 컴포넌트 파일을 src/components 폴더에 생성
- useState와 useEffect 준비
- useState 훅으로 데이터와 상태를 저장
- useEffect 훅으로 컴포넌트가 처음 화면에 나타났을 때(API 호출) 로직을 실행
- 실제 데이터 받아오기 (Fetch API 사용)
- App.js에 컴포넌트 연결

### 실습 진행

- node.js 설치
- npm install 및 npm start 명령어를 통해 응답 확인

## 3주차

### 실습 목표

---

- 웹페이지 텍스트 선택 - 사용자가 드래그한 글자 감지

### 실습 내용

---

### Content Script - 웹페이지에 코드 주입

- 웹 브라우저 extension 프로그램을 위한 manifest.json 정의
- manifest.json에 필요한 name, version, permissions, content_scripts, background를 지정
- matches: ["<all_urls>"] 를 사용해 모든 페이지에서 해당 기능을 사용
- window.getSelection().toString() 함수를 이용해 마우스로 드래그한 글자 인식

document.addEventListener('mouseup', function(event) {
    const selectedText = window.getSelection().toString().trim();
  
    if (selectedText.length > 0) {
      console.log('선택된 텍스트:', selectedText); 
  
      chrome.runtime.sendMessage({ text: selectedText });
    }
  });

- 원하는 이벤트에만 반응하고 해당 반응을 백그라운드에 보내는 로직을 구현함

### Background Script - 백그라운드에서 동작

- 실제 기능을 구현되는 브라우저 이벤트를 정의
- chrome.runtime.onMessage를 이용해 콘텐츠 스크립트가 보낸 '선택된 텍스트' 메시지를 수신
- 특정 이벤트가 발생할 때만 활성화되어 코드를 실행하고, 일이 끝나면 비활성화 상태로 전환되어 시스템 자원을 아끼는 로직을 실행
