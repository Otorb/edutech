// ModalFormTeacher.jsx
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { useAppDispatch } from "../../../Hooks/useAppSelector";
import {  agregarProfesor, cargarUsuarios } from "../../../store/slicer/usersSlice";
import Form from "../../../components/Form/Form";
import '../style/modal.css';
import style from "../style/userModule.module.css";

const formSections = {
  teacher: [
    {
      name: 'personal',
      title: 'Datos Personales PROFESOR',
      fields: [
        { label: 'Nombre *', type: 'text', placeholder: 'Ingrese su Nombre', name: 'name' },
        { label: 'Apellido *', type: 'text', placeholder: 'Ingrese su Apellido', name: 'lastName' },
        { label: 'Email *', type: 'email', placeholder: 'Ingrese su Email', name: 'email' },
        { label: 'Contraseña *', type: 'password', placeholder: 'Ingrese una contraseña', name: 'password' },
        { label: 'Telefono *', type: 'tel', placeholder: 'Ingrese su Telefono', name: 'phone' },
        { label: 'Foto *', type: 'text', placeholder: 'Ingrese URL imagen', name: 'photo' },
      ]
    },
  ],
};

const ModalFormTeacher = ({ isOpen, onClose }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const onSubmit = async (data, event) => {
    event.preventDefault();
    if (!data.name || !data.lastName || !data.email || !data.password || !data.phone || !data.photo) {
      toast.error('Todos los campos son obligatorios');
      return;
    }
    try {
      await dispatch(agregarProfesor(data)).unwrap();
      toast.success('Usuario cargado exitosamente');
      dispatch(cargarUsuarios());
      onClose(); // Cerrar el modal después de enviar el formulario
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  

  if (!isOpen) return null;

  return createPortal(
    <>
      <Toaster richColors position="top-left" />
      <div className="contentModalgallery">
        <section className="primaryModal">
          <MdClose className="iconCloseModal" onClick={onClose} />
          <div className="contentFormModal">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Form title="Registration" fields={formSections.teacher} register={register} />
              <button type="submit" className={style.btnAdd}>
                Enviar
              </button>
            </form>
          </div>
        </section>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default ModalFormTeacher;
