import Itemcard from "../components/ItemCard";
import Navbar from "../components/Navbar";

function Find() {
  return (
    <main id="findpage">
      <Navbar />
      <section>
        <h1 className="lfh1">Lost and Found Items</h1>
        <div className="item-container">
          <Itemcard />
          <Itemcard />
          <Itemcard />
          <Itemcard />
          <Itemcard />
          <div className="extraItem"></div>
          <div className="extraItem"></div>
          <div className="extraItem"></div>
        </div>
      </section>
    </main>
  );
}

export default Find;
