import { FC } from 'react'
import './NavBar.scss'
export interface NavBarProps {
  principalText?: string
  secondaryText?: string
}

export const NavBar: FC<NavBarProps> = (props: NavBarProps) => {
  return (
    <section className="navbar">
      <div className="navbar__h1">
        <h1 className="navbar__text">{props.principalText}</h1>
      </div>
      <div className="navbar__h2">
        <h2>{props.secondaryText}</h2>
      </div>
    </section>
  )
}
