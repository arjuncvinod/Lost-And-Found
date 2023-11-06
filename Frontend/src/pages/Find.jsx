import React,{useState} from "react";
import Itemcard from "../components/ItemCard";
import Navbar from "../components/Navbar";
import axios from "axios"
import { api } from "../config";

function Find() {
 const [item, setItem] = useState([]);
   axios
     .get(`${api}/item`)
     .then((res) => {
       setItem(res.data.data);
     })
     .catch((error) => {
       console.log(error);
     });
  return (
    <main id="findpage">
      <Navbar />
      <section>
        <h1 className="lfh1">Lost and Found Items</h1>
        <div className="item-container">
          {item.reverse().map((findItem, index) => {
            return (
              <Itemcard
                key={index}
                id={findItem._id}
                title={findItem.title}
                description={findItem.description}
    
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
