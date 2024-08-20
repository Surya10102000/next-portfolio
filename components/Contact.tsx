"use client";
type dataI = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message: string, type: string) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: dataI) => {
    const { name, email, subject, message } = data;

    try {
      setDisabled(true);
      const templateParams: dataI = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATEE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_ID as string
      );
      toggleAlert("Form submission was successfull", "danger");
    } catch (e) {
      console.log(e);
      toggleAlert("Uh oh, something went wrong. ", "danger");
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Get in touch
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            For information about me or my work, feel free to reach out!
          </p>
          <form
            action="#"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-8"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                  maxLength: 30,
                })}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="email@email.com"
                required
              />
              {errors?.email && (
                <span className="text-sm text-red-600 dark:text-red-400">
                  {errors?.email?.message?.toString()}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="name"
                id="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Email"
                required
              />
              {errors?.name && (
                <span className="text-sm text-red-600 dark:text-red-400">
                  {errors?.name?.message?.toString()}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject", {
                  required: {
                    value: true,
                    message: "Subject is required",
                  },
                  maxLength: 50,
                })}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
              {errors?.subject && (
                <span className="text-sm text-red-600 dark:text-red-400">
                  {errors?.subject?.message?.toString()}
                </span>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                {...register("message", {
                  required: {
                    value: true,
                    message: "Message is required ",
                  },
                })}
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
              {errors?.message && (
                <span className="text-sm text-red-600 dark:text-red-400">
                  {errors?.message?.message?.toString()}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-700 sm:w-fit hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
          {alertInfo.display && (
            <div
              className={`fixed top-4 right-4 p-4 rounded-md shadow-lg ${
                alertInfo.type === "success"
                  ? "bg-red-100 text-red-800"
                  : "bg-green-100 text-green-800"
              }`}
              role="alert"
            >
              {alertInfo.message}
              <button
                type="button"
                className="absolute top-2 right-2 p-1 text-lg font-semibold text-gray-500 hover:text-gray-700"
                aria-label="Close"
                onClick={() =>
                  setAlertInfo({ display: false, message: "", type: "" })
                } // Clear the alert when close button is clicked
              >
                &times;
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default Contact;
