import DefaultInputFieldExample from "../../examples/inputField/defaultExample/defaultExample"
import codeDefaultExample from "../../examples/inputField/defaultExample/codeDefaultExample"

import codeAsTextAreaField from "../../examples/inputField/asTextAreField/codeAsTextAreField"
import AsTextAreaField from "../../examples/inputField/asTextAreField/AsTextAreField"

import ValidatonDynamicStylesInputFieldExample from "../../examples/inputField/validationDynamicStyles/validationDynamicStylesExample"
import codeValidationDynamicStyles from "../../examples/inputField/validationDynamicStyles/codeValidationDynamicStyles"

import ShowThatWasIncorrect from "../../examples/inputField/showThatWasInCorrect/showThatWasIncorrect"
import codeShowThatWasInCorrect from "../../examples/inputField/showThatWasInCorrect/codeShowThatWasInCorrect"

import WithSettingsExample from "../../examples/inputField/withSettingsExample/withSettingsExample"
import codeWithSettingsExample from "../../examples/inputField/withSettingsExample/codeWithSettingsExample"

import TheRealOne from "../../examples/inputField/theRealOne/theRealOne"
import codeTheRealOne from "../../examples/inputField/theRealOne/codeTheRealOne"

import listExampleBtnInterface from "../../shared/types/exampleBtnInterface"


const inputFieldExamples:listExampleBtnInterface = [
    {
        text:"Default",
        codeBase: codeDefaultExample,
        element: DefaultInputFieldExample
    },
    {
        text:"Text-area-field",
        codeBase: codeAsTextAreaField,
        element: AsTextAreaField
    },
    {
        text:"Dynamic styles",
        codeBase: codeValidationDynamicStyles,
        element: ValidatonDynamicStylesInputFieldExample
    },
    {
        text:"Show error",
        codeBase: codeShowThatWasInCorrect,
        element: ShowThatWasIncorrect
    },
    {
        text:"Settings",
        codeBase: codeWithSettingsExample,
        element: WithSettingsExample
    },
    {
        text:"Real one",
        codeBase: codeTheRealOne,
        element: TheRealOne
    },
]

export default inputFieldExamples