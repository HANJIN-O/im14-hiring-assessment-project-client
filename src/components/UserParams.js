import React from 'react'

const UserParams = ({onClick}) => {
  return (
    <>
    <div onClick={() => onClick('profile')}>유저 프로필</div>
    <div onClick={() => onClick('todo')}>투두</div>
    </>
  )
}

export default UserParams
