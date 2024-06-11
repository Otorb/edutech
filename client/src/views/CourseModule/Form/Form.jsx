


import "./form.css";

const Form = ({ title, fields, register }) => {
  return (
    <div className="containerForm">
      <form>
        {fields.map((formSection, index) => (
          <div key={index} className={`form ${formSection.name}`}>
            <div className="details">
              <span className="title">{formSection.title}</span>
              <div className="fields">
                {formSection.fields.map((field, idx) => (
                  <div key={idx} className="input-field">
                    <label>{field.label}</label>
                    {field.type === 'select' ? (
                      <select {...register(field.name)}>
                        {field.options.map((option, optIdx) => (
                          <option key={optIdx} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        {...register(field.name)} 
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Form;







// const Form = ({ title, fields, register }) => {
//   return (
//     <div className="containerForm">
//       <form>
//         {fields.map((formSection, index) => (
//           <div key={index} className={`form ${formSection.name}`}>
//             <div className="details">
//               <span className="title">{formSection.title}</span>
//               <div className="fields">
//                 {formSection.fields.map((field, idx) => (
//                   <div key={idx} className="input-field">
//                     <label>{field.label}</label>
//                     {field.type === 'select' ? (
//                       <select {...register(field.name)}>
//                         {field.options.map((option, optIdx) => (
//                           <option key={optIdx} value={option.value}>{option.label}</option>
//                         ))}
//                       </select>
//                     ) : (
//                       <input
//                         type={field.type}
//                         placeholder={field.placeholder}
//                         {...register(field.name)} 
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </form>
//     </div>
//   );
// };

// export default Form;




// import "./form.css";



// const Form = ({ title, fields, register }) => {
//   return (
//     <div className="containerForm">
//       <form>
//         {fields.map((formSection, index) => (
//           <div key={index} className={`form ${formSection.name}`}>
//             <div className="details">
//               <span className="title">{formSection.title}</span>
//               <div className="fields">
//                 {formSection.fields.map((field, idx) => (
//                   <div key={idx} className="input-field">
//                     <label>{field.label}</label>
//                     {field.type === 'select' ? (
//                       <select {...register(field.name)}>
//                         {field.options.map((option, optIdx) => (
//                           <option key={optIdx} value={option.value}>{option.label}</option>
//                         ))}
//                       </select>
//                     ) : (
//                       <input
//                         type={field.type}
//                         placeholder={field.placeholder}
//                         {...register(field.name)} 
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </form>
//     </div>
//   );
// };

// export default Form;







// const Form = ({ fields, register, formData }) => {
//   return (
//     <div className="containerForm">
//       <form>
//         {fields.map((field, index) => (
//           <div key={index} className="form">
//             <div className="details">
//               <div className="fields">
//                 <div key={index} className="input-field">
//                   <label>{field.label}</label>
//                   {field.type === 'date' ? (
//                     <input
//                       type="date"
//                       placeholder={field.placeholder}
//                       required={field.required}
//                       value={formData.date}
//                       {...register("date")} 
//                     />
//                   ) : (
//                     <input
//                       type="text"
//                       placeholder={field.placeholder}
//                       required={field.required}
//                       value={formData.message}
//                       {...register("message")} 
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </form>
//     </div>
//   );
// };

// export default Form;
