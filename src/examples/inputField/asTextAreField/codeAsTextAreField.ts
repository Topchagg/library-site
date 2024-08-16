
const codeAsTextAreaField = `
import { useCreateForm,InputField,useActionOnSubmit,setGlobalObject, ReactiveForm, getFormValues, formIsValid } from 'reactive-fast-form'

const AsTextAreaField = () => {

    const [form,setForm,trigger] = useCreateForm(['message'])

    useActionOnSubmit(() => {
        if(formIsValid(form)){
            alert(JSON.stringify(getFormValues(form)))
        }else {
            alert('Form isnt valid')
        }
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
`

export default codeAsTextAreaField