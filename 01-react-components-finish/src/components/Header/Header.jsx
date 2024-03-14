import { useState, useEffect } from 'react';
import logo from '/logo-name.png'
import { styled } from 'styled-components'
// import './Header.css'

const HeaderContainer = styled.header`

  max-width: 850px;
  margin: 0 auto;
  padding: 1rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`

export default function Header() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  
  return (
    <HeaderContainer>
        <img src={logo} alt="Result" />
      <span>current time {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
