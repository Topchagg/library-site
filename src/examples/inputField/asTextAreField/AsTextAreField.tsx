import { useCreateForm,InputField,useActionOnSubmit,setGlobalObject, ReactiveForm, getFormValues } from 'reactive-fast-form'

const AsTextAreaField = () => {

    const [form,setForm,trigger] = useCreateForm(['message'])

    useActionOnSubmit(() => {
        alert(JSON.stringify(getFormValues(form)))
    },trigger)

    return (
        <>
            <ReactiveForm  setObject={form} setFunc={setForm}>
                <div>
                    <InputField placeholder='Message' name='message' isTextArea isTrigger validClass='valid default'/>
                </div>
            </ReactiveForm>
            <button onClick={() => setGlobalObject(setForm)} className='btn'>**submit**</button>
        </>
    )
}

export default AsTextAreaField