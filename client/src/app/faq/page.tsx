import React, { Suspense } from "react";
import { getProductFaqs } from "@/app/utils/api/api";
import { FaqDto } from "@/app/utils/api/dto/faqDto";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import clsx from "clsx";
import FAQ from "@/app/components/Faq";
import Loading from "./loading";
import { errorResponse } from "../utils/utils";

export const metadata = {
  title: "FAQ",
  description: "Some questions asked by our customers",
  alternates: {
    canonical: `/faq`
  }
};

export default async function FaqPages() {
  const faq: FaqDto = await getProductFaqs("shopify").catch((err) => {
    errorResponse(err);
  });
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <div className="container">
          <NavBar />
          <div className="py-10">
            <div className={clsx("mx-auto min-h-[320px] space-y-10 py-20 text-center", "md:w-[500px]", "xl:w-[800px]")}>
              <h3 className={clsx("text-5xl font-bold", "lg:text-8xl")}>Frequently Asked Questions</h3>
              <p className={clsx("py-2 text-lg", "md:text-xl", "lg:py-4 lg:text-[22px]")}>Some questions asked by our customers</p>
            </div>
            {faq && <FAQ data={faq} />}
          </div>
        </div>
        <Footer />
      </Suspense>
    </main>
  );
}
