import { ReactNode } from "react";

import './style.css'

interface IProps {
  children: ReactNode,
}

function ExemploComponent(props: IProps) {
  return (
    <>
      <h1>Exemplo de Componente</h1>
    </>
  )
}

export default ExemploComponent;