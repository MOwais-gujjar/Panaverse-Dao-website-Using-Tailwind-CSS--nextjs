import React from "react";

export const Button = (props: any) => {
  return (
    <>
      <div
        className="w-[125px] h-[47px] hover:scale-105 flex justify-center duration-500 hover:bg-secondry-100
       text-white rounded-[8px] font-semibold"
      >
        <button className="">{props.text}</button>
      </div>
    </>
  );
};
export default Button;
