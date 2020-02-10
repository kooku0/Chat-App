import React, { ChangeEvent, FormEvent, useState } from 'react'
import useLogin from '../../hooks/useLogin'

import './style.scss'

function Signin({ history }: any) {
  const { onLogin } = useLogin()
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onLogin(value)
    setValue('')
    history.push('/room-list')
  }
  return (
    <>
      {/* <TopBar /> */}
      <div className="col-md-8 col-xl-6 chat">
        <div className="card container-sm container-sign">
          <form className="form-sign" onSubmit={onSubmit}>
            <h5 className="form-headline">💬 로그인 💌</h5>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="닉네임 입력"
                value={value}
                onChange={onChange}
              />
            </div>
            <button className="btn btn-block btn-primary">로그인 하기</button>
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
