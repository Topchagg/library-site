interface detailItem {
    name:string,
    description:string,
    propsInfo: {
        [setFunc:string]:string
    }
}

export const data:detailItem[] = [
    {
        name:'useCreateForm',
        description:`
Main custom hook that creates object! returns [object, function, boolean].object + function uses in "ReactiveForm"
and some functions. trigger uses only in another custom hook "useActionOnSubmit".  object contains two businnes fields 
and unlimited data fields, that have appearance as {name: '', isValid:true} if u wanna create list, end name with []
`,
        propsInfo: {"list":"List of names, every single name creates in object {name:'',isValid:true} or {name[]:[],isValid:true}"}
    },
    {
        name:"useActionOnSubmit",
        description:"custom hooks that call callback function when was called `setGlobalForm` ",
        propsInfo:{
            "callBackFunc": "Func that will be call if was used `setGlobalObject`",
            "trigger":"The trigger obtained from 'useCreateForm' "}
    }
]