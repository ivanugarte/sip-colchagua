import { useField, Field, FieldHookConfig } from 'formik'

export const labelCase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)
export const classNames = (...classes: string[]) =>
  classes.filter(Boolean).join(' ')

export type InputTextProps = {
  label: string
}

export const InputText = (props: FieldHookConfig<string> & InputTextProps) => {
  const [field, meta, helpers] = useField(props)
  return (
    <div className="my-2">
      <div
        className={`flex sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5`}
      >
        <label
          htmlFor={field.name}
          className="sr-only block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          {labelCase(props.label)}
        </label>
        <Field
          {...field}
          {...props}
          as="input"
          className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-700 focus:ring-blue-700"
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-600 text-sm ml-2">{meta.error}</div>
      ) : null}
    </div>
  )
}

export const TextArea = (props: FieldHookConfig<string> & TextAreaProps) => {
  const [field, meta, helpers] = useField(props)
  return (
    <div className="my-2">
      <div
        className={`flex sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5`}
      >
        <label
          htmlFor={field.name}
          className="sr-only block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          {labelCase(props.label)}
        </label>
        <Field
          {...field}
          {...props}
          as="textarea"
          className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-700 focus:ring-blue-700"
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-600 text-sm ml-2">{meta.error}</div>
      ) : null}
    </div>
  )
}
