/* eslint-disable react/display-name */
import {
  ChangeEvent,
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react'

import classes from './input.module.css'

type CustomChangeHandler = (
  event: ChangeEvent<HTMLInputElement> | null,
  value?: string
) => void

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The way an input works varies considerably depending on the value of its type attribute.
   * If this attribute is not specified, the default type adopted is text.
   */
  type?:
    | `text`
    | `date`
    | `datetime-local`
    | `email`
    | `month`
    | `number`
    | `password`
    | `search`
    | `tel`
    | `time`
    | `url`
    | `week`
    | `hidden`
  /**
   * It changes the name of the form control. Submitted with the form as part of a name/value pair.
   */
  name: string
  /**
   * It allows you to specify a unique id for an HTML element.
   */
  id?: string
  /**
   * It specifies the text that appears in the form control when it has no value set.
   */
  placeholder?: string
  /**
   * It specifies a caption for an item in a user interface.
   */
  label?: string
  /**
   * It specifies the text that appears when an error occurs.
   */
  errorText?: string
  /**
   * It specifies that a value is required for the form to be submitted.
   */
  required?: boolean
  /**
   * It specifies an initial value of the control.
   */
  value?: string
  /**
   * It will take up the full width of its container.
   */
  expanded?: boolean
  /**
   * It is preventing mouse events for the button tag and sets the underlying button in a disabled state.
   */
  disabled?: boolean
  /**
   * It specifies that the input is not editable.
   */
  readonly?: boolean
  /**
   * It determines if an error has occurred.
   */
  error?: boolean
  /**
   * Error helper text, label for helper link.
   */
  helperText?: string
  /**
   * Error helper link, should point to external page explaining the error message.
   */
  helperLink?: string
  /**
   * If true, indicates that the user sees a visual message that the value is valid
   */
  showValidState?: boolean
  /**
   * It's a callback fired when the underlying input element changes.
   * This is passed directly to the `<input>` so shares the same signature as a native onChange event.
   */
  onChange?: ChangeEventHandler | CustomChangeHandler
  /**
   * It determines whether a button to clear its value will be visible next to the input.
   */
  resetable?: boolean
  /**
   * It specifies the icon that will be displayed on the left side of the input.
   */
  icon?: ReactNode
  /**
   * It specifies the icon that will be displayed on the right side of the input.
   */
  rightSecondIcon?: ReactNode
  /**
   * It specifies the icon to be displayed in the button used to clear the input value.
   */
  clearIcon?: ReactNode
  /**
   * It's a callback fired when the user clears the input value by clicking the clear button.
   */
  onClear?: () => void
  /**
   * It's a callback fired when the user uses autocomplete.
   */
  onAutoFill?: (value: string) => void
  dataHook?: string
  /**
   * It determines whether the input can be autocompleted.
   */
  autoComplete?: string
  /**
   * Element to be rendered after field and before error message.
   */
  after?: ReactNode
  /**
   * It shows the loading spinner for async validations.
   */
  isLoading?: boolean
  /**
   * It defines error message height to display full error message after the field.
   */
  fullErrorMessageGap?: number
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, helperText, ...rest }, ref) => {
    const {
      wrapper,
      field,
      error: errorStyles,
      input,
      'error-text': errorTextStyles,
    } = classes

    const fieldStyle = error ? `${field} ${errorStyles}` : field
    return (
      <div className={wrapper}>
        <div className={fieldStyle}>
          <input className={input} ref={ref} {...rest} />
        </div>
        <div className={errorTextStyles}>{error ? helperText : ``}</div>
      </div>
    )
  }
)

export default Input
