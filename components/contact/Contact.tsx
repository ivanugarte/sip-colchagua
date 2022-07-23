import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { MailIcon } from "@heroicons/react/outline";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { InputText, TextArea } from "../common/FormFields";

export const Contact = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formSubmiting, setFormSubmiting] = useState<boolean>(false);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(7, ("The field must be between 7 and 50 characters!"))
      .max(50, ("The field must be between 7 and 50 characters!"))
      .required(`* ${("Field required")}`),
    email: Yup.string()
      .email(("Invalid email"))
      .required(`* ${("Field required")}`),
    phone: Yup.number()
      .typeError(("Amount must be a number!"))
      .min(1000000, ("The field must be between 7 and 12 characters!"))
      .max(999999999999, ("The field must be between 7 and 12 characters!")),
    message: Yup.string()
      .min(10, ("The field must be between 10 and 500 characters!"))
      .max(500, ("The field must be between 10 and 500 characters!"))
      .required(`* ${("Field required")}`),
  });

  const onSubmit = async (values: any, actions: any) => {
    setFormSubmiting(true)
    console.log('SUBMIT values', values)
    // try {
      const recaptcha = await recaptchaRef!.current!.executeAsync()
    //   if (!recaptcha) {
    //     throw new Error(`recaptchaError ${recaptcha}`)
    //   } else {
    //     console.log('SUBMIT recaptcha', recaptcha)
    //     const response = await fetch('/api/contacts', {
    //       method: 'POST',
    //       body: JSON.stringify({ ...values, captcha: recaptcha }),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     })
    //     console.log('json.status ----> ', response.status)
    //     apiResponseMessage(response.status, (error?:boolean)=>{
    //       !error && actions.resetForm();
    //       setFormSubmiting(false);
    //     }, t)
    //   }
    // } catch (error) {
    //   console.log('recaptchaError', error);
    //   setFormSubmiting(false);
    // }
  }

  return (
    <>
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-200" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="bg-blue-200 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {("Entre en Contacto")}
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                {(
                  "Para saber más de nuestro trabajo"
                )}
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
                      <a href="mailto:contacto@duweb.site">
                        contacto@colchagua.cl
                      </a>
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-28 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={ContactSchema}
              >
                <Form className="grid grid-cols-1 gap-y-6">
                  <InputText
                    label={("Name")}
                    name="name"
                    type="text"
                    placeholder={("Full name")}
                  />
                  <InputText
                    label={("Email")}
                    name="email"
                    type="text"
                    placeholder={("Email")}
                  />
                  <InputText
                    label={("Phone")}
                    name="phone"
                    type="number"
                    placeholder={("Phone")}
                  />
                  <TextArea
                    label={("Message")}
                    name="message"
                    type="text"
                    rows={6}
                    placeholder={("Message")}
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={formSubmiting}
                      className={`inline-flex justify-center rounded-md border border-transparent py-2 px-6 text-base font-medium text-white
                                 shadow-sm ${formSubmiting
                          ? "bg-slate-900 hover:bg-slate-700 focus:ring-slate-700"
                          : "bg-blue-900 hover:bg-blue-700 focus:ring-blue-700"
                        } focus:outline-none focus:ring-2 focus:ring-offset-2`}
                    >
                      {formSubmiting ? ("Sending...") : ("Send")}
                    </button>
                  </div>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    // size="invisible"
                    sitekey={"6Ld4ZAkfAAAAAIjz0-tpbHwJKuG-bPTJPBMZlLM2"}
                  />
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function resetForm() {
  throw new Error("Function not implemented.");
}
