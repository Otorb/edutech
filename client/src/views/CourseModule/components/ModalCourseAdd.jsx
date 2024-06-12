import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { useAppDispatch } from "../../../Hooks/useAppSelector";
import Form from "../../../components/Form/Form";
import '../../UserModule/style/modal.css';
import style from "../../UserModule/style/userModule.module.css";
import { useEffect } from "react";

const formSections = [
  {
    name: 'personal',
    title: 'Datos del Curso', // Se cambió el título de "Datos Personales" a "Datos del Curso"
    fields: [
      { label: 'Nombre Curso *', type: 'text', placeholder: 'Ingrese el nombre del curso', name: 'curso' }, // Se cambió el texto del placeholder
      { label: 'ID Estudiante *', type: 'text', placeholder: 'Ingrese el ID del estudiante', name: 'estudiante' }, // Se cambió el texto del placeholder
    ]
  },
];

const ModalCourseAdd = ({ isOpen, onClose, user }) => { // Se cambió el nombre del componente de ModalFormParent a ModalFormCurso
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
    if (!data.curso || !data.estudiante) {
      toast.error('Todos los campos son obligatorios');
      return;
    }
    try {
      await dispatch(agregarCurso(data)).unwrap(); // Se cambió el dispatch de agregarPadre a agregarCurso
      toast.success('Curso agregado exitosamente'); // Se actualizó el mensaje de éxito
      dispatch(cargarCursos()); // Se cambió el dispatch de cargarUsuarios a cargarCursos
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
              <Form title={user ? 'Editar Curso' : 'Agregar Curso'} fields={formSections} register={register} /> {/* Se actualizó el título del formulario */}
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

export default ModalCourseAdd;
