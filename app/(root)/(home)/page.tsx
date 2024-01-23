import LeftSidebar from "@/components/shared/leftsidebar/LeftSidebar";
import React from "react";

const Home = () => {
  return (
    <div className="flex justify-between">
      <section>
        <LeftSidebar />
      </section>
      <section>All questions</section>
      <section>Top trending category</section>
    </div>
  );
};

export default Home;
