#### 지난 1편에 이어서 작성해보겠다.

https://vitamin3000.tistory.com/136

 


### 폴더 및 파일 구조
- /public : HTML 호스트 페이지 템플릿 및 아이콘과 같은 기타 정적 파일
- /src
  - /features
    - posts
      - postsSlice.js 
      - postsList.js
      - AddPostForm.js // 추가
  - index.js : 애플리케이션의 진입점 파일로, React-Redux인 <Provider> 구성요소와 메인 <App> 구성 요소를 렌더링
  - App.js : 주요 애플리케이션의 구성 요소, 다른 콘텐츠에 대한 라우팅 처리
  - index.css : 전체 애플리케이션 스타일
  - /api
    - client.js : GET 및 POST 요청을 할 수 있는 작은 AJAX 요청 클라이언트
    - server.js : 데이터에 대한 가짜 REST API 제공
  - /app
    - Navbar.js : 상단 헤더와 탐색 콘텐츠를 렌더링
    - store.js :  Redux Store 인스턴스(객체) 생성
 

### 현재 게시물 목록을 출력하고, 구성 요소를  출력하게 하였다.

 

### 3. 새로운 게시물 만들기
 

#### AddPostForm.js를 만들어, 게시물 제목에 대한 입력과 게시물 본문에 대한 텍스트 영역을 추가한다.

 
```javascript
import React, { useState } from 'react'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button">Save Post</button>
      </form>
    </section>
  )
}
 ```

#### 이렇게 작성된 AddPostForm을 App.js에서 임포트해 추가한다.

 
```javascript
<Route
  exact
  path="/"
  render={() => (
    <React.Fragment>
      <AddPostForm /> // 추가
      <PostsList />
    </React.Fragment>
  )}
/>
 ```

 

### 4. 게시물 항목 추가
#### postsSlice.js에 아래 내용을 추가

 
```javascript
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) { // 현재 state 값과 action값을 인자로
      state.push(action.payload) // 액션 전달
    }
  }
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
 ```

### postAdded에서는 state와 action을 인자값으로 받는다

### 어라? 
#### reducer 함수와 동일하지 않은가?

#### 그렇다 postAdded 리듀서 함수를 작성하면, createSlice를 통해 동일한 이름의 "액션 생성자"함수가 자동으로 생성된다.

 

### 어라? 
### push를 쓰면 원본의 값도 바뀌는데? 를 생각했었는데 홈페이지의 작성된 내용은 다음과 같다.

 

### 어째서.. 안전하다고 하는거지? 난 Immer를 사용하겠다. push 사용안해!
 


### 5. 게시물 추가
#### 현재 텍스트 입력과 게시물 저장 버튼이 있지만, 버튼을 클릭했을 때의 값은 없다.

#### 액션 생성자를 전달하고 사용자가 쓴 제목과 내용이 포함된 새 게시물 객체를 전달하는 postAdded와 클릭 핸들러 AddPostForm을 추가해야 한다.

 

 

#### React에서는 배열을 사용할 때 "key"를 사용하여 구분한다고 배웠다.

 

#### 따라서 게시물 객체에도 id 필드가 존재해야 한다.

#### 이때 Redux Toolkit에서 제공하는 무작위 고유 ID를 생성하는 nanoid를 사용해보고자 한다.

 
```javascript
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

const dispatch = useDispatch()
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
 ```

#### useDispatch함수를 사용하여 액션을 dispatch하여 store에 전달한다.

#### dispatch함수에서 postAdded클릭 핸들러를 호출하여 title과 content의 값을 각져와 useState의 새 ID를 생성하고, 이를 새 post 객체에 넣는다.

 

### 전체 코드는 다음과 같다.

 
```javascript
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      )

      setTitle('')
      setContent('')
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        {/* omit form inputs */}
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}
 ```

### 데이터 흐름 주기를 정리해보자면 ..

 

- useSelector를 통해 초기 게시물 set을 읽어 초기 UI를 렌더링
- postAdded를 통해 새로운 게시물 항목에 대한 데이터가 포함된 작업을 전송
- 게시물 리듀서는 postAdded 작업을 확인하고 새 항목으로 게시물 배열을 업데이트
- Redux 스토어는 UI에 일부 데이터가 변경되었음을 알림
- 게시물 목록은 업데이트된 게시물 배열을 읽고 새 게시물을 표시하기위해 다시 렌더링
 

 

### Redux store는 애플리케이션에서 "golbal"로 간주되는 데이터만 포함해야 한다.
 

 

- useSelector : 저장소에서 데이터를 읽는다
  - 전체 state 객체를 수신하고 값을 다시 반환해야 한다
  - 선택자는 Redux 저장소가 업데이트될 때마다 다시 실행되고 반환하는 데이터가 변경된 경우 구성 요소가 다시 렌더링 된다.
- useDispatch : 저장소를 업데이트 하기 위한 작업을 전송
  - createSlice에 추가하는 각 리듀서에 대해 액션 생성자 함수를 생성
  - dispatch(someActionCreate())을 호출하여 구성요소 작업을 전송
  - 리듀서는 실행되어 이 작업이 관련성이 있는지 확인하고 적절한 경우 새 상태를 반환
  - 폼 입력과 같은 임시 데이터는 React 구성 요소 상태로 유지해야 하고, 사용자가 폼을 완료하면 Redux 작업을 전송하여 스토어를 업데이트한다.