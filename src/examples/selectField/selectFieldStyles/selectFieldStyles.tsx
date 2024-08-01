import { useCreateForm,useActionOnSubmit,ReactiveForm, SelectField, setGlobalObject } from "reactive-fast-form"

import './styles.css'

const selectFieldStyles = () => {

    const [form,setForm,trigger] = useCreateForm(['fruits'])

    useActionOnSubmit(() => {
        alert(form['fruits'].value)
    },trigger)

    return (
        <>
            <ReactiveForm setObject={form} setFunc={setForm}>
                <div>
                    <SelectField name="fruits" classNameSelectField="select-field"defaultValue="Apple" isTrigger>
                        <option value="Apple">Apple</option>
                        <option value="Cherry">Cherry</option>
                        <option value="PineApple">PineApple</option>
                        <option value="WaterMelon">WaterMelon</option>
                    </SelectField>
                </div>
            </ReactiveForm>
            <button className="btn" onClick={() => setGlobalObject(setForm)}>**Submit**</button>
        </>
    )
}

export default selectFieldStyles