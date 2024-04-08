import nodemailer from 'nodemailer';
import config from '../config/config';
import logger from '../config/logger';

const transport = nodemailer.createTransport(config.email.smtp);
/* istanbul ignore next */
if (config.env !== 'test') {
  transport
    .verify()
    .then(() => logger.info('E-posta sunucusuna bağlanıldı'))
    .catch(() =>
      logger.warn(
        'E-posta sunucusuna bağlanılamıyor. .env de SMTP seçeneklerini yapılandırdığınızdan emin olun.'
      )
    );
}

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendEmail = async (to: string, subject: string, text: string) => {
  const msg = { from: config.email.from, to, subject, text };
  await transport.sendMail(msg);
};

/**
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendResetPasswordEmail = async (to: string, token: string) => {
  const subject = 'Şifre Yenileme';
  // bu url panel app'inin şifre sıfılama sayfasına giden url olacak
  const resetPasswordUrl = `http://sorgulat.com/reset-password?token=${token}`;
  const text = `Merhaba,
  Şifrenizi sıfırlamak için şu bağlantıya tıklayın: ${resetPasswordUrl}
  Herhangi bir şifre sıfırlama talebinde bulunmadıysanız bu e-postayı dikkate almayın.`;
  await sendEmail(to, subject, text);
};

/**
 * Send verification email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendVerificationEmail = async (to: string, token: string) => {
  const subject = 'E-posta Doğrulama';
  // replace this url with the link to the email verification page of your front-end app
  const verificationEmailUrl = `http://link-to-app/verify-email?token=${token}`;
  const text = `Merhaba,
  E-postanızı doğrulamak için şu bağlantıya tıklayın: ${verificationEmailUrl}`;
  await sendEmail(to, subject, text);
};

export default {
  transport,
  sendEmail,
  sendResetPasswordEmail,
  sendVerificationEmail
};
