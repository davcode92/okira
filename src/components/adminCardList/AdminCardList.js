import React from "react";
import AdminProdCard from "../adminProdCard/AdminProdCard";

const AdminCardList = ({ prod, search, del,edit }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {prod
        .filter((el) =>
          el.name.trim().toUpperCase().includes(search.trim().toUpperCase())
        )
        .map((el) => (
          <AdminProdCard key={el.id} el={el} del={del} edit={edit}/>
        ))}
    </div>
  );
};

export default AdminCardList;
