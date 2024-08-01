import { useCreateForm,useActionOnSubmit,formIsValid,handleOnChangeList,ReactiveForm,ImageField,setGlobalObject,deleteListItem } from "reactive-fast-form"

const imageListField = () => {

    const [form,setForm,trigger] = useCreateForm(['images[]'])
    const [subForm,setSubForm,subTrigger] = useCreateForm(['image'])

    useActionOnSubmit(() => {
        if(formIsValid(subForm)){
            const image:Blob = subForm['image'].value
            if(image){
                const objectUrl = URL.createObjectURL(image)
                handleOnChangeList(form,setForm,'images[]',objectUrl,1,5)
            }
        }
    },subTrigger)

    return (
        <>  
            <ReactiveForm setFunc={setSubForm} setObject={subForm}>
                <div>
                    <ImageField name="image" maxBytes={100000} id="image" isTrigger/>
                    <label htmlFor="image">
                        <div className="default-image-styles">Choice image!</div>
                    </label>
                </div>
            </ReactiveForm> 
            <button onClick={() => setGlobalObject(setSubForm)}>**Add image to list**</button>
            <button onClick={() => console.log(form)}>Console</button>
            <div className="h1">Press on image to delete</div>
            {form['images[]'].value.map((item:any,key:number) => (
                <div key={key} onClick={() => deleteListItem('images[]',form,key,setForm,1)}><img src={item} alt="" /></div>
            ))}
        </> 
    )
}

export default imageListField