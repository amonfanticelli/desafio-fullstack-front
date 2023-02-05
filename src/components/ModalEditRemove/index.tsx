import { Container, Form } from "./style";
import { ImCross } from "react-icons/im";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IContact } from "../../interfaces";
import { contactEditSchema } from "../../schema/contactEditSchema";

interface PropsModalEdit {
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  currentContact: IContact;
}

const ModalEditRemove = ({ setModalEdit, currentContact }: PropsModalEdit) => {
  const { register, handleSubmit } = useForm<IContact>({
    resolver: yupResolver(contactEditSchema),
  });

  const { handleRemoveContact, handleEditContact } = useContext(UserContext);
  return (
    <Container>
      <div>
        <div className="containerTitleButton">
          <h1 className="titleTecnology">Editar Tecnologia</h1>{" "}
          <button onClick={() => setModalEdit(false)} className="crossButton">
            <ImCross />
          </button>
        </div>

        <Form onSubmit={handleSubmit(handleEditContact)}>
          <label htmlFor="name">Nome</label>
          <input
            placeholder={currentContact.fullName}
            id="name"
            type="text"
            {...register("fullName")}
          />
          <label htmlFor="email">Email</label>
          <input
            placeholder={currentContact.email}
            id="email"
            type="text"
            {...register("email")}
          />
          <label htmlFor="cellphone">Celular</label>
          <input
            placeholder={currentContact.cellphone}
            id="cellphone"
            type="number"
            {...register("cellphone")}
          />

          <div>
            <button className="buttonSave">Salvar</button>
            <button
              className="buttonRemove"
              onClick={(event) => {
                event.preventDefault();
                handleRemoveContact(currentContact);
                setModalEdit(false);
              }}
            >
              Remover
            </button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default ModalEditRemove;
