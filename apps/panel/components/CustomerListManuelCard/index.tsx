import React from 'react';
import CustomerListModal from '@/components/CustomerListModal';
import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Button, useDisclosure } from '@nextui-org/react';

const CustomerListManuelCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };
  return (
    <>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image alt="nextui logo" height={40} radius="sm" src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" width={40} />
          <div className="flex flex-col">
            <p className="text-md">Müşteri Listenizi Tanımlayın</p>
            <p className="text-small text-default-500">Veri Girmek İçin Lütfen Formu Doldurun</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>İstediğiniz Verileri Manuel Girerek Kontrolü Sağlayın!</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <div className="w-full">
            <Button color="primary" fullWidth type="submit" onPress={() => handleOpen()}>
              Müşteri Ekle
            </Button>
          </div>
        </CardFooter>
      </Card>
      <CustomerListModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
export default CustomerListManuelCard;
