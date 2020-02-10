# Chat App

## 기능

- [x] 사용자는 첫 진입 시, ID를 입력하여 접속할 수 있다.
- [x] 채팅방 리스트에서 채팅방을 선택하여 들어갈 수 있다.
- [ ] 채팅방에 다른 사용자를 초대할 수 있다.
- [x] 사용자는 채팅방에서 텍스트를 입력할 수 있다.
- [ ] 사용자는 채팅방에서 이미지를 입력할 수 있다.



## 기술 스택

- React(with hooks) + TypeScript
- Redux
- Node.js + TypeScript

* Socket.io
* Winston
* bootstrap



## 문제해결 전략

* 프론트는 React + TypeScript, 백앤드는 Node.js + TypeScript로 구성하였으며 Socket.io를 이용하여 실시간 통신을 구현하였습니다.

* DB는 사용하지 않았습니다.



## 빌드방법

GitRepo에는 빌드파일을 올려두었기에 따로 빌드할 필요는 없습니다.

### Server

```shell
cd server
npm install
npm run build
```

### Client

```shell
cd client
npm install
npm run build
```



## 실행방법

따로 install과 build를 할 필요는 없습니다.

### windows

루트폴더에서 실행하시면 됩니다.

```shell
npm run start
```

### mac os

mac os의 경우 `script`를 수정해야합니다.

> 다음과 같이 start script 앞에 `set`을 빼줍니다.

```json
// package.json
 "scripts": {
    "start": "NODE_ENV=production&& node ./server/build/app.js"
  },
```

루트폴더에서 실행시킵니다.

```shell
npm run start
```

---

`http://localhost:5000`에서 확인하실 수 있습니다.