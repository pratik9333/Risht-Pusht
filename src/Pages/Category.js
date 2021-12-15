import React, { useState, useContext, useEffect } from "react";

import Categorycard from "../Components/Categorycard";
import Upload from "../Components/Upload";

import { AppContext } from "../Context/Context";
import { ADD_CATEGORY, CALL_API } from "../Context/action.types";

//APIS
import {
  addCategory,
  deleteCategory,
  editCategory,
  getImage,
} from "../API/Category";

const Category = () => {
  const { state, dispatch } = useContext(AppContext);

  const [File, setFile] = useState(null);
  const [Status, setStatus] = useState(false);
  const [EditStatus, setEditStatus] = useState(false);
  const [CategoryId, setCategoryId] = useState();

  const [formdata, setFormData] = useState({
    name: "",
    have_sub: true,
    image_url: "",
    description: "",
  });

  const setNameValue = (e) => {
    setFormData({ ...formdata, name: e.target.value });
  };

  const setDescriptionValue = (e) => {
    setFormData({ ...formdata, description: e.target.value });
  };

  const setFileHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const EditHandler = (id, name, img, description) => {
    setEditStatus(!EditStatus);
    setCategoryId(id);
    setFormData({
      ...formdata,
      name: name,
      description: description,
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
    deleteCategory(key).then((response) => {
      if (response) {
        setStatus(!Status);
      } else {
        alert("Deleted UnSuccessfull");
      }
    });
  };

  console.log(formdata);

  const handleForm = (e) => {
    e.preventDefault();

    if (!EditStatus) {
      addCategory(formdata).then((response) => {
        if (response.err) {
          return alert("Failed to Add Category...");
        } else {
          alert("Category Added Successfully!");
        }
      });
    } else {
      editCategory({
        cid: CategoryId,
        name: formdata.name,
        image_url: formdata.image_url,
        description: formdata.description,
      }).then((response) => {
        if (response.err) {
          alert("Failed to upload category");
        } else {
          alert("Category Edited Successfully");
        }
      });
    }

    setFormData({
      ...formdata,
      name: "",
      description: "",
      image_url: "",
    });
    setEditStatus(!EditStatus);
    setStatus(!Status);
  };

  useEffect(() => {
    dispatch({ type: CALL_API });
  }, [Status]);

  return (
    <div>
      <h1 className="bold-text">
        {EditStatus ? "Edit Category" : "Add Category"}
      </h1>
      <div className="add-category">
        <Upload
          add={EditStatus ? "Edit Name" : "Add Name"}
          name={formdata.name}
          descrp={formdata.description}
          des={EditStatus ? "Edit Description" : "Add Description"}
          setName={setNameValue}
          setDescription={setDescriptionValue}
          setFileHandler={setFileHandler}
          pname={EditStatus ? "Edit Category" : "Add Category"}
          handleForm={handleForm}
        />
      </div>
      {state.Categories.Categories ? (
        <>
          <div className="modify-delete" style={{ marginTop: "120px" }}>
            <h1 className="bold-text">MODIFY/DELETE CATEGORY</h1>
            <div className="row g-4 text-center">
              {state.Categories.Categories
                ? state.Categories.Categories.map((category, index) => (
                    <div className="col-md-2" key={index}>
                      <Categorycard
                        categoryid={category.cid}
                        onDelete={onDelete}
                        name={category.name}
                        img={category.url}
                        EditHandler={EditHandler}
                        Description={category.description}
                      />
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </>
      ) : (
        <h2 className="mt-5 text-center" style={{ marginTop: "100px" }}>
          No Categories
        </h2>
      )}
    </div>
  );
};

export default Category;
