import React from "react";
import Image from "next/image";
import carou1 from "../public/carou1.png";

function Carousel() {
  return (
    <div>
      <div className=" relative h-full w-full overflow-hidden">
        <div className=" h-full w-full">
          <Image src={carou1} className=" w-full" alt="Wild Tech" priority />
        </div>
      </div>
    </div>
  );
}
export default Carousel;
