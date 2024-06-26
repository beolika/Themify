"use client";
import clsx from "clsx";
import NavBar from "./NavBar";

export default function Contact () {
  return (
    <div className="container">
      <NavBar />
      <div className="py-10">
        <div className={clsx("mx-auto min-h-[320px] space-y-10 py-20 text-center", "md:w-[500px]", "xl:w-[800px]")}>
          <h3 className={clsx("text-5xl font-bold", "lg:text-8xl")}>Contact</h3>
          <h4 className={clsx("text-2xl font-semibold", "text-3xl")}>We look forward to hearing from you.</h4>
          <p className={clsx("py-2 text-lg", "md:text-xl", "lg:py-4 lg:text-[22px]")}>
              At Themify, we are committed to providing exceptional customer service. We are here to guide you in your choice, answer your questions
              and offer personalized assistance at every stage of your shopping experience. Your satisfaction and happiness are our top priority.
          </p>
          <button
            onClick={() => window.location.href = "mailto:hello@beolika.com"}
            type="button"
            className={clsx(
              "w-60 bg-white py-3 text-center text-lg font-bold uppercase text-primary transition-all delay-75 hover:scale-105",
              "lg:w-[250px]"
            )}
          >
                Contact
          </button>
        </div>
      </div>
    </div>
  );
}
