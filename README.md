# Movie App

React JS Fundamentals Course (2019 Update)

노마드 코더 강의 : `ReactJS로 영화 웹 서비스 만들기`



## 프로젝트 준비

- create react app 을 하면 webpack과 babel이 모두 설치가 된 상태로 project가 생성된다.

**`npx create-react-app appname`**



## 프로젝트 실행

- 프로젝트 실행 명령어

**`npm start`**



## SRC

이 부분의 내용들을 조작할 예정. 기본부터 배우기 위해 대부분 지울 것
(App.js와 index.js의 일부 내용, logo.svg, index.css, app.test.js, app.css 등 제거) => 최종적으로 **App.js**와 **index.js**만 남음



## React의 동작

React는 소스코드의 처음부터 HTML을 넣지 않음 => 따라서 빈 HTML을 먼저 받게 되고 이후에 JS에 따라 내용을 채워 넣기 때문에 속도가 빠름

=> 이 때문에 <u>소스코드에는 내용이 나타나지 않음!</u>



## Uniqueness of elemet

React에서 모든 element는 유일성을 가져야 한다 (이 유일성은 List 안에 넣을 때 사라진다)

=> 이 때문에 List 내부의 객체에는 각 객체의 유일성을 보증할 `id`값이 있어야 하고, 이 id값을 prop에서 `key`형태로 내려보내야 한다. [`key={elelment.id}`]



## prop types

설치 : `npm i prop-types`

역할 : 전달 받은 props 가 원하는 props인지 확인하는 것

> 이렇게 설치된 패키지는 `package.json`에 추가가 된다

사용 : 

1. App.js에서 import

```javascript
import PropTypes from "prop-types"
```

2. `Component.propTypes` 형태로 필요한 형식을 지정

```javascript
Component.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.string, // 이렇게 하면 undefined도 허용
}
```

3. 이 때 에러는 console 창에 나타난다. (동작에는 아무 문제 X)