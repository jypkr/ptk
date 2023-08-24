import styles from "../style";
import { discount, pickletimeLogopng, clipart2449509 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> 할인율 적용이 {" "}
            <span className="text-white">한달</span> 동안!
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            새로운 흐름 <br className="sm:block hidden" />{" "}
            <span className="text-gradient">피클타임코리아</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <a href="http://www.naver.com" target="_blank">
              <GetStarted />
            </a>
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          PTK와 피클볼을 즐기다
        </h1>
        <p className={`${styles.paragraph} max-w-[490px] mt-4`}>
        우리의 목표는 피클볼을 통해 사람들의 라이프스타일을 활기차게 만들고, 한국에서 독특하고 화려한 피클볼 문화의 중심이 되는 것입니다. 피클타임코리아와 함께하면 피클볼과 즐거움이 만나는 새로운 세계를 경험하게 될 것입니다.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={clipart2449509} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
