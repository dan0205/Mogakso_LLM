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
