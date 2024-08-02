import { CheckBoxField, ReactiveForm, setGlobalObject, useActionOnSubmit, useCreateForm } from "reactive-fast-form"

const validOnlyIfCheckbox = () => {

    const [form,setForm,trigger] = useCreateForm(['isHappyUser'])

    useActionOnSubmit(() => {
        if(form['isHappyUser'].isValid){
            alert('User is happy')
        }
    },trigger)

    return (
        <>
            <ReactiveForm setFunc={setForm} setObject={form}>
                <div>
                    {!form['isHappyUser'].isValid && <div>User have to be happy</div>}
                    User is happy? <CheckBoxField name="isHappyUser" isChecked={false} validIf={true} isTrigger backToTrueIn={2500}/>
                </div>
            </ReactiveForm>
            <button className="btn" onClick={() => setGlobalObject(setForm)}>**Submit**</button>
        </>
    )
}

export default validOnlyIfCheckbox
