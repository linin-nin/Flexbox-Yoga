import React, { FunctionComponent } from 'react'
import { useReflow } from '@react-three/flex'
import { Text } from '@react-three/drei'

interface Props {
    bold: boolean,
    anchorX?: 'left',
    anchorY?: 'top',
    textAlign?: 'left',
}

const Text:FunctionComponent<Props> = ({
    bold=false,
    anchorX='left',
    anchorY='top',
    textAlign='left',
    ...props
}) => {
    const reflow = useReflow()
    const font = bold ? '/Inter-Bold.woff' : '/Inter-Regular.woff'
  return (
    <TextImpl
    anchorX={anchorX} 
    anchorY={anchorY} 
    textAlign={textAlign} 
    font={font} 
    onSync={reflow} 
    {...props} 
    
    />
  )
}

export default Text