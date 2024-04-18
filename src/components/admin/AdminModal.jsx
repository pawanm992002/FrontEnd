import React from 'react'


import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'

const AdminModal = ({ title, children,isOpen,onClose }) => {
    return (
        <>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size={'4xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textTransform={'capitalize'}>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {children}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='pink' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AdminModal
