

const codeInputListField = `
import { formIsValid, getFormValues, handleOnChangeList, InputField, ReactiveForm, setGlobalObject, useActionOnSubmit, useCreateForm } from "reactive-fast-form"
import {isInt} from "validator"

const InputListField = () => {

    const [form,setForm,trigger] = useCreateForm(['age[]'])
    const [subForm,setSubForm,subTrigger] = useCreateForm(['age'])

    useActionOnSubmit(() => {
        if(formIsValid(subForm)){
            handleOnChangeList(form,setForm,'age[]',subForm['age'].value,2,5)
        }
    },subTrigger)

    return (
        <>
            {form['age[]'].value.map((item:string,key:number) => (
                <div key={key}>{item}</div>
            ))}
            <ReactiveForm setFunc={setSubForm} setObject={subForm}>
                <div>
                    <InputField 
                    invalidClass="invalid default" name="age" placeholder="Valid only nums" dynamicStyles
                    resetAfterSubmit isTrigger validClass="valid default" validFunc={isInt}/>
                </div>
            </ReactiveForm>
            <button onClick={() => setGlobalObject(setSubForm)} className="btn">**Add to list**</button>
            <button onClick={() => alert(JSON.stringify(getFormValues(form)))} className="btn">**Show list**</button>
        </>  
    )
}

export default InputListField
`

export default codeInputListField