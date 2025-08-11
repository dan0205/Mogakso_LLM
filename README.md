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

- 먼저, 웹 브라우저 extension 프로그램을 위한 manifest.json 정의하였음
- manifest.json에 필요한 name, version, permissions, content_scripts, background 등의 기초적인 내용이 무엇인지 학습하고 지정함
- 추가로, matches: ["<all_urls>"] 를 사용해 모든 페이지에서 해당 기능을 사용하게 함
- content script에 window.getSelection().toString() 함수를 이용해서 마우스로 드래그한 모든 글자 인식하게 함

### Background Script - 백그라운드에서 동작

- 실제 기능에 대한 브라우저 이벤트를 정의하였음, content script에서 결과를 받으면 콘솔에 보내기
- chrome.runtime.onMessage를 이용해 콘텐츠 스크립트가 보낸 '선택된 텍스트' 메시지를 수신함
- 특정 이벤트가 발생할 때만 활성화되어 코드를 실행하고, 일이 끝나면 비활성화 상태로 전환되어 시스템 자원을 아끼는 로직으로 구현하였음

## 4주차

### 실습 목표

---

- 더미 데이터를 이용해 실제로 작동하는 신조어 extension 프론트엔드 구현

### 실습 내용

---

### 3주차 실습에서 배운 content script 작성하기

- 먼저, 신조어 extension 서비스가 실제로 구현될 때 필요한 세부사항을 정의하였다.
- 웹 사이트에서 드래그를 통해 데이터를 받고, 저장된 신조어가 해당 데이터에 있다면 툴팁을, 없다면 알림을 보내도록 설정하였다.
- 다양한 반응 이미지를 적용해가며 사용자가 가장 편안하고 쉽게 사용할 수 있는 팝업 이미지를 적용하였다.
- 데이터베이스와 연결된 프론트가 아니기 때문에, content script에 const JARGON_DATA = { … } 형태로 목업 데이터를 지정하였다.
- 추후에 데이터베이스와 연결되면, 해당 단어를 데이터베이스와 캐시에서 검색하게 된다.

### docker-compose 파일을 작성하고, docker로 redis와 postgres를 사용

- 서버 단에서 사용될 데이터 구조를 정의하였다.
- 우선 신조어 명칭과 신조어 설명만을 테이블에 담고, extension에서 사용되는 프론트 단과 연결하기 위해 코드를 구현한다.
- redis와 postgres 모두 alpine 버전을 사용하여 성능보다 가벼움 위주로 구현하였다.

## 5주차

### 실습 목표

---

- 서버와 프론트를 연결하고 서비스를 실행한다

### 실습 내용

---

### 목업 프론트를 업그레이드

- 4주차 실습에서 실제로 구현해본 프론트에서 문제점을 정의하였다.
- 드래그가 계속 되어있다면 팝업창을 지워도 반복적으로 나타나고, 팝업창의 x표시로만 제거할 수 있고, 팝업창에 단 하나만의 단어만 표시된다는 문제점을 발견하였다.
- content script에 다양한 js function을 사용하여 다양한 상황에 적합한 예외들을 모두 적용하였다.
- addEventListner를 이용해 팝업창이 뜬 후, 다른 곳을 클릭, 다른 단어를 드래그, x표시를 클릭, 다른 곳을 우클릭 하는 등의 방법으로도 팝업창을 제거할 수 있도록 추가하였다.

### 구현된 서버단을 이용해 프론트 단과 연결

### 1. 내용 스크립트 로드

- manifest.json이 content_simple.js를 모든 페이지에 주입

```json
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content_simple.js"],
      "run_at": "document_idle"
    }
  ],
```

### 2. 내용 스크립트 → 백그라운드

- content_simple.js는 직접 fetch하지 않고 chrome.runtime.sendMessage({ type: "FETCH_JARGON", ... })로 백그라운드에 요청
- background.js가 실제 백엔드로 요청 전송

```jsx
      const API_BASE = "http://127.0.0.1:8000/api/v1"; // 127로 고정
      const url = `${API_BASE}/jargons/interpret/${encodeURIComponent(msg.term)}?context=${encodeURIComponent(msg.context || "")}`;

      log("fetch start", url);
      const controller = new AbortController();
      const t = setTimeout(() => controller.abort(), 10000);

      const res = await fetch(url, { method: "GET", signal: controller.signal });
```

### 3. 백엔드 라우팅

- app/main.py에서 v1 라우터를 /api/v1 프리픽스로 마운트

```python
app.include_router(jargon_router.router, prefix="/api/v1", tags=["Jargons"])
```

- 실제 엔드포인트는 app/api/v1/jargon_router.py의 이 라우트가 처리

```python
@router.options("/jargons/interpret/{term}")
async def options_interpret(term: str):
    # 아무 검증/의존성 없이 프리플라이트에 204 No Content
    return Response(status_code=204)

@router.get("/jargons/interpret/{term}")
async def interpret_jargon(
    term: str,
    context: Optional[str] = None,
    db: AsyncSession = Depends(get_db),
    rds: redis.Redis = Depends(get_redis),
):
```
