const codeDefaultExample = `
import { useCreateForm,InputField,useActionOnSubmit,setGlobalObject, ReactiveForm, getFormValues, formIsValid } from "reactive-fast-form"

const DefaultInputFieldExample = () => {

    const [form,setForm,trigger] = useCreateForm(['name'])

    useActionOnSubmit(() => {
        if(formIsValid(form)){
            alert(JSON.stringify(getFormValues(form)))
        }else {
            alert('Form isn't valid')
        }
    },trigger)


    return (
        <>
            <ReactiveForm setObject={form} setFunc={setForm}>
                <div>
                    <InputField placeholder="Name" validClass="valid default" invalidClass="invalid default" name="name" isTrigger/>
                </div>
            </ReactiveForm>
            <button onClick={() => setGlobalObject(setForm)} className='btn'>**Submit**</button>
        </>
    )
}

export default DefaultInputFieldExample
`

export default codeDefaultExample