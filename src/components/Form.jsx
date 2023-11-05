export default function Form(){
    return (
      <div className="form-container">
        <h1>Please fill all the required fields</h1>
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
    );
}