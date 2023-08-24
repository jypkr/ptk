import { card } from "../assets";
import styles, { layout } from "../style";
import Button2 from "./Button2";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        PTK 패들 중에서 본인에게 <br className="sm:block hidden" /> 가장 잘 맞는
        패들을 골라보세요.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        저희 패들은 모든 이들에게 맞게 이것 저것 저것 이것 스핀 드라이브 종류별로 다 있어유~ 한번
        쳐보시면 딱 알아유. 진짜 한번 쳐보시고 골라보세요.
      </p>

      <a href="http://www.naver.com" target="_blank">
        <Button2 styles={`mt-10`} />
      </a>
    </div>

    <div className={layout.sectionImg}>
      {/* <img src={card} alt="billing" className="w-[100%] h-[100%]" /> */}
    </div>
  </section>
);

export default CardDeal;
