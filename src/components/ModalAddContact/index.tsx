import { Container, Form } from "./style";
import { ImCross } from "react-icons/im";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { IContact } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { contactSchema } from "../../schema/contactSchema";

interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ setModal }: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({
    resolver: yupResolver(contactSchema),
  });

  const { handlePostContact } = useContext(UserContext);
  return (
    <Container>
      <div>
        <div className="containerTitleButton">
          <h1 className="titleTecnology">Cadastrar Contato</h1>{" "}
          <button onClick={() => setModal(false)} className="crossButton">
            <ImCross />
          </button>
        </div>

        <Form onSubmit={handleSubmit(handlePostContact)}>
          <label htmlFor="fullName">Nome</label>
          <input
            placeholder="Nome do contato"
            id="fullName"
            type="text"
            {...register("fullName")}
          />
          <span>{errors.fullName?.message}</span>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email do contato"
            id="email"
            type="text"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
          <label htmlFor="cellphone">Telefone</label>
          <input
            placeholder="Telefone do contato"
            id="cellphone"
            type="text"
            {...register("cellphone")}
          />
          <span>{errors.cellphone?.message}</span>

          <button type="submit">Adicionar Contato</button>
        </Form>
      </div>
    </Container>
  );
};

export default Modal;
