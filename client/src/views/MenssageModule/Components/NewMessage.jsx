
import { useForm } from 'react-hook-form';
import Form from '../../../components/Form/Form'
import style from '../Styles/newmenssage.module.css'

const NewMessage = () => {

  const { register, handleSubmit, setValue } = useForm();

  const formSections = [
    {
      name: 'personal',
      title: 'Datos Personales',
      fields: [
        {
          label: 'Profesor: *',
          type: 'select',
          name: 'profesor',
          options: [
            { value: '', label: 'Seleccione un profesor' },
            { value: 'julio_cataneda_parra', label: 'Julio Catañeda Parra' },
            { value: 'ana_lopez_martinez', label: 'Ana López Martínez' },
            { value: 'carlos_garcia_perez', label: 'Carlos García Pérez' },
            { value: 'maria_fernandez_gomez', label: 'María Fernández Gómez' },
            { value: 'pedro_sanchez_rodriguez', label: 'Pedro Sánchez Rodríguez' }
          ]
        },
        {
          label: 'Curso: *',
          type: 'text',
          placeholder: 'Ingrese su Curso',
          name: 'curso'
        },
        {
          label: 'Asunto: ',
          type: 'text',
          placeholder: 'Ingrese el motivo',
          name: 'curso'
        },
        {
          label: 'Mensaje: *',
          type: 'textarea',
          placeholder: 'Ingrese su Mensaje',
          name: 'mensaje'
        }
      ]
    }
  ];

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <div className={style.containerNewMenssage}>
       <form onSubmit={handleSubmit(onSubmit)}>
              <Form title={'Crear Nuevo Mensaje'} fields={formSections} register={register} />
              <button type="submit" className={style.btnAdd}>
                {'Enviar Mensaje'}
              </button>
            </form>
    </div>
  )
}

export default NewMessage