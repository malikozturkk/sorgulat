import React from 'react';
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';
import CustomerListForm from '../CustomerListForm';

const CustomerListModal = ({ isOpen, onClose }: any) => {
  return (
    <>
      <Modal size="2xl" backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">Müşteri Ekle</ModalHeader>
              <ModalBody>
                <CustomerListForm />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Kapat
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomerListModal;
