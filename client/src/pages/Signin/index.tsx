import React, { MouseEvent } from 'react'
import TopBar from '../../components/TopBar'

function Signin() {
  const handleLogin = async (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    try {
    } catch (err) {
      alert('로그인 실패')
    }
  }

  return (
    <>
      <TopBar />
      <div className="container container-sm container-sign">
        <form className="form-sign">
          <h5 className="form-headline">🥕 로그인 🐰</h5>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              // value={authStore.email}
              // onChange={changeEmail}
              placeholder="이메일 입력"
            />
          </div>
          {/* <div className="form-group">
            <input
              type="password"
              className="form-control"
              // value={authStore.password}
              // onChange={changePassword}
              placeholder="비밀번호 입력"
            />
          </div> */}
          <button onClick={handleLogin} className="btn btn-block btn-primary">
            로그인 하기
          </button>

          <h6 className="txt-terms">
            <a href="#">이용약관</a> 및 <a href="#">개인정보</a> 취급방침
          </h6>
        </form>
      </div>
    </>
  )
}

export default Signin
