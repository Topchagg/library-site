interface detailItem {
    name:string,
    description:string,
    propsInfo: {
        [setFunc:string]:string
    },
    btnLink?:string
}


const data:detailItem[] = [
    {
        name:"inputField",
        description:"Default input field type='text' ",
        propsInfo: {
            "name":"One of items that u`ve send into 'useCreateForm(['age'])' -> age is a name",
            "min":"Min amount of chars in string to be valid to send to server",
            "max":"Max amount of chars that user can enter in input",
            "placeholder":"placeholder",
            "validFunc":"valid function, u can write by yourself or use `Validator` library",
            "validClass":"className that will be work if value valid to send to server.",
            "invalidClass":" ClassName that will be work if value invalid to send to server.",
            "isTextArea":"If provided will be created teaxtArea.",
            "dynamicStyles":"if provided, styles will change on change event",
            "allowNull":"Allow send null data to the server",
            "isTrigger":"This props have to be provided at one field of form, without this props u`ll not be able to set data"
        },
        btnLink:"/examples/inputfield"
    },
    {
        name:"checkBoxField",
        description: "Default checkbox button",
        propsInfo: {
            "name":"One of items that u`ve send into 'useCreateForm(['age'])' -> age is a name",
            "isCheked":"true - checked , false - not checked",
            "className":"className of checkBox that work ALWAYS.",
            "isDisabled":"if disabled = true . User couldn`t press on this checkbox and change value.",
            "validIf":"set data only if value of checkBox button = true/false (In depends what u did choice)",
            "isTrigger":"This props have to be provided at one field of form, without this props u`ll not be able to set data"
        },
        btnLink:"/examples/checkboxfield"
    },
    {
        name:"imageField",
        description:"ImageField that saves file that ends with gif/png/jpg ...",
        propsInfo: {
            "name":"One of items that u`ve send into 'useCreateForm(['age'])' -> age is a name",
            "maxBytes":"If weight of image more than this value image will be not seted",
            "id":"This is needs to make UI interface for this field u can see how do it in examples!",
            "updateOnChange":"This props need for dynamic changes, for example if u need make preview of image",
            "allowNull":"Allow send null data to the server",
            "isTrigger":"This props have to be provided at one field of form, without this props u`ll not be able to set data"
        },
        btnLink:"/examples/imagefield"
    },
    {
        name:"selectField",
        description:"SelectField",
        propsInfo:{
            "name":"One of items that u`ve send into 'useCreateForm(['age'])' -> age is a name",
            "multiply":"allow choice many items",
            "classNameSelectField":"className of this field",
            "defaultValue":"Default value that will be choiced by default",
            "allowNull":"Allow send null data to the server",
            "isTrigger":"This props have to be provided at one field of form, without this props u`ll not be able to set data"
        },
        btnLink:"/examples/selectfield"
    },
    {
        name:"radioField",
        description:"default radio field button",
        propsInfo: {
            "name":"One of items that u`ve send into 'useCreateForm(['age'])' -> age is a name",
            "allowNull":"Allow send null data to the server",
            "value":"value that will be saved in object in case if this button choiced",
            "className":"classname",
            "isSelected":"if true this radio field(Button) and value will be selected by default and saved as a value",
            "isTrigger":"This props have to be provided at one field of form, without this props u`ll not be able to set data"
        },
        btnLink:"/examples/radiofield"
    },
    {
        name:"ReactiveFastForm",
        description:"main object that provides setObject and setFunction (elements that obtained from `useCreateForm` to fields)",
        propsInfo: {
            "setFunc":"Function that obtained from `useCreateForm`",
            "setObject":"Object that obtained from `useCreateForm`",
            "className":"className",
        }
    }
]

export default data