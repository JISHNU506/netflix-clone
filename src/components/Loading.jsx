
import React, { useState } from "react";


import ScaleLoader from "react-spinners/ScaleLoader";

export default function Loading() {
  let [loading, setLoading] = useState(true);
  return (
    <div>
      <div style={{ marginTop: "150px" }}>
        <div className="sweet-loading text-center">
          <ScaleLoader color="red" loading={loading} css="" size={150} />
        </div>
      </div>
    </div>
  );
}
