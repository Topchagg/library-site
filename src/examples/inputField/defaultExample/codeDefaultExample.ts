const codeDefaultExample = `
import { useCreateForm,InputField,useActionOnSubmit,setGlobalObject, ReactiveForm } from "reactive-fast-form"

const DefaultInputFieldExample = () => {

    const [form,setForm,trigger] = useCreateForm(['name'])

    useActionOnSubmit(() => {
        alert(JSON.stringify(form['name']))
    },trigger)


    return (
        <>
            <ReactiveForm setObject={form} setFunc={setForm}>
                <div>
                    <InputField placeholder="Name" validClass="valid default" name="name" isTrigger/>
                </div>
            </ReactiveForm>
            <button onClick={() => setGlobalObject(setForm)} className='btn'>**Submit**</button>
        </>
    )
}

export default DefaultInputFieldExample
`

export default codeDefaultExample