import { features } from "../constants";
import styles, { layout } from "../style";
import Button1 from "./Button1";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        피클볼이 무엇이냐고요? <br className="sm:block hidden" /> 저희와 함께 가시죠!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        피클볼은 현재 미국에서 폭발적으로 대유행하고 있는 최고 인기 스포츠입니다. 
        이 스포츠는 탁구와 테니스의 재미있는 조합으로, 작은 코트에서 패들과 공을 사용하여 즐기는 놀라운 경험을 제공합니다. 
        친구들과 함께 활동하며 즐거움을 누릴 수 있으며, 건강을 챙기면서 즐겁게 시간을 보낼 수 있는 완벽한 선택입니다. 
      </p>

      <a href="https://www.youtube.com/watch?v=JMwKyO4-WYU" target="_blank">
        <Button1 styles={`mt-10`} />
      </a>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
