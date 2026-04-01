import styles from '../styles/Hobby.module.scss'

export default function Hobby() {
  return (
    <section className={styles.hobbySection} id="hobby">
      <h2 className={styles.sectionTitle}>HOBBY</h2>

      <div className={styles.hobbyGrid}>

        <div className={styles.hobbyCard}>
          <div className={styles.hobbyHeader}><span>넷플릭스 보기</span></div>
          <div className={styles.hobbyImgWrap} />
        </div>

        <div className={styles.hobbyCard}>
          <div className={styles.hobbyHeader}><span>잠자기</span></div>
          <div className={styles.hobbyImgWrap} />
        </div>

        <div className={styles.hobbyCard}>
          <div className={styles.hobbyHeader}><span>맛집 탐방</span></div>
          <div className={styles.hobbyImgWrap} />
        </div>

      </div>
    </section>
  )
}