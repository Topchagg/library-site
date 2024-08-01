import { fieldSettings, formIsValid, getFormValues, InputField, ReactiveForm, setGlobalObject, useActionOnSubmit, useCreateForm } from "reactive-fast-form"

import { isAlpha, isMobilePhone } from "validator"

import './ui/theRealOne.css'

const TheRealOne = () => {

    const [form,setForm,trigger] = useCreateForm(['name','phoneNumber','question'])

    const settings:fieldSettings = {
        invalidClass: 'wood-style-invalid wood-default',
        validClass: 'wood-style-valid wood-default',
        dynamicStyles:true
    }

    useActionOnSubmit(() => {
        if(formIsValid(form)){
            alert(JSON.stringify(getFormValues(form)))
        } else {
            alert('Form is not valid, please enter correct data!')
        }
    },trigger) 

    return (
        <div>
            <ReactiveForm setFunc={setForm} setObject={form}>
                <div>
                    <InputField name="name" {...settings} min={2} max={20} validFunc={isAlpha} placeholder="name"/>
                </div>
                <div>
                    <InputField name="phoneNumber" {...settings} validFunc={isMobilePhone} placeholder="Your telephone number"/>
                </div>
                <div className="text-area-field-wrapper">
                    <InputField name="question" {...settings} allowNull isTrigger isTextArea placeholder="Your question"/>
                </div>
            </ReactiveForm>
            <button className="wood-btn" onClick={() => setGlobalObject(setForm)}>Send</button>
        </div>
    )
}

export default TheRealOne