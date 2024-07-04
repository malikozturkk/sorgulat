import React from 'react';
import { useCustomerList } from '@/context/CustomerListContext/CustomerListContext';
import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Button } from '@nextui-org/react';

const CustomerListAutoCard = () => {
  const [file, setFile] = React.useState<File | null>(null);
  const { error, success, loading, createCustomerList } = useCustomerList();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
      formData.append('fileName', file.name);
      createCustomerList(formData);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const fileExtension = file.name.split('.').pop();
      if (fileExtension === 'csv') {
        setFile(file);
      } else {
        setFile(null);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      {loading && <p>Yükleniyor...</p>}
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image alt="nextui logo" height={40} radius="sm" src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" width={40} />
          <div className="flex flex-col">
            <p className="text-md">Müşteri Listenizi Tanımlayın</p>
            <p className="text-small text-default-500">{file ? `Seçilen Dosya: ${file.name}` : 'Henüz Dosya Seçilmedi'}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Müşteri Listenizi CSV Formatında Yükleyin Zamandan Tasarruf Edin!</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between gap-3">
              <Button className="p-0 w-36">
                <p className="absolute">Dosya Seçiniz</p>
                <input type="file" accept=".csv" onChange={handleFileChange} className="opacity-0 w-full h-full cursor-pointer" />
              </Button>
              <Button color="primary" type="submit" isLoading={loading}>
                Yükle
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};
export default CustomerListAutoCard;
