"use client";
import { useState } from "react";
import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/Components/Icons";
import Head from "next/head";
import Link from "next/link";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { FRONTEND_URL } from "@/untill/frontEnd_Url";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsDialogOpen(true);
    setDialogMessage("Sending...");

    try {
      const res = await fetch(`${FRONTEND_URL}/api/sendemail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setDialogMessage("Email sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setDialogMessage("Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      setDialogMessage("Error sending email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Bishal \ Contact Page</title>
        <meta
          name="Contact page"
          content="Get in touch with Bishal Saud, a skilled Next.js and MERN stack developer. Whether you have questions, project inquiries, or collaboration opportunities, reach out to connect and discuss innovative web development solutions."
        />
      </Head>
      <main className="min-h-screen w-full text-dark dark:text-white ">
        <AnimatedText text="Contact Me" className="!text-4xl my-10" />
        <div className="flex items-start justify-center gap-5 mt-10 w-full h-full shadow-sm lg:flex-col lg:items-center lg:justify-center">
          <div className="rounded-md flex flex-col items-center justify-end gap-4 h-full w-1/2 lg:w-3/4">
            <h2 className="text-4xl">
              Let&apos;s Work together,{" "}
              <span className="text-primary">Bishal</span>
            </h2>
            <div className="flex items-start justify-start flex-col pt-9">
              <p className="text-xl font-semibold">
                Email:{" "}
                <span className="opacity-30 hover:opacity-100 ease-in-out duration-300 transition-opacity hover:text-primary">
                  bishalsaud15@gmail.com
                </span>
              </p>
              <p className="text-xl font-semibold">
                Phone Number:{" "}
                <span className="opacity-30 hover:opacity-100 hover:text-secondary ease-in-out duration-300 transition-opacity">
                  +9779865742290
                </span>
              </p>
            </div>
            <div className="p-6">
              <h2 className="text-2xl py-4 font-mono">Find out Here</h2>
              <div className="flex gap-6 items-center justify-center">
                <Link
                  className="text-4xl cursor-pointer"
                  href="https://github.com/Bishal-Saud"
                  target="_blank"
                >
                  <GithubIcon />
                </Link>
                <Link
                  className="text-4xl cursor-pointer"
                  href="https://www.linkedin.com/in/bishal-saud-6a47ba235/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  className="text-4xl cursor-pointer"
                  href="https://twitter.com/Bishal_Saud05"
                  target="_blank"
                >
                  <TwitterIcon />
                </Link>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="shadow-sm shadow-dark dark:shadow-light dark:text-white text-dark rounded-lg h-full p-10 flex flex-col gap-2 justify-center w-[35%] md:w-[90%] lg:w-[60%]"
          >
            <div className="your name flex gap-5 xl:flex-col">
              <div className="name flex flex-col">
                <label htmlFor="name" className="font-semibold">
                  Your Name{" "}
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 bg-light shadow-dark dark:bg-dark dark:shadow-light outline-none border-none shadow-sm mt-2 rounded-sm"
                  required
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="number flex flex-col">
                <label htmlFor="number" className="font-semibold">
                  Phone Number{" "}
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-dark p-2 bg-light shadow-dark dark:bg-dark dark:shadow-light outline-none border-none shadow-sm mt-2"
                  type="text"
                  placeholder="Enter your number"
                  required
                />
              </div>
            </div>

            <div className="email flex flex-col">
              <label htmlFor="email" className="font-semibold ">
                Email{" "}
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-dark p-2 bg-light shadow-dark dark:bg-dark dark:shadow-light outline-none border-none shadow-sm mt-2"
                required
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="subject flex flex-col">
              <label htmlFor="subject" className="font-semibold ">
                Subject{" "}
              </label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-dark p-2 bg-light shadow-dark dark:bg-dark dark:shadow-light outline-none border-none shadow-sm mt-2"
                required
                type="text"
                placeholder="Enter your subject"
              />
            </div>
            <div className="message flex flex-col">
              <label htmlFor="message" className="font-semibold ">
                Message{" "}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-dark h-28 resize-none p-2 bg-light dark:bg-dark dark:shadow-light shadow-dark outline-none border-none shadow-sm mt-2"
                required
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="shadow-sm hover:shadow-xl transition-all ease-out duration-300 shadow-dark dark:bg-light dark:text-dark dark:shadow-light mt-4 p-2 text-xl font-semibold"
            >
              Submit
            </button>
          </form>
        </div>

        <Dialog
          open={isDialogOpen}
          handler={setIsDialogOpen}
          className="flex items-center justify-center relative  flex-wrap"
        >
          <DialogHeader>Notification</DialogHeader>
          <DialogBody>{isLoading ? "Sending..." : dialogMessage}</DialogBody>
          <DialogFooter>
            <Button
              variant="outlined"
              color="black"
              onClick={() => setIsDialogOpen(false)}
              disabled={isLoading}
            >
              Close
            </Button>
          </DialogFooter>
        </Dialog>
      </main>
    </>
  );
}
