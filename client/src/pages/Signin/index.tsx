import React, { MouseEvent } from 'react'
// import TopBar from '../../components/TopBar'

import './style.scss'

function Signin({ history }: any) {
  const handleLogin = async (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      history.push('/room-list')
    } catch (err) {
      alert('로그인 실패')
    }
  }

  return (
    <>
      {/* <TopBar /> */}
      <div className="col-md-8 col-xl-6 chat">
        <div className="card container-sm container-sign">
          <form className="form-sign">
            <h5 className="form-headline">💬 로그인 💌</h5>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                // value={authStore.email}
                // onChange={changeEmail}
                placeholder="닉네임 입력"
              />
            </div>
            <button onClick={handleLogin} className="btn btn-block btn-primary">
              로그인 하기
            </button>

            <h6 className="txt-terms">
              <a href="#">이용약관</a> 및 <a href="#">개인정보</a> 취급방침
            </h6>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin
