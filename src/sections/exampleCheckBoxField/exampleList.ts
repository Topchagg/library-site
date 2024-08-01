import codeDefaultCheckBox from "../../examples/checkBoxField/defaultCheckBox/codeDefaultCheckBox";

import listExampleBtnInterface from "../../shared/types/exampleBtnInterface";
import DefaultCheckBox from "../../examples/checkBoxField/defaultCheckBox/defaultCheckBox";

import codeValidOnlyIfCheckBox from "../../examples/checkBoxField/validOnlyIfCheckBox/codeValidOnlyIfCheckBox";
import validOnlyIfCheckbox from "../../examples/checkBoxField/validOnlyIfCheckBox/validOnlyIfCheckbox";



const checkBoxFieldExamples:listExampleBtnInterface = [
    {
        text:'Default',
        codeBase:codeDefaultCheckBox,
        element:DefaultCheckBox,
    }, {
        text:'validIf',
        codeBase:codeValidOnlyIfCheckBox,
        element:validOnlyIfCheckbox
    }
]

export default checkBoxFieldExamples