import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Loading() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <ClipLoader
        color={color}
        loading={loading}
        css={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
