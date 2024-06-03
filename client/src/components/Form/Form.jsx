import "./form.css";

const Form = ({ title, fields, onSubmit }) => {
  return (
    <div className="containerForm">
      
      <form onSubmit={onSubmit}>
        {fields.map((formSection, index) => (
          <div key={index} className={`form ${formSection.name}`}>
            <div className="details">
              <span className="title">{formSection.title}</span>
              <div className="fields">
                {formSection.fields.map((field, idx) => (
                  <div key={idx} className="input-field">
                    <label>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                    />
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
