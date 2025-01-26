import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { ReactNode } from "react";

type mainType = {
  children: ReactNode;
};
const Main = (props: mainType) => {
  return (
    <div className="size-full border-2 shadow-2xl">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Main;
