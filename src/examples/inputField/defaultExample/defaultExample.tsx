import { useCreateForm,InputField,useActionOnSubmit,setGlobalObject, ReactiveForm, getFormValues } from "reactive-fast-form"

const DefaultInputFieldExample = () => {

    const [form,setForm,trigger] = useCreateForm(['name'])

    useActionOnSubmit(() => {
        alert(JSON.stringify(getFormValues(form)))
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