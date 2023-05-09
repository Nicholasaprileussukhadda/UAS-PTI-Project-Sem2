import React from "react";
import GambarKota from "./GambarKota";

function IdGambar() {
  return (
    <div>
      <GambarKota image="jakarta.jpg" id="action-1" />
      <GambarKota image="bandung.jpg" id="action-2" />
      <GambarKota image="surabaya.jpg" id="action-3" />
    </div>
  );
}

export default IdGambar;
