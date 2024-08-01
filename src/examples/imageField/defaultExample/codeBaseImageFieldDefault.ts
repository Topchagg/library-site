const codeImageFieldDefaultExample = `
import { useCreateForm,ImageField,useActionOnSubmit, ReactiveForm, setGlobalObject, formIsValid} from "reactive-fast-form"

const ImageFieldDefaultExample = () => {

    const [form,setForm,trigger] = useCreateForm(['image'])

    useActionOnSubmit(() => {
        if(formIsValid(form)){
            alert('Form is valid')
        } else {
            alert('Form is not valid')
        }
    },trigger)

    return (
        <>
            <ReactiveForm setFunc={setForm} setObject={form}>
                <div>
                    <ImageField name="image" isTrigger id="default-image" maxBytes={35000}/>
                    <label htmlFor="default-image">
                        <div className="default-image-styles">
                            **Send image**
                        </div>
                    </label>
                </div>
            </ReactiveForm>
            <button onClick={() => setGlobalObject(setForm)} className="btn">**Submit**</button>
        </>
    )
}

export default ImageFieldDefaultExample
`

export default codeImageFieldDefaultExample