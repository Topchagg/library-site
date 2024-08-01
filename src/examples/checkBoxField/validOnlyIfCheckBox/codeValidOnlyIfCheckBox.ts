

const codeValidOnlyIfCheckBox = `
import { useState } from "react"
import { CheckBoxField, ReactiveForm, setGlobalObject, useActionOnSubmit, useCreateForm } from "reactive-fast-form"

const validOnlyIfCheckbox = () => {

    const [form,setForm,trigger] = useCreateForm(['isHappyUser'])
    const [isInvalid, setIsinvalid] = useState<boolean>(false)

    useActionOnSubmit(() => {
        if(form['isHappyUser'].isValid){
            alert('User is happy')
            setIsinvalid(false)
        } else {
            setIsinvalid(true)
        }
    },trigger)

    return (
        <>
            <ReactiveForm setFunc={setForm} setObject={form}>
                <div>
                    {isInvalid && <div>User have to be happy</div>}
                    User is happy? <CheckBoxField name="isHappyUser" isChecked={true} validIf={true} isTrigger/>
                </div>
            </ReactiveForm>
            <button className="btn" onClick={() => setGlobalObject(setForm)}>**Submit**</button>
        </>
    )
}

export default validOnlyIfCheckbox


`

export default codeValidOnlyIfCheckBox