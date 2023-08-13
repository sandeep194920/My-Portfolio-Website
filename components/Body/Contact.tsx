import React, { Fragment, useEffect, useState } from 'react'
import Wrapper from './Helpers/Wrapper'
import Paragraph from './Helpers/Paragraph'
import Link from 'next/link'
import { data } from '@/data'

interface FormData {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}

const form = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

function ContactMe() {
  const [isFormOk, setIsFormOk] = useState({
    status: true,
    error: '',
  })
  const [isFormTouched, setIsFormTouched] = useState(false)
  const [formData, setFormData] = useState<FormData>(form)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const formHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault()
    console.log(`name - ${e.target.name}, and value - ${e.target.value}`)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setIsFormTouched(true)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsFormSubmitted(false)
    if (!isFormTouched) {
      // Only validate if the form has been touched
      return
    }
    const requiredFields = ['fullName', 'email', 'subject', 'message']

    let formError = 'Fill out all necessary fields please'

    const areRequiredFieldsPresent = requiredFields.every(
      (key) => formData[key as keyof FormData] !== ''
    )

    areRequiredFieldsPresent && (formError = '')

    const isPhoneValid = !formData.phone || /^[0-9]{10}$/.test(formData.phone)

    !isPhoneValid && (formError = 'Please check your phone number')

    setIsFormOk({
      ...isFormOk,
      status: areRequiredFieldsPresent && isPhoneValid,
      error: formError,
    })

    if (formError) {
      return
    }
    setIsFormSubmitted(true)
    setFormData(form)
    console.log('Form Submitted')
  }

  useEffect(() => {
    if (isFormSubmitted) {
      setTimeout(() => {
        setIsFormSubmitted(false)
      }, 10000)
    }
  }, [isFormSubmitted])

  return (
    <div id="contact-me">
      <Wrapper title="Let's Get In Touch">
        <Paragraph>
          {data.contact_section.intro.map((text, index) => {
            return (
              <Fragment key={index}>
                {text}
                <br></br>
              </Fragment>
            )
          })}
        </Paragraph>
      </Wrapper>

      {/* form */}

      <form
        onSubmit={handleSubmit}
        id="contact-section"
        className="mx-auto mt-9 max-w-[85%] space-y-7 overflow-hidden rounded pb-14 sm:max-w-[80%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%]"
      >
        <div>
          {!isFormOk.status && (
            <p className="text-center text-sm text-red-200">{isFormOk.error}</p>
          )}

          {isFormSubmitted && (
            <p className="text-center text-sm text-green-200">
              Got your message! I&lsquo;ll get back to you in 24 hours
            </p>
          )}
        </div>
        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-1">
          <div data-aos="fade-right" className="w-[100%] md:w-[45%]">
            <label
              htmlFor="full-name"
              className="mb-2 block text-xs font-bold text-gray-400"
            >
              Full Name <span className="asterisk text-red-600">*</span>
            </label>
            <input
              onChange={formHandler}
              value={formData.fullName}
              name="fullName"
              type="text"
              id="full-name"
              className="w-full rounded border-none bg-gray-900 px-3 py-2 placeholder:text-xs focus:outline-1 focus:outline-primary-clr"
              placeholder="John Doe"
            />
          </div>
          <div data-aos="fade-left" className="w-[100%] md:w-[45%]">
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-bold text-gray-400"
            >
              Email <span className="asterisk text-red-600">*</span>
            </label>
            <input
              onChange={formHandler}
              value={formData.email}
              type="email"
              name="email"
              id="email"
              className="w-full rounded border-none bg-gray-900 px-3 py-2 placeholder:text-xs focus:outline-1 focus:outline-primary-clr"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-1"
        >
          <div className="w-[100%] md:w-[45%]">
            <label
              htmlFor="phone"
              className="mb-2 block text-xs font-bold text-gray-400"
            >
              Phone Number
            </label>
            <input
              onChange={formHandler}
              value={formData.phone}
              type="tel"
              name="phone"
              id="phone"
              className="w-full rounded border-none bg-gray-900 px-3 py-2 placeholder:text-xs focus:outline-1 focus:outline-primary-clr"
              placeholder="(999)-999-9999"
            />
          </div>
          <div data-aos="fade-left" className="w-[100%] md:w-[45%]">
            <label
              htmlFor="subject"
              className="mb-2 block text-xs font-bold text-gray-400"
            >
              Subject <span className="asterisk text-red-600">*</span>
            </label>
            <input
              onChange={formHandler}
              value={formData.subject}
              type="text"
              id="subject"
              name="subject"
              className="w-full rounded border-none bg-gray-900 px-3 py-2 placeholder:text-xs focus:outline-1 focus:outline-primary-clr"
              placeholder="A brief about your message"
            />
          </div>
        </div>
        <div data-aos="fade-up" className="mb-4">
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-bold text-gray-400"
          >
            Message <span className="asterisk text-red-600">*</span>
          </label>
          <textarea
            onChange={formHandler}
            value={formData.message}
            id="message"
            name="message"
            rows={4}
            className="w-full rounded border-none bg-gray-900 px-3 py-2 placeholder:text-xs focus:outline-1 focus:outline-primary-clr"
            placeholder="Feel free to share your thoughts with me"
          />
        </div>
        <div className="mt-[3rem] flex justify-center">
          <Link target="_blank" href={'https://github.com/sandeep194920/'}>
            <button
              disabled={!isFormTouched}
              className={`delay-10 items-center justify-center rounded-lg border border-primary-clr px-6 py-1.5 text-xs transition hover:bg-primary-clr sm:text-sm md:text-base ${
                !isFormTouched
                  ? 'cursor-not-allowed border-none bg-gray-200 text-black hover:bg-teal-50'
                  : ''
              }`}
            >
              Send
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default ContactMe
