import React, { ButtonHTMLAttributes } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

const Button:React.FC<IProps> = ({children, ...props}) => {
  return (
    <>
    <button {...props} >
      {children}
    </button>
    </>
  )
}

export default Button