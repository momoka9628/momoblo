'use client'
import { useRef } from 'react'
import styles from './page.module.css'
export default function Page() {

  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        password: formData.get('password')
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          formRef.current?.reset()
        }
      })
  }
  return (
    <div className={styles.main}>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.label}>お名前</div>
        <input name="name" maxLength={100} className={styles.input} />
        <div className={styles.label}>パスワード</div>
        <input name="password" maxLength={100} className={styles.input} />
        <button className={styles.button} type="submit">ログイン</button>
      </form>
    </div>
  )
}