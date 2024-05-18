import { createTransport} from 'nodemailer'
import { NextResponse } from 'next/server'
type MailForm = {
  email: string,
  message: string
}
export async function POST(req: Request, {params}:{params: MailForm})  {
  const transporter = createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  })
  const data = await req.json()
  await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_MAIL_USER,
    to: data.email,
    subject: '以下の内容でお問い合わせを受け付けました',
    text: `
    メールアドレス
    ${data.email}
    
    お問い合わせ内容
    ${data.message}
    `,
  });
  
  return NextResponse.json({
    success: true,
  });
}
