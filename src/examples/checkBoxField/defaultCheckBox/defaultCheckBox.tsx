import { CheckBoxField, ReactiveForm, setGlobalObject, useActionOnSubmit, useCreateForm } from "reactive-fast-form"

const DefaultCheckBox = () => {

    const [form,setForm,trigger] = useCreateForm(['isHappyUser'])
 
    useActionOnSubmit(() => {
        if(form['isHappyUser'].value){
            alert('User is happy')
        } else {
            alert('User isnt happy')
        }
    },trigger)

    return (
        <>
            <ReactiveForm setFunc={setForm} setObject={form}>
                <div>
                    Is happy user? <CheckBoxField name="isHappyUser" isChecked={true} isTrigger/> 
                </div>
            </ReactiveForm>
            <button className="btn" onClick={() => setGlobalObject(setForm)}>**Submit**</button>
        </>
    )
}

export default DefaultCheckBox
