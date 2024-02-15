"use client";

import { Formik, useFormik } from "formik";
import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import * as yup from "yup";

type Props = {};

const CustomForm = ({
  status,
  message,
  onValidated,
}: {
  status: "error" | "success" | "sending" | null;
  message: string | Error | null;
  onValidated: (data: any) => any;
}) => {
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      onValidated({ MERGE0: values.email });
    },
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <form
      className="flex flex-col w-[80%] mx-auto"
      onSubmit={formik.handleSubmit}
    >
      {status === "sending" && <div className="text-sm mt-5">sending...</div>}
      {status === "error" && (
        <div className="text-xl text-red-400 mt-5">{`Error!: ${message}`}</div>
      )}
      {status === "success" && (
        <div className="text-xl text-green-400 mt-5">{`Success!: ${message}`}</div>
      )}
      <h1 className="text-white text-xl md:text-[32px] font-semibold leading-tight tracking-wider my-2 md:my-6">
        Sign Up for Our Newsletters{" "}
      </h1>
      <span className="text-white text-[10px] md:text-[17px] font-semibold md:font-normal tracking-tight mb-6">
        Get notified of the best deals on our WordPress themes
      </span>

      <div className="bg-white rounded-[5px] justify-between items-center inline-flex pl-6 pr-2 md:py-2 py-5 hover:bg-opacity-40 border border-white transition mb-[11px]">
        <input
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your email"
          className="  placeholder:text-zinc-800  md:text-black md:placeholder:text-black md:text-opacity-80 text-base font-normal tracking-tight w-full outline-none bg-transparent"
        />
        <button
          type="submit"
          disabled={false}
          className="hidden text-black text-xl font-normal tracking-tight bg-white rounded-[5px] shadow-inner border border-black justify-center items-center md:inline-flex px-[50px] py-4"
        >
          {status === "sending" ? "Sending..." : "Subscribe"}
        </button>
      </div>
      <button
        type="submit"
        disabled={false}
        className="md:hidden text-white text-[11px] font-semibold tracking-tight bg-indigo-500 rounded-[5px] justify-center items-center inline-flex w-1/2 mx-auto py-2 my-4"
      >
        {status === "sending" ? "Sending..." : "Subscribe"}
      </button>
      {formik.errors.email && formik.touched.email && (
        <p className="text-xl text-red-400 mt-1 self-start">
          {formik.errors.email}
        </p>
      )}
      <div className="flex items-center gap-3">
        <label className="flex md:items-center">
          <input
            type="checkbox"
            name=""
            id=""
            className="hidden"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="w-[20px] h-[20px] border-2 border-white rounded-md flex items-center justify-center mr-2 cursor-pointer">
            {isChecked && (
              <svg
                className="w-[20px] h-[20px] bg-green-500 text-white absolute rounded-md flex justify-center items-center font-extrabold"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </span>
          <span className="text-white text-[10px] font-semibold md:text-base md:font-normal tracking-tight md:whitespace-nowrap">
            By checking this box, you have read and agreed to our Terms &
            Conditions for a better experience.
          </span>
        </label>
      </div>
    </form>
  );
};

const CTA = (props: Props) => {
  const postUrl =
    "https://bytewave-technologies.us8.list-manage.com/subscribe/post?u=6f6ca4485e89ddd387b05bed3&id=caff34d3e2";

  return (
    <section className="bg-cta bg-cover bg-no-repeat object-cover bg-center h-[300px] md:h-[400px] flex flex-col justify-center">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData: any) => subscribe(formData)}
          />
        )}
      />
    </section>
  );
};

export default CTA;
