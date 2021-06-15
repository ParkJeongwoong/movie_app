# Movie App

> https://ko.reactjs.org/

React JS Fundamentals Course (2019 Update)

노마드 코더 강의 : `ReactJS로 영화 웹 서비스 만들기`



결과물: https://parkjeongwoong.github.io/movie_app/



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



## Component

컴포넌트는 function 형태가 아니라 class 형태로도 사용할 수 있다.

이 때의 형태는 `class App extends React.Component{ }` => React.Component로 부터 상속 (class는 상속이 가능하다는 장점이 있음)

우리는 이 React.Component의 render 메서드를 사용해서 화면에 출력

### class component를 사용하는 이유

<u>class 내부에 state를 사용해서 component에서 사용하는 데이터를 관리할 수 있다</u>



이 때, 함수를 통해 state의 값을 직접 바꾸면 안 된다!

**그리고 react는 render 메서드를 refresh 하지 않음** => `변경된 값을 출력하려면 render를 다시 호출해야 함`

=> 이를 위해 `setState()`를 사용해서 state의 값을 변경

​	이렇게하면 state의 값을 바꾸면서 render를 재호출 가능



### Class Component

```javascript
class App extends React.Component{
  // state : 데이터 보관
  state = {
    count: 0
  }
  // 함수 : setState를 통해 state의 값 변경 & rerender
  add = () => {
    this.setState({count: this.state.count+1})
  }
  minus = () => {
    this.setState(current=>({count: current.count-1})) // 이런 식으로 current를 사용하는 것이 더 나은 방법!!!!!
  }
  // render : 화면 출력
  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}
```



## Function

React Component에서 사용하는 유일한 함수는 render



## Component Life Cycle

> https://ko.reactjs.org/docs/react-component.html#mounting

각 상태에서 다음의 함수를 실행

1. **Mounting**
   - 생성
     - constructor()
     - render()
     - componentDidMount()

2. **Updating**
   - 갱신
     - render()
     - componentDidUpdate()

3. **Unmounting**
   - 제거
     - componentWIllUnmout()



## Fetch

1. fetch()

2. **axios()**

   - 설치: `npm i axios`

   - 사용:

     1. App.js에서 import

     ```javascript
     import axios from "axios"
     ```

     2. axios 요청

     ```javascript
     // GET 요청
     axios.get("주소")
     ```

     3. response data 접근



##  async & await

> 비동기 처리 패턴 문법 중 하나

- 일반적으로 비동기 작업은 `콜백`을 사용해야지 실행순서를 보장 받음

  ```java
  axios.get("주소")
      .then((res)=>{
          console.log(res.data)
          return res.data
      })
  ```

  (이렇게 들여쓰기를 한 콜백을 적어야 데이터를 받아서 사용)

- 위의 코드를 좀 더 <u>직관적으로 바꿔 사용</u>하는 방식이 async & awit

  ```javascript
  async () => {
      res = await axios.get("주소")
      console.log(res.data)
  }
  ```

  `async` : 이 함수는 비동기 함수라는 뜻

  `await` : 이 코드의 실행을 마치고 다음 코드를 진행하라는 뜻 (async 함수 안에서만 동작)





## Cloud에 코드 올리기

1. gh-phages 설치 => GitHub 페이지 도메인에 Static 웹사이트를 나타나게 해 줌

   `npm i gh-pages`

2. package.json 설정

   1. homepage 추가

   ```json
   "homepage": "https://parkjeongwoong.github.io/movie_app/"
   ```

   ```json
   "homepage": "https://{github username}.github.io/{project name}/"
   ```

   2. script에 deploy 추가 (gh-pages를 통해 업로드할 directory를 buil directory로 설정) <= npm run build로 생성되는 폴더

   ```json
   "deploy": "gh-pages -d build",
   ```

   3. script에 deploy 이전에 자동으로 npm run build가 실행되도록 설정

   ```json
   "predeploy": "npm run build"
   ```

3. `npm run deploy` 실행





## React Hook

**`react hook`을 사용하면 state를 사용하기 위해 class component를 사용할 필요가 없다**

