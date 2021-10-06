# dictionary_project

## Collect your words
나만의 단어를 모아 사전 만들기

### 기술 스택
- React
- Redux
- styled-components
- Firebase
- AWS S3

### 주요 기능
- 메인 페이지
    - 등록한 단어 카드 보여주기 

- 등록 페이지
    - 단어 카드 등록
        - redux list에 추가
        - list를 firestore에 저장

- 디테일 페이지
    - 해당 단어카드 세부사항 보여주기
        - input 값을 ref 사용하여 받아옴
    - 단어 카드 삭제
        - 파라미터 id와 index를 비교하여 해당 카드 삭제


### 완성 페이지

- 메인 페이지
<img src='https://user-images.githubusercontent.com/50295043/136120921-26c75af6-2b23-4f61-8062-0738eb24507e.png' width='400'>

- 등록 페이지                                                                                                                        
<img src='https://user-images.githubusercontent.com/50295043/136120923-41d6acc2-0086-4937-a826-bc2481f766e5.png' width='400'>

- 상세 페이지
<img src='https://user-images.githubusercontent.com/50295043/136120925-3adb739c-4c5f-4b85-a623-9b4a90b90c53.png' width='400'>
