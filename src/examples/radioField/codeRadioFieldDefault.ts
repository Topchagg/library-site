

const codeRadioFieldDefault = `
import { formIsValid, RadioField, ReactiveForm, setGlobalObject, useActionOnSubmit, useCreateForm } from "reactive-fast-form"

const RadioFieldDefault = () => {

    const [form,setForm,trigger] = useCreateForm(['skill'])

    useActionOnSubmit(() => {
        if(formIsValid(form)){
            alert(form['skill'].value)
        }else {
            alert('U have something to choice')
        }
    },trigger)

    return (
        <>
            <ReactiveForm setFunc={setForm} setObject={form}>
                <div> JS: <RadioField name="skill" value="JS" isTrigger/></div>
                <div> C#: <RadioField name="skill" value="C#"/></div>
                <div> GO: <RadioField name="skill" value="GO"/></div>
               <div> PY: <RadioField name="skill" value="PY"/></div>
            </ReactiveForm>
           <button onClick={() => setGlobalObject(setForm)}>**Submit**</button> 
        </> 
    )
}

export default RadioFieldDefault
`

export default codeRadioFieldDefault