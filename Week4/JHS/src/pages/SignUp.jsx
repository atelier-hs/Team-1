import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUp.module.scss';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert('가입이 완료되었습니다!');
    navigate('/');
  };

  return (
    <div className={styles.signupPage}>
      <h2 className={styles.title}>회원가입</h2>

      <p className={styles.desc}>
        입력할 때마다 조건을 검사하고, 문제가 있으면 아
        <br />
        래에 메시지를 표시합니다.
      </p>

      <div className={styles.box}>
        <form onSubmit={handleSignup} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="signupId">아이디</label>
            <input
              id="signupId"
              type="text"
              placeholder="영문+숫자 4~20자"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="signupEmail">이메일</label>
            <input
              id="signupEmail"
              type="email"
              placeholder="example@domain.com"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="signupPw">비밀번호</label>
            <input
              id="signupPw"
              type="password"
              placeholder="8자 이상, 영문+숫자"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="signupPwCheck">비밀번호 확인</label>
            <input
              id="signupPwCheck"
              type="password"
              placeholder="비밀번호 다시 입력"
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            가입하기
          </button>
        </form>
      </div>

      <p className={styles.bottomText}>
        이미 계정이 있나요? <Link to="/login">로그인</Link>
      </p>
    </div>
  );
}

export default Signup;