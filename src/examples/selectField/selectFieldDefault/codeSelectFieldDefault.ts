

const codeSelectFieldDefault = `
import { useCreateForm,useActionOnSubmit,ReactiveForm,SelectField,setGlobalObject } from "reactive-fast-form"

const SelectFieldDefault = () => {

    const [form,setForm,trigger] = useCreateForm(['selectedOption'])

    useActionOnSubmit(() => {
        alert(form['selectedOption'].value)
    },trigger)

    return (
        <>
            <ReactiveForm setObject={form} setFunc={setForm}>
                <div>
                    <SelectField name="selectedOption" defaultValue="Cherry" isTrigger>
                        <option value="Apple">Apple</option>
                        <option value="PineApple">PineApple</option>
                        <option value="Strawberry">Strawberry</option>
                        <option value="Cherry">Cherry</option>
                        <option value="Null">Nothing</option>

                    </SelectField>
                </div>
            </ReactiveForm>
            <button className="btn" onClick={() => setGlobalObject(setForm)}>**Submit**</button>
        </> 
    )
}

export default SelectFieldDefault
`

export default codeSelectFieldDefault