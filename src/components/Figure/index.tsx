import { ImgContainer, Image } from "./style";
import loginAndRegisterImg from "../../img/loginAndRegister.svg";

export const Img = () => {
  return (
    <ImgContainer>
      <Image
        src={loginAndRegisterImg}
        alt="homem cartoonesco com uma flor ao seu lado"
      />
    </ImgContainer>
  );
};
