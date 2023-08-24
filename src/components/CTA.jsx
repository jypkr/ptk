import styles from "../style";
import Button2 from "./Button2";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>PTK 패들을 지금 구입해보세요!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        울트라빠쑝 초고급 패들을 한번 경험해보세요! 스핀 빵빵하게 들어가고 리시브 지리고
        서브는 아무도 못 받게 하는 개쩌는 패들입니다.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href="http://www.naver.com" target="_blank">
        <Button2 />
      </a>
    </div>
  </section>
);

export default CTA;
