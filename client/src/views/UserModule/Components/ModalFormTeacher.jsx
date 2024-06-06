// ModalFormTeacher.jsx
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { useAppDispatch } from "../../../Hooks/useAppSelector";
import { agregarProfesor, cargarUsuarios, editarProfesor } from "../../../store/slicer/usersSlice";
import Form from "../../../components/Form/Form";
import '../style/modal.css';
import style from "../style/userModule.module.css";
import { useEffect } from "react";

const formSections = [
  {
    name: 'personal',
    title: 'Datos Personales',
    fields: [
      { label: 'Nombre *', type: 'text', placeholder: 'Ingrese su Nombre', name: 'name' },
      { label: 'Apellido *', type: 'text', placeholder: 'Ingrese su Apellido', name: 'lastName' },
      { label: 'Email *', type: 'email', placeholder: 'Ingrese su Email', name: 'email' },
      { label: 'Contraseña *', type: 'password', placeholder: 'Ingrese una contraseña', name: 'password' },
      { label: 'Telefono *', type: 'tel', placeholder: 'Ingrese su Telefono', name: 'phone' },
      { label: 'Foto *', type: 'text', placeholder: 'Ingrese URL imagen', name: 'photo' },
    ]
  },
];

const ModalFormTeacher = ({ isOpen, onClose, user }) => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      Object.keys(user).forEach((key) => {
        setValue(key, user[key]);
      });
    }
  }, [user, setValue]);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    if (!data.name || !data.lastName || !data.email || !data.password || !data.phone || !data.photo) {
      toast.error('Todos los campos son obligatorios');
      return;
    }
    try {
      if (user) {
        await dispatch(editarProfesor({ ...data, userId: user.id }));
        toast.success('Usuario editado exitosamente');
      } else {
        await dispatch(agregarProfesor(data)).unwrap();
        toast.success('Usuario cargado exitosamente');
      }
      dispatch(cargarUsuarios());
      onClose();
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
              <Form title={user ? 'Editar Docente' : 'Agregar Docente'} fields={formSections} register={register} />
              <button type="submit" className={style.btnAdd}>
                {user ? 'Editar' : 'Agregar'}
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
