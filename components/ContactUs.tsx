"use client";

import Image from "next/image";
import React, { useState } from "react";
import img1 from "@/images/Mask Group.png";
import img2 from "@/images/Group 5.png";
import img3 from "@/images/Group 77.png";
import { useHeader } from "@/contexts/HeaderContext";
import ReactModal from "react-modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import FormCheckIcon from "@/icons/form-check";
import ContactTextInput from "./form-input/contact-form-input";
import { EmailIcon } from "@/icons/email-icon";
import { PhoneIcon } from "@/icons/phone-icon";
import PersonIcon from "@/icons/form-person";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

// Styles for modal
const customStyles: {} = {
  overlay: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    opacity: "1",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
  },
};

type Props = {};

const ContactUs = (props: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formStep, setFormstep] = useState(1);
  const [formLoaded, setFormLoaded] = useState(false);
  const headerControl = useHeader();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: () => {
      formik.resetForm();
      setModalIsOpen(false);
    },
  });

  const closeModal = () => {
    setModalIsOpen(false);
    headerControl?.setOpenContactModal(false);
  };

  const formClasssnames = clsx({
    "rounded-xl outline-none transition-all ease-in duration-300 no-scrollbar":
      true,
    "opacity-0": !formLoaded,
    "opacity-1": formLoaded,
  });

  return (
    <section
      id="contact"
      className=" w-full  lg:w-5/6 relative mx-auto my-20 bg-conect-section h-[50vh] bg-center bg-no-repeat bg-cover flex items-center justify-center"
    >
      <Image
        src={img2}
        alt=""
        
        className="absolute lg:bottom-0 bottom-10 right-6 lg:w-[153px] w-10 "
      />
      <Image
        src={img3}
        alt=""
        className="absolute lg:top-9 top-16 right-0 lg:right-12 w-5 h-5 lg:w-16 lg:h-16"
      />

      <div className="flex flex-col gap-16 ">
        <p className="text-[#000D2F] font-medium text-sm lg:text-2xl lg:max-w-[544px] max-w-[300px] text-center">
          Do you have a next level idea ? or want to scale up existing products
        </p>
        <button
          onClick={() => setModalIsOpen(true)}
          className="capitalize w-[216px] mx-auto rounded-md bg-[#E9F1FF] h-12 flex items-center justify-center text-[#000D2F] text-base font-semibold"
        >
          connect us
        </button>
      </div>
      <ReactModal
        isOpen={modalIsOpen || headerControl?.openContactModal!}
        onRequestClose={() => closeModal()}
        style={customStyles}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        contentLabel="Contact us form"
        overlayClassName={"h-full left-0 bg-[#0000009b] z-[99999]"}
        className={
          "absolute bg-white h-[95%] w-[95%] sm:w-2/5  overflow-scroll no-scrollbar"
        }
        parentSelector={() => document.querySelector(".root")!}
      >
        {/* <div className="w-ful h-[80%] rounded-xl flex flex-col items-center justify-center">
          {!formLoaded && (
            <p className="text-purple-500 w-full text-end">Please wait...</p>
          )}
          <iframe
            src="https://us8.list-manage.com/contact-form?u=6f6ca4485e89ddd387b05bed3&form_id=de60afcb7f8904d128a1952119eb9721"
            width="100%"
            height="100%"
            className={formClasssnames}
            allowFullScreen
            onLoad={() => setFormLoaded(true)}
          >
            contact form
          </iframe>
        </div> */}

        <div className="w-full  outline-none px-5 py-10 lg:px-20 flex flex-col items-center pb-3">
          <h1 className=" text-[22px] font-bold pb-5 text-[#170f49]">
            Get To Us
          </h1>
          <span className="text-center text-[#9391ac] text-sm font-normal ">
            Please fill the form below to connect with us. feel free to add as
            much as detail as needed
          </span>
          <div className=" w-full rounded-[20px] shadow-[0px_3px_10px_0px_rgba(8,15,52,0.06)] px-7 py-6">
            <div className="border-b border-b-[#D9DBE9]">
              <div className="flex items-center gap-3 justify-center pb-5">
                <div
                  className={`h-5 w-5 flex items-center justify-center text-white font-medium text-[12px] bg-purple-primary rounded-full`}
                >
                  1
                </div>
                <div className="relative w-16 h-1 rounded-[25px] bg-[#EFF0F6]">
                  <div
                    className={`bg-purple-primary h-full rounded-[25px] transition-all ease-in-out duration-500 ${
                      formStep === 1 ? "w-3/6" : "w-full"
                    }`}
                  ></div>
                </div>
                <div
                  className={`h-5 w-5 flex items-center justify-center font-medium text-[12px] rounded-full ${
                    formStep === 2
                      ? "text-white bg-purple-primary"
                      : "text-[#6F6C90] bg-[#EFF0F6]"
                  }`}
                >
                  2
                </div>
              </div>
            </div>
            {formStep === 1 && (
              <div className="w-full flex flex-col gap-6 mt-3 md:mt-8">
                <div>
                  <h2 className="text-[15px] font-bold">Contact details</h2>
                  <p className="text-[#6F6C90] text-[12px]">
                    Please fill in required fields.
                  </p>
                </div>
                <div className="w-full flex flex-col sm:flex-row items-start gap-5">
                  <ContactTextInput
                    label="First Name"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    icon={<PersonIcon />}
                  />
                  <ContactTextInput
                    label="Last Name"
                    name="lastName"
                    id="lastName"
                    placeholder="Carter"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    icon={<PersonIcon />}
                  />
                </div>
                <div className="w-full flex flex-col sm:flex-row items-start gap-3 md:gap-5">
                  <ContactTextInput
                    label="Phone Number"
                    name="phone"
                    id="phone"
                    placeholder="(123) 456 - 7890"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    icon={<PhoneIcon />}
                  />
                  <ContactTextInput
                    label="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    icon={<EmailIcon />}
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-[12] font-medium">Message</label>
                  <div className="h-20 md:h-[100px] w-full rounded-[27px] shadow-[0px_3px_10px_0px_rgba(8,15,52,0.06)] px-5 py-2 flex items-center justify-between gap-2">
                    <textarea
                      className="outline-none h-full w-full max-h-16 min-h-16"
                      placeholder={"Type in your message"}
                      name={"message"}
                      id={"message"}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
              </div>
            )}
            {formStep === 2 && (
              <div className="w-full pt-6 flex flex-col items-center">
                <FormCheckIcon />
                <h1 className="font-bold mt-3">Submit your details</h1>
                <p className="text-[12px] leading-[20px] text-[#6F6C90] w-[315px] text-center mt-1">
                  Please review all the information you previously typed in for
                  errors, and if all is okay, submit your message.
                </p>
                <button
                  type="button"
                  onClick={() => formik.handleSubmit()}
                  className="py-3 px-6 text-white bg-purple-primary text-[12px] rounded-[35px] hover:opacity-50 mt-10"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
          {formStep === 1 && (
            <div className="w-full">
              <div className="w-full flex items-start justify-between gap-10 my-10">
                <div>
                  <p className=" pt-7 text-[12px] text-[#6F6C90]">
                    Need to talk to an agent or you’d prefer to call ?
                  </p>
                  <div className="mt-5"></div>
                  <div className="w-full flex items-center gap-4 text-xs mt-2 pb-5">
                    <div className="flex items-center gap-1">
                      <EmailIcon />
                      <Link
                        href={"mailto:info@bytewave-technologies.com"}
                        className="text-blue-500 nowrap"
                      >
                        info@bytewave-technologies.com
                      </Link>
                    </div>

                    <div className="flex items-center gap-1">
                      <PhoneIcon />
                      <p className="text-blue-500">(234) 80 6001 4698</p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setFormstep(2)}
                  className="py-3 px-6 text-white bg-purple-primary text-[12px] mt-2 rounded-[35px]"
                >
                  Next
                </button>
              </div>
              <div className="w-full px-3   py-7">
                <div className="w-full border-t border-t-gray-400 flex items-center justify-center gap-4 pt-5">
                  <Link
                    href={"https://twitter.com/Bytewave_Tech"}
                    className="flex items-center gap-1 text-xs"
                  >
                    <FaXTwitter />
                    Bytewave_Tech
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/company/bytewave-technologies-limited/"
                    }
                    className="flex items-center gap-1 text-xs"
                  >
                    <FaLinkedin fill={"#5B86E4"} />
                    bytewave-technologies-limited
                  </Link>
                  <Link
                    href={
                      "https://www.facebook.com/profile.php?id=61553742842452"
                    }
                    className="flex items-center gap-1 text-xs"
                  >
                    <FaFacebook fill={"#5B86E4"} />
                    bytewave-technologies
                  </Link>
                </div>
              </div>
            </div>
          )}
          {formStep === 2 && (
            <button
              type="button"
              onClick={() => setFormstep(1)}
              className="py-3 px-6 text-purple-primary border border-purple-primary text-[12px] mt-5 rounded-[35px] hover:opacity-50 self-start"
            >
              Previous Step
            </button>
          )}
        </div>
      </ReactModal>
    </section>
  );
};

export default ContactUs;
