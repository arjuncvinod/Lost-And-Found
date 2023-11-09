import React,{useState,CSSProperties, useEffect} from "react";
import Itemcard from "../components/ItemCard";
import Navbar from "../components/Navbar";
import axios from "axios"
import { api } from "../config";
import HashLoader from "react-spinners/HashLoader";
import AOS from "aos"
import "aos/dist/aos.css"

function Find() {
 const [item, setItem] = useState([]);
 const [loading, setLoading]=useState(true)
 useEffect(()=>{
  AOS.init({duration:750})
 },[])

 const override: CSSProperties = {
   display: "block",
   borderColor: "#fdf004",
   position: "absolute",
   top:"50%",
   left:"50%",
   transform:"translate(-50%,-50%)"
 };
 useEffect(()=>{
   axios
     .get(`${api}/item`)
     .then((res) => {
       setItem(res.data.data);
       setLoading(false)
     })
     .catch((error) => {
       console.log(error);
     });
     },[])
  return (
    <main id="findpage">
      <Navbar />
      <section>
        <h1 className="lfh1">Lost and Found Items</h1>
        <div className="item-container">
          <HashLoader
            color="#fdf004"
            loading={loading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader" 
          />
          {item.reverse().map((findItem, index) => {
            return (
              <Itemcard
                key={index}
                id={findItem._id}
                title={findItem.title}
                description={findItem.description}
                image={findItem.image}
              />
            );
          })}

          <div className="extraItem"></div>
          <div className="extraItem"></div>
          <div className="extraItem"></div>
        </div>
      </section>
    </main>
  );
}

export default Find;
