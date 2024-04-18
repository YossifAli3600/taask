import { Field } from "formik"
import { Error } from "../../Error/Error"

export const CheckboxInput = ({ label, id, value, handleChange, name, error, backError, className, disabled, required, as }) => {
    return (
        <div>
            {as == "field" ?
                <div className={`flex items-center gap-3 ${className}`}>
                    <label htmlFor={id} className="capitalize">{label}</label>
                    <Field
                        id={id}
                        type="checkbox"
                        value={value}
                        name={name}
                    />
                </div>
                :
                <div className="flex items-center gap-2">
                    <div>
                        <input
                            type="checkbox"
                            name={name}
                            id={id}
                            onChange={handleChange}
                            value={value || ""}
                            disabled={disabled}
                        />
                        {<Error>{backError || error}</Error>}
                    </div>
                    <div className="flex gap-2">
                        <label className='modal__label m-0' htmlFor={id}>{label}</label>{" "}
                        {required ? <RequiredIndicator /> : ""}
                    </div>
                </div>
            }
        </div>
    )
}
