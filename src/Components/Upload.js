import React, { useContext, useEffect, useState } from "react";
import { getAllSubCategory } from "../API/Category";

import vector from "../Assets/Images/Vector.png";
import { AppContext } from "../Context/Context";

const Upload = ({
  setName,
  setDescription,
  setShortDescription,
  setCategoryId,
  setSubCatId,
  setPriceForm,
  setFileHandler,
  add,
  handleForm,
  des,
  name,
  descrp,
  price,
  shortdes,
}) => {
  const { state, dispatch } = useContext(AppContext);

  const [subcat, setSubCat] = useState([]);

  const getCatId = (e) => {
    setCategoryId(e);

    //getAllSubCategory
    getAllSubCategory(e.target.value).then((response) => {
      if (response.err) {
        return alert("Cannot Fetch Categories");
      } else {
        setSubCat(response.Sub_Categories);
      }
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleForm}>
        <div className="row align-items-center justify-content-around">
          <div className="col-md-5 pt-4 pb-4">
            <div
              style={{ borderStyle: "dashed", padding: "50px" }}
              className="Card  d-flex flex-column text-center align-items-center"
            >
              <img src={vector} className="imgvec" alt="" />
              <input
                type="file"
                name="uploadimage"
                className="custom-file-input"
                onChange={setFileHandler}
              />
              <span className="upload">Upload File</span>
            </div>
          </div>
          <div className="col-md-5">
            <div className="note">
              <p>Add an Image of 45px X 45px dimension for best visibility</p>
            </div>
            <div className="input-category-name">
              <input
                type="text"
                placeholder={add}
                value={name}
                onChange={setName}
                className="category"
                required
              />
              {des ? (
                <input
                  type="text"
                  placeholder={des}
                  value={descrp}
                  onChange={setDescription}
                  className="category"
                  required
                />
              ) : (
                ""
              )}
              {setSubCatId ? (
                <input
                  type="text"
                  placeholder="Enter Short Description"
                  value={shortdes}
                  onChange={setShortDescription}
                  className="category"
                  required
                />
              ) : (
                ""
              )}
              {setSubCatId ? (
                <input
                  type="text"
                  placeholder="Enter Price"
                  value={price}
                  onChange={setPriceForm}
                  className="category"
                  required
                />
              ) : (
                ""
              )}

              {setSubCatId ? (
                <select
                  onChange={getCatId}
                  placeholder="Select categories"
                  className="category"
                >
                  <option value="select">Select Category</option>
                  {state.Categories.Categories
                    ? state.Categories.Categories.map((category, index) => (
                        <option id={index} value={category.cid}>
                          {category.name}
                        </option>
                      ))
                    : ""}
                </select>
              ) : (
                ""
              )}

              {setCategoryId ? (
                <select
                  className="form-control"
                  placeholder="Select Subcategory"
                  onChange={setSubCatId}
                  className="category"
                >
                  <option value="select">Select Sub Category</option>
                  {subcat
                    ? subcat.map((subcat) => (
                        <option value={subcat.scid}>{subcat.name}</option>
                      ))
                    : ""}
                </select>
              ) : (
                ""
              )}
            </div>
            <div className="add-category">
              <button type="submit">{add}</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Upload;
