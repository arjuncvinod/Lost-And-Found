import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { api } from "../config";

export default function Post() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [btn,setBtn]=useState(true)
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const submitData = async (e) => {

    e.preventDefault();
    setBtn(false)
    const formData = new FormData();

    formData.append("name", name);
    formData.append("phoneno", phone);
    formData.append("email", email);
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("file", file);

      await axios
      .post(`${api}/item`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(() => {
        enqueueSnackbar("Item Posted Successfully", { variant: "success" });
        navigate("/find");
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Error", { variant: "error" });
        setBtn(true);
        
      });
  };
  return (
    <main id="postItem">
      <Navbar />
      <section>
        <h1 className="lfh1">Post Found Item</h1>
        <div className="form-container">
          <h2>Please fill all the required fields</h2>
          <form className="form" encType="multipart/form-data">
            <div className="input-container">
              <label htmlFor="">Name </label>{" "}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="">Email </label>{" "}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="">Phone </label>{" "}
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="">Title </label>{" "}
              <input
                type="Text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="">Description </label>{" "}
              <textarea onChange={(e) => setDesc(e.target.value)} value={desc}>
                {desc}
              </textarea>
            </div>
            <div className="input-container">
              <input
                type="file"
                accept="images/*"
                onChange={(e) => setFile(e.target.files[0])}
                name="file"
              />
            </div>
            <div className="input-container">
            {btn?
              (<button type="submit" className="submitbtn" onClick={submitData}>
                Post
              </button>) : (<button className="submitbtn">
                Posting...
              </button>)}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
