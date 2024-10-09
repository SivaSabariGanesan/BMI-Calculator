import { useState } from 'react';
import './App.css';

function App() {
  const [SP, setSP] = useState("");
  const [GST, setGST] = useState("");
  const [value, setValue] = useState("");
  const [Error, setError] = useState("");

  const Clear = () => {
    setGST("");
    setSP("");
    setValue("");
    setError("");
  };

  const Calculategst = () => {
    const validSP = /^[0-9]+(\.[0-9]*)?$/.test(SP);
    const validGST = /^[0-9]+(\.[0-9]*)?$/.test(GST);

    if (validSP && validGST) {
      const gstValue = (SP * GST) / 100;
      setValue(gstValue.toFixed(2));
      setError("");
    } else {
      setGST("");
      setSP("");
      setValue("");
      setError("Please enter numeric value");
    }
  };

  return (
    <>
      <div className='GST'></div>
      <div className='Box'>
        <h1>GST CALCULATOR</h1>
      </div>
      {Error && <p className='error'>{Error}</p>}
      <div className='input'>
        <label htmlFor='SP'>Selling Price</label>
        <input type='text' id='SP' value={SP} onChange={(e) => setSP(e.target.value)} />
      </div>
      <div className='input'>
        <label htmlFor='gst'>Good Service Tax</label>
        <input type='text' id='gst' value={GST} onChange={(e) => setGST(e.target.value)} />
      </div>
      <div className='button'>
        <button onClick={Calculategst}>Calculate GST</button>
        <button onClick={Clear}>Clear</button>
      </div>
      {value && (
        <div className='result-container'>
          <div className='result'>
            <p>GST is {value}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
