import React from 'react'

import {Box, Modal} from '@mui/material'


//------------- Create the model component
export const ModalComponent = ({ open, handleClose, content }) => {
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: "90%",
      height: '90vh',
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: '2px 3px 23px black',
      p: 4,
      transition: 'width 2s, height 4s',
      borderRadius: '19px'
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
