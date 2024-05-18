// import { NextReponse } from 'next/server'
// import jwt from 'jsonwebtoken'

// const SECRET = 'your-secret-key'

// export default async function GET(req: Request) {
//   const token = req.headers.authorization?.split(' ')[1]

//   if (!token) {
//     res.status(401).json({ error: 'No token provided' })
//     return
//   }

//   try {
//     const decoded = jwt.verify(token, SECRET)
//     res.status(200).json({ data: 'Protected data', user: decoded })
//   } catch (error) {
//     res.status(401).json({ error: 'Invalid token' })
//   }
// }