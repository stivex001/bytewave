"use client"

import { useFormik } from "formik";
import * as yup from "yup";
import { Spinner } from "../Spinner";

export const SubscribeInCategory = ({
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

  return (
    <form className="flex flex-col w-full" onSubmit={formik.handleSubmit}>
      {status === "error" && (
        <div className="text-xl text-red-400 mt-5">{`Error!: ${message}`}</div>
      )}
      {status === "success" && (
        <div className="text-green-400 mb-2 text-sm">{`Success!: ${message}`}</div>
      )}

      {status === "sending" && (
        <div className="w-full h-40 flex items-center justify-center">
          {" "}
          <Spinner />
        </div>
      )}

      {status !== "sending" && (
        <div className="w-full">
          <input
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your email"
            className="placeholder:text-zinc-800 text-blac text-base font-normal tracking-tight w-full outline-none bg-transparent border border-black h-12 px-6"
          />

          <button
            type="submit"
            disabled={false}
            className="text-white w-full bg-black mt-3 h-10 capitalize"
          >
            subscribe
          </button>
          {formik.errors.email && formik.touched.email && (
            <p className="text-xl text-red-400 mt-1 self-start">
              {formik.errors.email}
            </p>
          )}
        </div>
      )}
    </form>
  );
};
