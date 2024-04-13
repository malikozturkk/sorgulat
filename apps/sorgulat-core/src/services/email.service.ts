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
const panelUrl = config.env === 'development' ? "http://localhost:3023" : "http://sorgulat.com/panel"

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} html
 * @returns {Promise}
 */
const sendEmail = async (to: string, subject: string, html: string) => {
  const msg = { from: config.email.from, to, subject, html };
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
  const resetPasswordUrl = `${panelUrl}/sifre-yenileme?token=${token}`;
  const html = `Merhaba,
  Şifrenizi sıfırlamak için şu bağlantıya tıklayın: ${resetPasswordUrl}
  Herhangi bir şifre sıfırlama talebinde bulunmadıysanız bu e-postayı dikkate almayın.`;
  await sendEmail(to, subject, html);
};

/**
 * Send verification email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendVerificationEmail = async (to: string, token: string) => {
  const subject = 'E-posta Adresinizi Doğrulayın';
  const verificationEmailUrl = `${panelUrl}/email-dogrulama?token=${token}`;
  const html = `<!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
      <title>
  
      </title>
      <!--[if !mso]><!-- -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style type="text/css">
          #outlook a {
              padding: 0;
          }
  
          .ReadMsgBody {
              width: 100%;
          }
  
          .ExternalClass {
              width: 100%;
          }
  
          .ExternalClass * {
              line-height: 100%;
          }
  
          body {
              margin: 0;
              padding: 0;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
          }
  
          table,
          td {
              border-collapse: collapse;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
          }
  
          img {
              border: 0;
              height: auto;
              line-height: 100%;
              outline: none;
              text-decoration: none;
              -ms-interpolation-mode: bicubic;
          }
  
          p {
              display: block;
              margin: 13px 0;
          }
      </style>
      <!--[if !mso]><!-->
      <style type="text/css">
          @media only screen and (max-width:480px) {
              @-ms-viewport {
                  width: 320px;
              }
              @viewport {
                  width: 320px;
              }
          }
      </style>
      <!--<![endif]-->
      <!--[if mso]>
          <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
      <!--[if lte mso 11]>
          <style type="text/css">
            .outlook-group-fix { width:100% !important; }
          </style>
          <![endif]-->
  
  
      <style type="text/css">
          @media only screen and (min-width:480px) {
              .mj-column-per-100 {
                  width: 100% !important;
              }
          }
      </style>
  
  
      <style type="text/css">
      </style>
  
  </head>
  
  <body style="background-color:#f9f9f9;">
      <div style="background-color:#f9f9f9;">
          <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
  
  
          <div style="background:#f9f9f9;background-color:#f9f9f9;Margin:0px auto;max-width:600px;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f9f9f9;background-color:#f9f9f9;width:100%;">
                  <tbody>
                      <tr>
                          <td style="border-bottom:#333957 solid 5px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                              <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
          </tr>
        
                    </table>
                  <![endif]-->
                          </td>
                      </tr>
                  </tbody>
              </table>
  
          </div>
  
  
          <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
  
  
          <div style="background:#fff;background-color:#fff;Margin:0px auto;max-width:600px;">
  
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fff;background-color:#fff;width:100%;">
                  <tbody>
                      <tr>
                          <td style="border:#dddddd solid 1px;border-top:0px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                              <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 style="vertical-align:bottom;width:600px;"
              >
            <![endif]-->
  
                              <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
  
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:bottom;" width="100%">
  
                                      <tr>
                                          <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
  
                                              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                  <tbody>
                                                      <tr>
                                                          <td style="width:64px;">
  
                                                              <img height="auto" src="sorgulat.com/logo.png" style="border:0;display:block;outline:none;text-decoration:none;width:100%;" width="64" />
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                          </td>
                                      </tr>
  
                                      <tr>
                                          <td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:40px;word-break:break-word;">
  
                                              <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:32px;font-weight:bold;line-height:1;text-align:center;color:#555;">
                                                  Lütfen E-posta Adresinizi Onaylayın
                                              </div>
  
                                          </td>
                                      </tr>
  
                                      <tr>
                                          <td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:20px;word-break:break-word;">
  
                                              <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:16px;line-height:22px;text-align:center;color:#555;">
                                                  Sorgulat'ı kullanmaya başlamak için lütfen e-posta adresinizi doğrulayın.
                                              </div>
  
                                          </td>
                                      </tr>
  
                                      <tr>
                                          <td align="center" style="font-size:0px;padding:10px 25px;padding-top:30px;padding-bottom:40px;word-break:break-word;">
  
                                              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                                  <tr>
                                                      <td align="center" bgcolor="#2F67F6" role="presentation" style="border:none;border-radius:3px;color:#ffffff;cursor:auto;padding:15px 25px;" valign="middle">
                                                          <a href="${verificationEmailUrl}" target="_blank" style="background:#2F67F6;color:#ffffff;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;">
                                                              E-posta Adresinizi Onaylayın
                                                          </a>
                                                      </td>
                                                  </tr>
                                              </table>
  
                                          </td>
                                      </tr>
  
                                      <tr>
                                          <td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:0;word-break:break-word;">
  
                                              <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:16px;line-height:22px;text-align:center;color:#555;">
                                                  Veya bu bağlantıyı kullanarak doğrulayın:
                                              </div>
  
                                          </td>
                                      </tr>
  
                                      <tr>
                                          <td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:40px;word-break:break-word;">
  
                                              <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:16px;line-height:22px;text-align:center;color:#555;">
                                                  <a href="${verificationEmailUrl}" style="color:#2F67F6">${verificationEmailUrl}</a>
                                              </div>
  
                                          </td>
                                      </tr>
  
                                      <tr>
                                          <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
  
                                              <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:26px;font-weight:bold;line-height:1;text-align:center;color:#555;">
                                                  Yardıma mı ihtiyacınız var?
                                              </div>
  
                                          </td>
                                      </tr>
  
                                      <tr>
                                          <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
  
                                              <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:22px;text-align:center;color:#555;">
                                                  Lütfen geri bildirim veya hata bilgilerini şu adrese gönderin: <br> <a href="mailto:support@sorgulat.com" style="color:#2F67F6">support@sorgulat.com</a>
                                              </div>
  
                                          </td>
                                      </tr>
  
                                  </table>
  
                              </div>
  
                              <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                          </td>
                      </tr>
                  </tbody>
              </table>
  
          </div>
  
  
          <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"
        >
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
  
  
          <div style="Margin:0px auto;max-width:600px;">
  
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                  <tbody>
                      <tr>
                          <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                              <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  
          <tr>
        
              <td
                 style="vertical-align:bottom;width:600px;"
              >
            <![endif]-->
  
                              <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
  
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                      <tbody>
                                          <tr>
                                              <td style="vertical-align:bottom;padding:0;">
  
                                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
  
                                                      <tr>
                                                          <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
  
                                                              <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;font-weight:300;line-height:1;text-align:center;color:#575757;">
                                                                  Sorgulat A.Ş, 34000 Üsküdar. İstanbul 10115, Türkiye
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </table>
  
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
  
                              </div>
  
                              <!--[if mso | IE]>
              </td>
            
          </tr>
        
                    </table>
                  <![endif]-->
                          </td>
                      </tr>
                  </tbody>
              </table>
  
          </div>
  
  
          <!--[if mso | IE]>
            </td>
          </tr>
        </table>
        <![endif]-->
  
  
      </div>
  
  </body>
  
  </html>`;
  await sendEmail(to, subject, html);
};

export default {
  transport,
  sendEmail,
  sendResetPasswordEmail,
  sendVerificationEmail
};
