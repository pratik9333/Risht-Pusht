import React, { useState, useEffect, useContext } from "react";

//components
import Upload from "../Components/Upload";
import Categorycard from "../Components/Categorycard";

//image
import bgimg from "../Assets/Images/bgimage.png";

import { AppContext } from "../Context/Context";

//API
import { getImage } from "../API/Category";
import { CALL_API } from "../Context/action.types";
import { addProduct, deleteProduct, editProduct } from "../API/Product";

const Item = () => {
  const { state, dispatch } = useContext(AppContext);

  const [File, setFile] = useState(null);
  const [Status, setStatus] = useState(false);
  const [EditStatus, setEditStatus] = useState(false);
  const [ProductId, setProductId] = useState();

  const [formdata, setFormData] = useState({
    cid: "",
    scid: "",
    name: "",
    image_url: "",
    price: "",
    in_stock: true,
    short_description: "",
    description: "",
  });

  console.log(formdata);

  const setNameValue = (e) => {
    setFormData({ ...formdata, name: e.target.value });
  };

  const setDescriptionValue = (e) => {
    setFormData({ ...formdata, description: e.target.value });
  };

  const setShortDescriptionValue = (e) => {
    setFormData({ ...formdata, short_description: e.target.value });
  };

  const setCategoryId = (e) => {
    console.log(e.target.value);
    setFormData({ ...formdata, cid: e.target.value });
  };

  const setSubCatId = (e) => {
    setFormData({ ...formdata, scid: e.target.value });
  };

  const setPriceForm = (e) => {
    setFormData({ ...formdata, price: e.target.value });
  };

  const setFileHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (!EditStatus) {
      addProduct(formdata).then((response) => {
        if (response.err) {
          console.log(response.err);
        } else {
          alert("Product Added Successfully");
        }
      });
    } else {
      editProduct({
        pid: ProductId,
        name: formdata.name,
        image_url: formdata.image_url,
        price: formdata.price,
        in_stock: true,
        short_description: formdata.short_description,
        description: formdata.description,
      }).then((response) => {
        if (response.err) {
          alert("Failed to upload category");
        } else {
          alert("Product Edited Successfully");
        }
      });
    }

    setFormData({
      ...formdata,
      cid: "",
      scid: "",
      name: "",
      image_url: "",
      price: "",
      in_stock: true,
      short_description: "",
      description: "",
    });

    setProductId(null);
    setStatus(!Status);
    setEditStatus(!EditStatus);
  };

  const EditHandler = (id, name, img, description, sd, price) => {
    setEditStatus(!EditStatus);
    setProductId(id);
    setFormData({
      ...formdata,
      name: name,
      description: description,
      short_description: sd,
      price: price,
      image_url: img,
    });
    window.scrollTo(0, 0);
  };

  const onDelete = (key) => {
    console.log(key);
    deleteProduct(key).then((response) => {
      if (response) {
        setStatus(!Status);
      } else {
        alert("Deleted UnSuccessfull");
      }
    });
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

  useEffect(() => {
    dispatch({ type: CALL_API });
  }, [Status]);

  return (
    <div>
      <h1 className="bold-text">{!EditStatus ? "Add Item" : "Update Item"}</h1>
      <div className="add-item">
        <Upload
          add="Add Product"
          des="Item Description"
          name={formdata.name}
          price={formdata.price}
          descrp={formdata.description}
          shortdes={formdata.short_description}
          setName={setNameValue}
          setDescription={setDescriptionValue}
          setShortDescription={setShortDescriptionValue}
          setCategoryId={setCategoryId}
          setSubCatId={setSubCatId}
          setPriceForm={setPriceForm}
          setFileHandler={setFileHandler}
          handleForm={handleForm}
          Categories={state}
        />
      </div>
      <div className="modify-delete" style={{ marginTop: "120px" }}>
        <h1 className="bold-text">MODIFY/DELETE ITEM</h1>
        <div className="row g-4 text-center">
          {state.Products.Products
            ? state.Products.Products.map((category, index) => (
                <div className="col-md-2" key={index}>
                  <Categorycard
                    categoryid={category.pid}
                    onDelete={onDelete}
                    name={category.name}
                    img={category.image_url}
                    Description={category.description}
                    short_description={category.short_description}
                    price={category.price}
                    EditHandler={EditHandler}
                  />
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Item;
