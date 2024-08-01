const codeObjectListField = `
import { useCreateForm,useActionOnSubmit,setGlobalObject,formIsValid,handleOnChangeList,getFormValues,ReactiveForm,InputField,SelectField } from "reactive-fast-form"

import { isNumeric } from "validator"

interface User {
    name:string,
    age:string,
    mainSkill:string
}

const ObjectListField = () => {

    const [form,setForm,trigger] = useCreateForm(['user[]'])
    const [subForm,setSubForm,subTrigger] = useCreateForm(['name','age','mainSkill'])

    useActionOnSubmit(() => {
        if(formIsValid(subForm)){
            handleOnChangeList(form,setForm,'user[]',getFormValues(subForm),1,5)
        }else {
            alert('Name and Age have to be filled! (Age have to be NUMERIC)')
        }
    },subTrigger)

    return (
        <>

            {form['user[]'].value.map((item:User,key:number) => (
                <div key={key}>
                    <> {item.name} </>/|\<> {item.age} </>/|\<> {item.mainSkill} </>   
                </div>           
            ))}

            <ReactiveForm setFunc={setSubForm} setObject={subForm}>
                <div>
                    <InputField name="name" placeholder="Name" resetAfterSubmit/>
                </div>
                <div>
                    <InputField name="age" placeholder="Age" validFunc={isNumeric} resetAfterSubmit/>
                </div>
                <div>
                    Skill:        
                    <SelectField name="mainSkill" isTrigger defaultValue="JS">
                        <option value="JS">JS</option>
                        <option value="C#">C#</option>
                        <option value="PY">PY</option>
                        <option value="GO">GO</option>
                    </SelectField>
                </div>
            </ReactiveForm>
            <button onClick={() => setGlobalObject(setSubForm)}>**Add to list**</button>
            <button onClick={() => console.log(subForm)}>**Console**</button>

        </> 
    )
}

export default ObjectListField
`

export default codeObjectListField