
'use client'
import { useState } from 'react'
import styles from './page.module.css'
export default function Page() {
  const [form, setForm] = useState({ email: '', message: '' })
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // ここstringify({form})でもよい？
      body: JSON.stringify({
        email: form.email,
        message: form.message
      }),
    })
      .then((res) => {
        console.log(JSON.stringify({
          email: form.email,
          message: form.message
        }));
        if (res.status === 200) {
          setForm({ email: "", message: "" })
          alert("送信成功しました。")
        } else {
          console.log(`Error: Status Code ${res.status}`);
        }
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
        alert("送信成功しました。")
      });
  }
  return (
    <div className={styles.main}>
      <form>
        <div className={styles.label}>メールアドレス</div>
        <input name="email" type="text" maxLength={100} className={styles.input} value={form.email}
          onChange={(e) => {
            const val = e.currentTarget.value
            setForm((props) => ({
              ...props,
              email: val
            }))
          }}
        />
        <div className={styles.label}>お問い合わせ内容</div>
        <textarea name="message" maxLength={500} rows={5} className={styles.input} value={form.message}
          onChange={(e) => {
            const val = e.currentTarget.value
            setForm((props) => ({
              ...props,
              message: val
            }))
          }}
        />
        <input className={styles.button} type="submit" value="送信"
          onClick={async (e) => {
            await handleSubmit(e)
          }} />
      </form>
    </div>

  )
}