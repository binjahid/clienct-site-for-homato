import React, { useEffect } from "react";
// import FirebaseInitialize, { storage } from "../firebase/firebase.init";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const FormContainer = () => {
  const [loadedData, setLoadedData] = React.useState({});
  const [logoFile, setLogoFile] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const OnSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const userObject = {
      title,
      description,
      logoFile,
    };
    fetch("https://cryptic-caverns-04182.herokuapp.com/addGame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    })
      .then((res) => res.json())
      .then((data) => setLoadedData(data));
  };
  const storage = getStorage();
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const onFileChange = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, file.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      getDownloadURL(ref(storage, file.name)).then((url) => {
        setLogoFile(url);
      });
    });
  };
  /* https://cryptic-caverns-04182.herokuapp.com/  */
  return (
    <>
      <form onSubmit={OnSubmit}>
        <input type="file" onChange={onFileChange} />
        <input
          type="text"
          name="username"
          placeholder="title"
          onBlur={handleTitle}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onBlur={handleDescription}
        />
        <button>Submit</button>
        {
          <div>
            <p>{loadedData.title}</p>
            <p>{loadedData.description}</p>
            <p>{loadedData.logoFile}</p>
          </div>
        }
      </form>
    </>
  );
};

export default FormContainer;
