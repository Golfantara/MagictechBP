import { Suspense } from "react";
import { lazily } from "react-lazily";
import { createBrowserRouter } from "react-router-dom";
import IconLoading from "@/components/Loading";

const { Home, Produk, Bpom, Artikel, About, Faq } = lazily(() =>
  import("@/pages")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<IconLoading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/Produk",
    element: (
      <Suspense fallback={<IconLoading />}>
        <Produk />
      </Suspense>
    ),
  },
  {
    path: "/Bpom",
    element: (
      <Suspense fallback={<IconLoading />}>
        <Bpom />
      </Suspense>
    ),
  },
  {
    path: "/Artikel",
    element: (
      <Suspense fallback={<IconLoading />}>
        <Artikel />
      </Suspense>
    ),
  },
  {
    path: "/About",
    element: (
      <Suspense fallback={<IconLoading />}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/Faq",
    element: (
      <Suspense fallback={<IconLoading />}>
        <Faq />
      </Suspense>
    ),
  },
]);

export default router;
