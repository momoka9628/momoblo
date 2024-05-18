// import { NextResponse } from 'next/server'
// import jwt from 'jsonwebtoken'
// const SECRET = 'your-secret-key'

// export default async function POST(req: Request) {
//   const { username, password } = await req.json()

//   // 本来はデータベースなどでユーザーの認証を行いますが、
//   // ここでは簡単化のために固定のユーザー名とパスワードを使用しています。
//   if (username === 'user' && password === 'password') {
//     const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' })
//     NextResponse.json({ token, status: 200 })
//   } else {
//     NextResponse.json({ error: 'Invalid credentials', status: 500 })
//   }
// }