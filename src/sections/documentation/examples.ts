export const incorrect1 = 
`<ReactiveForm setObject={form} setFunc={setForm}>
    <div>
        <div>
             <InputField placeholder="Name" validClass="valid default" invalidClass="invalid default" name="name" isTrigger/>
        </div>
    </div>
</ReactiveForm>
`

export const correctExample = 
`<ReactiveForm setObject={form} setFunc={setForm}>
    <div>
        <InputField placeholder="Name" validClass="valid default" invalidClass="invalid default" name="name" isTrigger/>
    </div>
</ReactiveForm>
`

export const incorrect2 = `<ReactiveForm setObject={form} setFunc={setForm}>
    <InputField placeholder="Name" validClass="valid default" invalidClass="invalid default" name="name" isTrigger/>
</ReactiveForm>
`

export const useActionExample = `useActionOnSubmit(() => {
    alert(JSON.stringify(form['name']))
},trigger)`