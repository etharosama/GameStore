import styled from 'styled-components'

export const Nav = styled.nav`
  background: var(--orange) ;
  .nav-link{
    color : var(--mainWhite) !important  ;
    font-size: 1.3rem ;
    text-transform: capitalize;
    font-weight: 550;

  }
`

export const Stylebytton = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  background: transparent ;
  border: 1px solid var(--mainWhite) ;
  color : var(--mainWhite) ;
  text-decoration: none;
  border-radius : 2px;
  padding : 0.3rem 0.5rem;
  transition: all 0.5s ease-in-out ;
  &:hover {
    background :var(--mainWhite) ;
    color : var(--darkred)
  }
  &:focus{
    outline: none;
  }
`

export const BodyButton = styled.button`
  text-transform: capitalize;
  font-size: 1.3rem;
  background: transparent ;
  border: 1px solid var(--orange) ;
  color : var(--orange) ;
  border-radius : 5px;
  padding : 0.3rem 0.5rem;
  transition: all 0.5s ease-in-out ;
  margin-rigth: 10px;
  text-decoration: none;
  &:hover {
    background :var(--orange) ;
    color : var(--mainWhite)
  }
  &:focus{
    outline: none;
  }
  &:disabled{
  border: 0px solid ;
  background-color:var(--ligthyellow);
  color : var(--mainWhite)
}
`
export const BodyButton_v2 = styled.button`
  text-transform: capitalize;
  font-size: 1.3rem;
  text-decoration: none;

  background: transparent ;
  border: 1px solid var(--blue) ;
  color : var(--blue) ;
  margin: 10px;
  border-radius : 5px;
  padding : 0.3rem 0.5rem;
  transition: all 0.5s ease-in-out ;
  &:hover {
    background :var(--blue) ;
    color : var(--mainWhite)
  }
  &:focus{
    outline: none;
  }
`
