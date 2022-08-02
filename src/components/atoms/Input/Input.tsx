import React, { FC, InputHTMLAttributes } from 'react'
import './input.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  labelMessage?: string
}

export const Input: FC<InputProps> = (props: InputProps) => {
  const className = props.className ? props.className : 'input'
  return (
    <>
      <label htmlFor={props.id}>{props.labelMessage}</label>
      <input className={className} {...props} />
      <span>{props.errorMessage}</span>
    </>
  )
}
