import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"

interface IModal {
    children: React.ReactNode,
    className: string,
    element: string
}

const styles = `
    display: block; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Modal = ({
    children,
    className,
    element,
  }: IModal) => {
    const [container] = useState(() => {
      const el = document.createElement(element)
      el.classList.add(className)
      el.style.cssText = styles;
      return el
    })
  
    useEffect(() => {
        const root = document.getElementById('root');
        root && root.appendChild(container)
      return () => {
        const root = document.getElementById('root');
        root && root.removeChild(container)
      }
    }, [])
  
    return createPortal(children, container)
  }