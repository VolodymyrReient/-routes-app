import React from "react";

const UnAuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ background: "red" }}>{children}</div>;
};

export default UnAuthLayout;
