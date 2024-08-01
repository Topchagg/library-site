interface detailItem {
    name:string,
    description:string,
    propsInfo: {
        [setFunc:string]:string
    },
    btnLink?:string
}


const setGlobalObjectDescription:string = `
This is a handler that makes few thing 
1. Set data in global object (That have been by “useCreateForm” returned)
2. Change trigger (Trigger have to be used as a argument of customhook useActionOnSubmit)
3. Change styles if wasnt provided “dynamicChangeStyle”

Totally have to be used as a handler ! 
`
const getFormValueDescription:string = `
This function returns ONLY needed fields from globalObject (Basically ignoring 'BusinessFields') 
returns object -> {nameOfField: value}
`

const formIsValidDescription:string = `
This function returns true if ALL data in field have isValid:true (Ignores 'BusinessFields')
`
const deleteListItemDescription:string = `
This function created to work in combination with "handleOnChangeList", basically deletes item from list by index!
`

const handleOnChangeListDescription:string = `
This function adds a item into needed list! U can find more in -> examples -> listField
`

export const data:detailItem[] = [
    {
        name:'setGlobalObject',
        description:setGlobalObjectDescription,
        propsInfo:{'setFunc': `This is a function that was obtained from 'useCreateForm'`}
    },
    {
        name:'getFormValue',
        description: getFormValueDescription,
        propsInfo:{'setObject':`This is a object that was obtained from 'useCreateForm' `}
    },
    {
        name:'formIsValid',
        description:formIsValidDescription,
        propsInfo:{'setObject':`This is a object that was obtained from 'useCreateForm' `}
    },
    {
        name:'deleteListItem',
        description:deleteListItemDescription,
        propsInfo:{
            'name':`Name of list field have to ends with []`,
            'setObject': 'Object when needed field contains',
            'key':'index of element (key)',
            'setFunc': 'setFunc of form that contains needed fields',
            'min': 'min amount items that can be sended to server'
        },
        btnLink:'/examples/listfield'
    },
    {
        name:'handleOnChangeList',
        description: handleOnChangeListDescription,
        propsInfo:{
            'setObject':'Object when needed field contain',
            'setFunc:':'setFunc of form that contains needed fields',
            'name':`Name of list field have to ends with []`,
            'item': 'Item that will added to list',
            'minAmountItems': 'min amount items that can be sended to server',
            'maxAmountItems': 'max amount items that can be added to list'
        },
        btnLink:'/examples/listfield'
    }
]