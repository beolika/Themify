import React, { Suspense } from "react";
import Footer from "@/app/components/Footer";
import Loading from "./loading";
import Collections from "@/app/components/Collections";
import NavBar from "@/app/components/NavBar";
import { getAllProducts } from "../utils/api/api";
import { ProductDto } from "../utils/api/dto/productDto";
import { errorResponse } from "../utils/utils";

export const metadata = {
  title: "Themes",
  description: "Library of high-conversion, attractive and trendy themes",
  alternates: {
    canonical: `/themes`
  }
};

export default async function AllCollections() {
  const allProducts: ProductDto[] = await getAllProducts().catch((err) => {
    errorResponse(err);
  });

  return (
    <main>
      <div className="container">
        <NavBar />
      </div>
      <Suspense fallback={<Loading />}>
        <Collections data={allProducts} />
        <Footer />
      </Suspense>
    </main>
  );
}
