import CodeComponent from "../../shared/codeComponent/codeComponent"
import codeDefaultExample from "../../examples/inputField/defaultExample/codeDefaultExample"

import { incorrect1,incorrect2,correctExample,useActionExample } from "./examples"
import DocComponent from "./docComponent"

const Documentation = () => {
    return (
        <div className="content-wrapper pb-150">
       
            <DocComponent/>
            <div className="h1">How to start!</div>
           <div className="main-text">
                <div>1. Download a <span className="decoration">“library npm -i reactive-fast-form”</span></div>
                <div>2. Use cutsom hook <span className="decoration">"useCreateForm"</span></div>
                {<CodeComponent code="const [form,setForm,trigger] = useCreateForm(['name'])"/>}
                <div>This hook as a props takes names of future fields!</div>
                <div>3. Import <span className="decoration">ReactiveForm</span> element</div>
                <div><CodeComponent code={`import { ReactiveForm } from "reactive-fast-form"`}/></div>
                <div>And use it! as a props takes <span className="decoration">object</span> and <span className="decoration">function</span> that returns useCreateForm and 100% must have children!</div>
                <div>4. Import needed field <span className="decoration">(We`ll use inputField)</span></div>
                <div><CodeComponent code={`import InputField from "reactive-fast-form"`}/></div>
                <div>5. And use with Reactive form like that</div>
                <div><CodeComponent code={correctExample}/></div>
                <div>Every field have required props <span className="decoration">“Name”</span> </div>
                <div><span className="decoration">“Name”</span> is a props that show by what key u can get value of this field from <span className="decoration">“Form”</span>.</div>
                <div><span className="decoration">”isTriggerField”</span> is a props that have to be at one field of all form! 
                and every field have to be inside some wrapper and deep can`t be more than 1</div>
                <div className="df-all-center"><div>Incorrect</div> <CodeComponent code={incorrect1}/></div>
                <div className="df-all-center"><div>Incorrect</div> <CodeComponent code={incorrect2}/></div>
                <div>6. Make submit button and use this handler <span className="decoration">setGlobalObject</span></div>
                <div><CodeComponent code={`<button onClick={() => setGlobalObject(setForm)} className='btn'>**Submit**</button>`}/></div>
                <div>As a props this function takes a <span className="decoration">Function</span> that have been from <span className="decoration">useCreateForm</span> returned</div>
                <div>7. use custom hook <span className="decoration">useActionOnSubmit</span> that will work on click this button!</div>
                <div><CodeComponent code={useActionExample}/></div>
                <div>As a props this functions takes callBack function and trigger that have been from <span className="decoration">useCreateForm</span> returned</div>
                <div className="decoration">Here`s full code!</div>
                <div><CodeComponent code={codeDefaultExample}/></div>
                <div className="decoration">More about features that Did Not shown here u can if will press on button! </div>
           </div>
           <DocComponent/>
        </div>
    )
}

export default Documentation