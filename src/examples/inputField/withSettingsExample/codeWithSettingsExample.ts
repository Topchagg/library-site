const codeWithSettingsExample = `
import { useCreateForm,InputField,useActionOnSubmit,setGlobalObject, ReactiveForm, getFormValues,fieldSettings } from "reactive-fast-form"

const WithSettingsExample = () => {

    const [form,setForm,trigger] = useCreateForm(['name','age','message'])

    const settings:fieldSettings = {
        invalidClass:'invalid default',
        validClass: 'valid default',
        dynamicStyles:true
    }

    useActionOnSubmit(() => {
        alert(JSON.stringify(getFormValues(form)))
    },trigger)

    return (
        <>
            <ReactiveForm setFunc={setForm} setObject={form}>
                <div>
                    <InputField name="name" {...settings} placeholder="Name" validFunc={(value) => value.length > 2 && value.length < 10}/>
                </div>

                <div>
                    <InputField name="age" {...settings} placeholder="Age" validFunc={(value) => Number(value) >= 18 && Number(value) <= 60}/>
                </div>
                
                <div>
                    <InputField name="message" {...settings} placeholder="Message" isTrigger max={500}/>
                </div>
            </ReactiveForm>
            <button onClick={() => setGlobalObject(setForm)} className="btn">**submit**</button>
        </>
    )
}

export default WithSettingsExample
`

export default codeWithSettingsExample