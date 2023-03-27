import React, { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-screen-lg md:px-8 px-4 mx-auto">{children}</div>;
};

export default Wrapper;
