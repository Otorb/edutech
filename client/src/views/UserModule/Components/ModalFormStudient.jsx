import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { useAppDispatch } from "../../../Hooks/useAppSelector";
import { agregarEstudiante, cargarUsuarios } from "../../../store/slicer/usersSlice";
import Form from "../../../components/Form/Form";
import '../style/modal.css';
import style from "../style/userModule.module.css";

const formSections = [
  {
    name: 'personal',
    title: 'Datos Personales ESTUDIANTE',
    fields: [
      { label: 'Apellido *', type: 'text', placeholder: 'Ingrese su Apellido', name: 'lastName' },
      { label: 'Nombres *', type: 'text', placeholder: 'Ingrese su Nombres', name: 'name' },
      { label: 'Email *', type: 'email', placeholder: 'Ingrese su Email', name: 'email' },
      { label: 'Contraseña *', type: 'password', placeholder: 'Ingrese una contraseña', name: 'password' },
      { label: 'Telefono *', type: 'tel', placeholder: 'Ingrese su Telefono', name: 'phone' },
      { label: 'Fecha de Nacimiento *', type: 'date', name: 'birthd' },
      { label: 'Registración *', type: 'text', placeholder: 'Ingrese la registracion', name: 'registration' },
      { label: 'Foto *', type: 'text', placeholder: 'Ingrese URL imagen', name: 'photo' },
   
    ]
  },
];

const ModalFormStudient = ({ isOpen, onClose }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const onSubmit = async (data, event) => {
    event.preventDefault();
    if (!data.name || !data.lastName || !data.email || !data.password || !data.phone || !data.birthd || !data.registration || !data.photo || !data.role) {
      toast.error('Todos los campos son obligatorios');
      return;
    }
    try {
      await dispatch(agregarEstudiante(data)).unwrap();
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
              <Form title="Registration" fields={formSections} register={register} />
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

export default ModalFormStudient;
