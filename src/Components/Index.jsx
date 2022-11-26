import React from 'react'
import { 
    NavContainer,
    NavElementsLeft,
    Navlink,
    NavWrapper
} from './NavBar'

function Index ()  {
  return (
    
    <NavContainer>
        <NavWrapper>
            <NavElementsLeft>
                <Navlink to="/">
                  Expense Tracker
                </Navlink>
            </NavElementsLeft>
        </NavWrapper>
    </NavContainer>

  )
}

export default Index