import Navbar from "../components/Navbar";
// import Form from "../components/Form"

export default function Post() {
  return (
    <main id="postItem">
      <Navbar />
      <section>
        <h1 className="lfh1">Post Found Item</h1>
        <div className="form-container">
          <h2>Please fill all the required fields</h2>
          <form action="">
            <div className="input-container">
              <label htmlFor="">Name </label> <input type="text" />
            </div>
            <div className="input-container">
              <label htmlFor="">Email </label> <input type="email" />
            </div>
            <div className="input-container">
              <label htmlFor="">Phone </label> <input type="tel" />
            </div>
            <div className="input-container">
              <label htmlFor="">Title </label> <input type="Text" />
            </div>
            <div className="input-container">
              <label htmlFor="">Description </label> <textarea></textarea>
            </div>
            <div className="input-container">
              <input type="file" />
            </div>
            <div className="input-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
