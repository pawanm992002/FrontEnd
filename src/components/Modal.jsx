import React from 'react'

import {Box, Modal, useMediaQuery} from '@mui/material'


//------------- Create the model component
export const ModalComponent = ({ open, handleClose, content,styles }) => {

const small = useMediaQuery('(max-width:500px)')

    const style = {
      position: 'absolute',
      top: small?'20%':'10%',
      left: small?'10%':'10%',
      width: small?'80%':"80%",
      height: small?'60vh':'80vh',
      overflow:styles?.overflow?styles.overflow:'scroll',
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: '2px 3px 23px black',
      p: 4,
      transition: 'width 2s, height 4s',
      borderRadius: '19px',
      
    };
  
    return (
      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {content}
          </Box>
        </Modal>
      </>
    )
  }
  

export default ModalComponent
