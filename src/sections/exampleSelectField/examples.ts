import codeSelectFieldDefault from "../../examples/selectField/selectFieldDefault/codeSelectFieldDefault";
import SelectFieldDefault from "../../examples/selectField/selectFieldDefault/selectFieldDefault";
import codeSelectFieldStyles from "../../examples/selectField/selectFieldStyles/codeSelectFieldStyles";
import selectFieldStyles from "../../examples/selectField/selectFieldStyles/selectFieldStyles";
import listExampleBtnInterface from "../../shared/types/exampleBtnInterface";


const selectExamples:listExampleBtnInterface = [
    {
        text:'Default',
        codeBase:codeSelectFieldDefault,
        element:SelectFieldDefault
    },
    {
        text:'Styles',
        codeBase:codeSelectFieldStyles,
        element:selectFieldStyles
    }
]

export default selectExamples