import { formIsValid, ImageField, ReactiveForm,setGlobalObject,useActionOnSubmit,useCreateForm } from "reactive-fast-form"

const ShowErrorImageField = () => {

    const [form,setForm,trigger] = useCreateForm(['image'])

    useActionOnSubmit(() => {
        if(formIsValid(form)){
            alert('Form is valid')
        }
    },trigger)

    return (
        <>
            <ReactiveForm setFunc={setForm} setObject={form}>
                {!form['image'].isValid && <div>Image can't be weighter than 35000 bytes!</div>}
                <div>
                    <ImageField isTrigger name="image" maxBytes={35000} id="image"/>
                    <label htmlFor="image">
                        <div className="default-image-styles">
                           ** Send Image **
                        </div>
                    </label>
                </div>
            </ReactiveForm>
            <div>Send image that have weight more than 35000 bytes</div>
            <button className="btn" onClick={() => setGlobalObject(setForm)}>**Submit**</button>
        </>
    )
}

export default ShowErrorImageField