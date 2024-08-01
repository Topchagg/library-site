import { fieldSettings, formIsValid, useCreateForm,ReactiveForm, InputField, setGlobalObject, getFormValues,useActionOnSubmit} from 'reactive-fast-form'
import { Link } from 'react-router-dom'


import './ui/home.css'

const HomeSection = () => {

    const [form,setForm,trigger] = useCreateForm(['name','age','message'])


    useActionOnSubmit(() => {
        if(formIsValid(form)){
            alert(JSON.stringify(getFormValues(form)))
        }
    },trigger)

    const fieldSettings:fieldSettings = {
        validClass:'valid default',
        invalidClass:'invalid default',
        backToTrueIn:3000
    }

    return (
        <div className='content-wrapper'>
            <div className="h1 home-h1">
                Reactive-fast-form
            </div>
            <div className="text-form-wrapper">
                <div className="text-wrapper">
                Эта библиотека предназначена для быстрого создания и лёгкой поддержки форм. Благодаря быстрому созданию и простому синтаксису,
                она идеально подходит для небольших проектов, не требовательных 
                к оптимизации и допускающих использование достаточного количества ресурсов.
                <br /><br />
                <Link to={'/examples'} ><button className='btn'>**Examples**</button></Link>
                </div>

                <div className="form-wrapper">
                    <ReactiveForm className={'form'} setFunc={setForm} setObject={form}>
                        <div className='field-wrapper'>
                            {!form['name'].isValid && <div>Minimum amount of char - 5 maximum - 10</div>}
                            <InputField name='name' {...fieldSettings} min={5} max={10} dynamicStyles placeholder='name'/>
                        </div>
                        <div className='field-wrapper'>
                            {!form['age'].isValid && <div>Have to be in diapasone 18-60</div>}
                            <InputField name='age' {...fieldSettings} placeholder='age' dynamicStyles validFunc={(value) => Number(value) >= 18 && Number(value) <= 60}/>
                        </div>
                        <div className='field-wrapper'>
                            <InputField name='message' isTextArea {...fieldSettings} isTrigger max={500} placeholder='message' allowNull/>
                        </div>
                    </ReactiveForm>
                    <div className="buttons-wrapper">
                        <button className='btn' onClick={() => setGlobalObject(setForm)}>**Submit**</button>
                        <button className='btn' onClick={() => console.log(form)}>**Print in console**</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HomeSection