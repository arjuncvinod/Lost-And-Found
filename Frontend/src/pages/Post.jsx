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
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();


  // function handleSubmit(){
  // const data={
  //   name:name,
  //   phoneno:phone,
  //   email:email,
  //   title:title,
  //   description:desc,
  //   image:image
  // }

  const submitData= async (e)=>{
    e.preventDefault();
    const formData = new FormData()

    formData.append("name",name)
    formData.append("phoneno",phone)
    formData.append("email",email)
    formData.append("title",title)
    formData.append("description",desc)
    formData.append("file",file)

    const result=await axios.post(`${api}/item`,formData,{
      headers:{"Content-Type":"multipart/form-data"},
    }).then(()=>{
  console.log(result);
      enqueueSnackbar("Item Posted Successfully", { variant: "success" })
      navigate("/find")
       
     })
     .catch((err) => {
       console.log(err);
       enqueueSnackbar("Error", { variant: "error" });
     });
    }




  //  axios
  //    .post(`${api}/item`, data)
  //    .then(() => {
  //      enqueueSnackbar("Item Posted Successfully", { variant: "success" });
  //      navigate("/find");
  //    })
  //    .catch((err) => {
  //      console.log(err);
  //      enqueueSnackbar("Error", { variant: "error" });
  //    });


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
              {/* <input type="file" accept="images/*" onChange={(e)=>setImage(e.target.value)} /> */}
              <input
                type="file"
                accept="images/*"
                onChange={(e) => setFile(e.target.files[0])}
                name="file"
              />
            </div>
            <div className="input-container">
              <button type="submit" className="submitbtn" onClick={submitData}>
                Post
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
