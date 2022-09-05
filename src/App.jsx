import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  return (
<>

  <form action="" className="info container">
    <h1 style={{
      color:"#fff",
      background:'none',
      textAlign:"center"
    }}>welcome to my simple form! </h1>
    <label htmlFor="" className="lal">Your Email:  
    <input type="email" className="in"  required/></label>
    <label htmlFor="" className="lal">Your Password:<input type="password" className="in" required/></label>
    <label htmlFor="" className="lal">Your Number:<input type="tel" required className="in" /></label>
    <input type="submit" value="submit" className='sub btn btn-success' />
  </form>

</>
  );
}

export default App;
