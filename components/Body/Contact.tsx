import React, { Fragment } from 'react'
import Wrapper from './Helpers/Wrapper'
import Paragraph from './Helpers/Paragraph'
import Link from 'next/link'
import { data } from '@/data'

function ContactMe() {
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
        id="contact-section"
        className="mx-auto mt-9 max-w-[85%] space-y-7 overflow-hidden rounded pb-14 sm:max-w-[80%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%]"
      >
        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-1">
          <div data-aos="fade-right" className="w-[100%] md:w-[45%]">
            <label
              htmlFor="full-name"
              className="mb-2 block text-xs font-bold text-gray-400"
            >
              Full Name
            </label>
            <input
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
              Email
            </label>
            <input
              type="email"
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
              Phone Number (Optional)
            </label>
            <input
              type="tel"
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
              Subject
            </label>
            <input
              type="text"
              id="subject"
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
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full rounded border-none bg-gray-900 px-3 py-2 placeholder:text-xs focus:outline-1 focus:outline-primary-clr"
            placeholder="Feel free to share your thoughts with me"
          />
        </div>
        <div className="mt-[3rem] flex justify-center">
          <Link target="_blank" href={'https://github.com/sandeep194920/'}>
            <button className="delay-10 items-center justify-center rounded-lg border border-primary-clr px-6 py-1.5 text-xs transition hover:bg-primary-clr sm:text-sm md:text-base">
              <div>Send</div>
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default ContactMe
