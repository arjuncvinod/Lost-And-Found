import Navbar from "../components/Navbar"
// import Form from "../components/Form"

export default function Post(){
    return (
      <main id="postItem">
        <Navbar />
        <section >
        <h1 className="lfh1">Post Found Item</h1>
        <div className="form-container">
          <h2>Please fill all the required fields</h2>
          <form action="">
            <label htmlFor="">Name </label> <input type="text" />
            <label htmlFor="">Email </label> <input type="email" />
            <label htmlFor="">Phone </label> <input type="tel" />
            <label htmlFor="">Title </label> <input type="Text" />
            <label htmlFor="">Description </label> <textarea></textarea>
            <input type="file" />
            <input type="submit" />
          </form>
        </div>
        </section>
      </main>
    );
}