import { FC, PropsWithChildren } from "react"


export const DarkLayout: FC<PropsWithChildren > = ({ children }) => {
  return (
    <div style={{
      backgroundColor: '#222222',
      borderRadius:'5px',
      padding:'50px'
    }}>
      { children }
    </div>
  )
}
