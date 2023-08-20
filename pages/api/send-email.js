const nodemailer = require('nodemailer')
const { google } = require('googleapis')
import EmailTemplate from '../../components/EmailTemplate'
import { renderToStaticMarkup } from 'react-dom/server'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  console.log('REACHED HERE')

  const { name, email, subject, phone, message } = req.body

  // console.log('The to is', to)
  // console.log('The sub is', subject)
  // console.log('The text is', text)

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
      user: process.env.MY_EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  })

  const receiverEmailOptions = {
    to: `Sandeep Amarnath <${process.env.MY_EMAIL}>`,
    subject: `[My Portfolio] - ${email} - ${name} - ${subject} ${
      phone && `- ${phone}`
    }`,
    text: message,
  }

  const emailTemplate = <EmailTemplate name={name} />
  const htmlTemplate = renderToStaticMarkup(emailTemplate)

  const senderEmailOptions = {
    to: email,
    subject: `Sandeep Amarnath - Thank You for Contacting Me`,
    html: htmlTemplate,
  }

  try {
    const recieverEmail = await transporter.sendMail(receiverEmailOptions)
    console.log('Email recieved:', recieverEmail.response)
    const senderEmail = await transporter.sendMail(senderEmailOptions)
    console.log('Email sent:', senderEmail.response)
    return res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ error: 'Email sending failed' })
  }
}
