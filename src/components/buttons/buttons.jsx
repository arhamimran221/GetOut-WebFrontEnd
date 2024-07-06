import React from 'react'
import {Button, styled} from '@mui/material'
const Buttons = (props) => {
    const StyledButton = styled(Button)`
    background-color: var(--orange);
    &:hover {
        background-color: var(--orange);
      }
    
    `
    return (
        <>
            <StyledButton sx={props.styles} variant='contained'  
                onClick={props.method}
            >{props.children}</StyledButton>
        </>
    )
}

export default Buttons
