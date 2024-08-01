

const codeValidationDynamicStyles = `
import { useCreateForm,InputField,useActionOnSubmit,setGlobalObject, ReactiveForm, getFormValues } from "reactive-fast-form"

const ValidatonDynamicStylesInputFieldExample = () => {

    const [form,setForm,trigger] = useCreateForm(['email'])

    useActionOnSubmit(() => {
        alert(JSON.stringify(getFormValues(form)))
    },trigger)

    return (
        <>
            <ReactiveForm setObject={form} setFunc={setForm}>
                <div>
                    <InputField
                    validClass="valid default" invalidClass="invalid default" dynamicStyles isTrigger
                    name="email" type="email" validFunc={(value) => value.endsWith('@gmail.com')} placeholder="Email"/>
                </div>
            </ReactiveForm>
            <button onClick={() => setGlobalObject(setForm)} className='btn'>**submit**</button>
        </>
    )
}

export default ValidatonDynamicStylesInputFieldExample
`

export default codeValidationDynamicStyles