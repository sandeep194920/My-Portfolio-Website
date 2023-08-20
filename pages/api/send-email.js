const nodemailer = require('nodemailer')
const { google } = require('googleapis')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  console.log('REACHED HERE')

  const { to, subject, text } = req.body

  // const transporter = nodemailer.createTransport({
  //   service: 'Gmail', // Your email service provider
  //   auth: {
  //     user: 'your-email@gmail.com', // Your email address
  //     pass: 'your-email-password', // Your email password
  //   },
  // })

  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  })

  const accessToken = await oauth2Client.getAccessToken()

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.SENDER_EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  })

  const mailOptions = {
    from: `Sandeep Amarnath <${process.env.SENDER_EMAIL}>`,
    to,
    subject,
    text,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent:', info.response)
    return res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ error: 'Email sending failed' })
  }
}
