/* eslint-disable react/display-name */
import {
  ChangeEvent,
  ChangeEventHandler,
  HTMLAttributes,
  forwardRef,
} from 'react'

import classes from './textarea.module.css'

type CustomChangeHandler = (
  event: ChangeEvent<HTMLTextAreaElement> | null,
  value?: string
) => void

interface TextareaProps
  extends Omit<HTMLAttributes<HTMLTextAreaElement>, `onChange`> {
  /**
   * It changes the name of the form control. Submitted with the form as part of a name/value pair.
   */
  name?: string
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
  helperText?: string
  /**
   * It specifies that a value is required for the form to be submitted.
   */
  required?: boolean
  /**
   * It specifies an initial value of the control.
   */
  defaultValue?: string
  /**
   * It will take up the full width of its container.
   */
  expanded?: boolean
  /**
   * It is preventing mouse events for the button tag and sets the underlying button in a disabled state.
   */
  disabled?: boolean
  /**
   * It determines if an error has occurred.
   */
  error?: boolean
  /**
   * A callback fired when the underlying textarea element changes.
   * This is passed directly to the `<textarea>` so shares the same signature as a native onChange event.
   */
  onChange?: ChangeEventHandler | CustomChangeHandler
  dataHook?: string
  /**
   * It sets maximum width of component.
   */
  maxWidth?: string
  /**
   * It sets maximum height of component.
   */
  maxHeight?: string
  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attr-rows
   */
  rows?: number
  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attr-cols
   */
  cols?: number
  /**
   * It disables resizing for component.
   */
  noResize?: boolean
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, helperText, ...rest }, ref) => {
    const {
      wrapper,
      field,
      error: errorStyles,
      'text-area': textArea,
      'error-text': errorTextStyles,
    } = classes

    const fieldStyle = error ? `${field} ${errorStyles}` : field

    return (
      <div className={wrapper}>
        <div className={fieldStyle}>
          <textarea className={textArea} ref={ref} {...rest} />
        </div>
        <div className={errorTextStyles}>{error ? helperText : ``}</div>
      </div>
    )
  }
)

export default Textarea
