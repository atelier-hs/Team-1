import Header from './components/Header'
import Hero   from './components/Hero'
import About  from './components/About'

const PROFILE = {
  name:  '장현서',
  photo: '/images/profile.png',
  contacts: [
    { icon: '/images/phone.svg',   alt: '전화',   text: '010.5744.1924' },
    { icon: '/images/email.svg',   alt: '이메일', text: 'changhs1227@hansung.ac.kr' },
    { icon: '/images/address.svg', alt: '주소',   text: '서울특별시 노원구 공릉동' },
  ],
  education:  ['한성대학교 AI응용학과', '2024.03 ~ 2026.03'],
  work:       '프론트엔드 개발자',
  skills:     ['html', 'css', 'javascript', 'python'],
  activities: ['멋쟁이 사자처럼 14기'],
}

export default function App() {
  return (
    <>
      <Header />
      <Hero
        name="장현서"
        message="멋있는 개발자가 되고 싶어요!"
      />
      <About profile={PROFILE} />
      <div id="contact" />
    </>
  )
}