import React from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';

const VerifyEmailModal = () => {
  const { error, success, loading, verificationEmail } = useAuth();
  const handleVerificationEmail = () => {
    verificationEmail();
  };
  return (
    <div>
      <Modal isOpen={true} hideCloseButton size="2xl" backdrop="blur" isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Lütfen e-posta Adresinizi Doğrulayın</ModalHeader>
          <ModalBody>
            <p>
              Devam etmeden önce, güvenliğiniz ve hesabınızın doğruluğunu sağlamak amacıyla email adresinizi onaylamanız gerekmektedir. Lütfen kayıt olurken kullandığınız email
              adresinizin gelen kutusunu kontrol edin ve email onay linkine tıklayın. Eğer email'i bulamıyorsanız, spam veya gereksiz mailler klasörünüzü kontrol etmeyi unutmayın.
            </p>
            <p>
              Mail'i yeniden göndermek için aşağıdaki "Doğrulama Maili Gönder" butonuna tıklayabilirsiniz. Eğer yardıma ihtiyacınız varsa, lütfen bizimle{' '}
              <Link href="/iletisim" className="text-[#0087ff]">
                iletişim
              </Link>{' '}
              linki üzerinden irtibata geçin.
            </p>
          </ModalBody>
          <ModalFooter className="w-full flex-col gap-4">
            <Button color="success" className="h-12 w-full" isLoading={loading} onPress={handleVerificationEmail}>
              Doğrulama Maili Gönder
            </Button>
            {error && <div className="w-full bg-[red] p-3 rounded-xl text-center">{error}</div>}
            {success && <div className="w-full bg-[green] p-3 rounded-xl text-center">{success}</div>}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default VerifyEmailModal;
