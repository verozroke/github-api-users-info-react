import React, { useEffect, useState } from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

interface User {
  login: string
}


export function HomePage() {


  const [inputName, setInputName] = useState('')
  let [queryName, setQueryName] = useState('')
  const { data, refetch, isSuccess } =  useSearchUsersQuery(queryName)
  const [user, setUser] = useState({} as User)


  useEffect(() => {
    if(isSuccess) {
      setUser(data.items[0])
    }
  }, [isSuccess, data, user])

  const changeHandler = (e: { target: { value: React.SetStateAction<string> } }) => {
    setInputName(e.target.value)
  }
  const clickHandler = async () => {
    setQueryName(inputName)
    await refetch()
  }
  return (
      <>
        <div className="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
          <label htmlFor="" style={{ fontSize: '24px', fontWeight: '700' }}>Enter name</label>
          <input style={{ border: '1px solid #000', borderRadius: '1em',  padding: '5px 10px'}} type="text" onChange={changeHandler} value={inputName} />
          <button style={{ border: '1px solid #000', borderRadius: '.4em', backgroundColor: '#222222', color: '#fff',  padding: '5px 10px' }} onClick={clickHandler}>Search for the nickname</button>
        </div>
        <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em', justifyContent: 'center' }} >
          { Object.entries(user).map(([key, value]) => {
            return (
              <li><b>{key}</b>: {value}</li>
            )
          }) }
        </ul>
        <div></div>
      </>
    )
}

export default HomePage