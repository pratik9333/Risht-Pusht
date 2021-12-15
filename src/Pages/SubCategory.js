import React, { useState, useContext, useEffect } from "react";

import Categorycard from "../Components/Categorycard";

import Upload from "../Components/Upload";

import { AppContext } from "../Context/Context";
import { ADD_SUBCATEGORY } from "../Context/action.types";

//APIS
import {
  addSubCategory,
  getAllSubCategory,
  deleteSubCategory,
  getImage,
  editSubCategory,
} from "../API/Category";
import { useParams } from "react-router";

const SubCategory = () => {
  const { categoryid } = useParams();
  const { state, dispatch } = useContext(AppContext);
  const [File, setFile] = useState(null);
  const [Status, setStatus] = useState(false);
  const [EditStatus, setEditStatus] = useState(false);

  const [formdata, setFormData] = useState({
    name: "",
    cid: categoryid,
    scid: "",
    image_url: "",
  });

  const setNameValue = (e) => {
    setFormData({ ...formdata, name: e.target.value });
  };

  console.log(formdata);

  const setFileHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const EditHandler = (id, name, img) => {
    setEditStatus(!EditStatus);
    setFormData({
      ...formdata,
      scid: id,
      name: name,
      image_url: img,
    });
    window.scrollTo(0, 0);
  };

  if (File) {
    const image = new FormData();

    image.append("file", File);

    getImage(image).then((response) => {
      setFormData({
        ...formdata,
        image_url: response.url,
      });
      alert("Image Uploaded Successfully..");
    });

    setFile(null);
  }

  const onDelete = (key) => {
    console.log(key);
    deleteSubCategory(key).then((response) => {
      if (response) {
        console.log(response);
        setStatus(!Status);
      } else {
        alert("Deleted Successfull");
      }
    });
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (!EditStatus) {
      addSubCategory({
        name: formdata.name,
        cid: formdata.cid,
        image_url: formdata.image_url,
      }).then((response) => {
        if (response.err) {
          return alert("Failed to Add Category...");
        } else {
          alert("SubCategory Added Successfully!");
        }
      });
    } else {
      editSubCategory({
        scid: formdata.scid,
        name: formdata.name,
        image_url: formdata.image_url,
      }).then((response) => {
        if (response.err) {
          alert("Failed to upload category");
        } else {
          alert("SubCategory Edited Successfully");
        }
      });
    }

    setFormData({
      ...formdata,
      name: "",
      description: "",
      image_url: "",
    });
    setStatus(!Status);
    setEditStatus(!EditStatus);
  };

  useEffect(() => {
    //getAllSubCategory
    getAllSubCategory(formdata.cid).then((response) => {
      if (response.err) {
        return alert("Cannot Fetch Categories");
      } else {
        dispatch({ type: ADD_SUBCATEGORY, payload: response });
      }
    });
  }, [Status]);

  return (
    <div>
      {true ? (
        <>
          <h1 className="bold-text">
            {EditStatus ? "Edit SubCategory" : "Add SubCategory"}
          </h1>
          <div className="add-category">
            <Upload
              add={EditStatus ? "Edit Name" : "Add Name"}
              name={formdata.name}
              setName={setNameValue}
              setFileHandler={setFileHandler}
              pname={EditStatus ? "Edit Sub Category" : "Add Sub Category"}
              handleForm={handleForm}
            />
          </div>
          <div className="modify-delete" style={{ marginTop: "120px" }}>
            <h1 className="bold-text">MODIFY/DELETE SUBCATEGORY</h1>
            <div className="row g-4 text-center">
              {state.SubCategories.Sub_Categories
                ? state.SubCategories.Sub_Categories.map((category, index) => (
                    <div className="col-md-2" key={index}>
                      <Categorycard
                        categoryid={category.scid}
                        onDelete={onDelete}
                        name={category.name}
                        img={category.url}
                        EditHandler={EditHandler}
                      />
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </>
      ) : (
        "Loading...."
      )}
    </div>
  );
};

export default SubCategory;
