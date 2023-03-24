import React from "react";

export const Button = (props: any) => {
  return (
    <>
      <div
        className="w-[150px] h-[57px] flex justify-center duration-500 hover:bg-secondry-100
       text-white rounded-tr-[20px] rounded-bl-[20px] font-semibold"
      >
        <button className="">{props.text}</button>
      </div>
    </>
  );
};
export default Button;
