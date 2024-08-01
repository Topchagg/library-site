import { useCreateForm,InputField,useActionOnSubmit,setGlobalObject, ReactiveForm,fieldSettings, formIsValid, getFormValues } from "reactive-fast-form"

const ShowThatWasIncorrect = () => {

    const [form,setForm,trigger] = useCreateForm(['name'])

    const settings:fieldSettings = {
        validClass:'valid default',
        invalidClass: 'invalid default',
        backToTrueIn:3500
    }

    useActionOnSubmit(() => {
        if(formIsValid(form)){
            alert(JSON.stringify(getFormValues(form)))
        }
    },trigger)

    return (
        <>
            {!form['name'].isValid && <div className="error-message">name have to ends with Q</div>}
            <ReactiveForm setObject={form} setFunc={setForm}>
                <div>
                    <InputField placeholder="Correct name is that ends with Q"
                     name="name" {...settings} validFunc={(value) => value.endsWith('Q')} isTrigger/>
                </div>
            </ReactiveForm>
            <button onClick={() => setGlobalObject(setForm)} className='btn'>**submit**</button>
        </>
    )
}
export default ShowThatWasIncorrect