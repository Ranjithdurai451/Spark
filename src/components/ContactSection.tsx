import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
const ContactSection = () => {
  const contactFormSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email({ message: 'Invalid email' }),
    message: z.string().min(1, { message: 'Message is required' }),
  });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function submitHandler(data: z.infer<typeof contactFormSchema>) {
    //Backend call
  }
  return (
    <>
      {/* Hello world */}
      <section
        id="contact"
        className="text-gray-600 body-font relative py-[100px] pb-[150px]"
      >
        <div
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col gap-5 mx-auto"
        >
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="lg:w-1/2 md:w-2/3 mx-auto p-5 md:p-0"
          >
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    name="name"
                    className="bg-gray-300 bg-opacity-50 rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    name="message"
                    className="w-full text-sm bg-gray-300 bg-opacity-50 rounded border border-gray-300  h-[200px] outline-none text-gray-700 p-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={''}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex justify-center py-2">
                <button
                  type="submit"
                  className="px-10 py-2 rounded-lg bg-black text-white hover:bg-opacity-75 duration-300"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 15"
          preserveAspectRatio="none"
          className="absolute bottom-[-1px] h-[25dvh] md:w-full"
        >
          <path
            d="M0 15 Q 50 0 100 15 L 100 15 0 15 Z"
            className="fill-black"
          />
        </svg>
      </section>
    </>
  );
};

export default ContactSection;
