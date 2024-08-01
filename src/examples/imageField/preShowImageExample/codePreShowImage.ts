
const codePreShowExample = `
    import { useState } from "react"
    import { formIsValid, ImageField, ReactiveForm, setGlobalObject, useActionOnSubmit, useCreateForm } from "reactive-fast-form"


    const preShowImageExample = () => {

        const [form,setForm,trigger] = useCreateForm(['image'])
        const [preview, setPreview] = useState<string>()

        useActionOnSubmit(() => {
            if(formIsValid(form)){
                const image:Blob = form['image'].value
                if(image){
                    const objectUrl = URL.createObjectURL(image)
                    setPreview(objectUrl)
                }
            } else {
                alert('Form is not valid')
            }
        },trigger)

        return (
            <>
                <ReactiveForm setObject={form} setFunc={setForm}>
                    <div>
                        <ImageField name="image" id="image" maxBytes={35000} isTrigger updateOnChange/>
                        <label htmlFor="image">
                            <div className="default-image-styles">
                                {preview && <img src={preview} alt="" /> || <div>** Send image **</div> } 
                            </div>
                        </label>
                    </div>
                </ReactiveForm>
                <button className="btn" onClick={() => setGlobalObject(setForm)}>**Submit**</button>
            </> 
        )
    }

    export default preShowImageExample
`

export default codePreShowExample