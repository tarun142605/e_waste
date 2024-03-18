import React, { usestate, useEffect } from 'react';


const Home = () => {

  function TypingEffect() {
    const [text, setText] = usestate('');
    const fullText = 'Transforming Trash into Technology: Together, We Power Progress!';
  
    useEffect(() => {
      let timer = setInterval(() => {
        setText((prevText) => {
          if (prevText.length === fullText.length) {
            return '';
          } else {
            return fullText.substr(0, prevText.length + 1);
          }
        });
      }, 110); // Change speed of typing here
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return <div>{text}</div>;
  }

  return (
    <>
    <div className="container-fluid parent">
      <div className="min-vh-100 child-1" style={{backgroundImage:`URL(${process.env.PUBLIC_URL+'/cor-img1.jpg'})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',boxShadow:'0 0 8px 8px white inset', opacity:0.4}}>
      </div>
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center child-2">
        <h1>SustainableTechSolutions</h1>
        <h3 className="text-center text-black">{TypingEffect()}</h3>
    </div>
    </div>
    <div className="constainer-fluid">
      
    </div>
    <div className="container-fluid wrapper" style={{maxWidth:'95%', marginTop:'2%'}}>
      <div className="form-right min-vh-100">
      <h2 className="display-1 text-center my-5">Welcome to SustainableTechSolutions</h2>
      <p className="lead">E-waste is a popular, informal name for electronic products nearing the end of their "useful life." Computers, televisions, VCRs, stereos, copiers, and fax machines are common electronic products. Many of these products can be reused, refurbished, or recycled.</p>
      <p className="lead">With the passage of the Electronic Waste Recycling Act of 2003, certain portions of the electronic waste stream are defined and the systems to recover and recycle them will be administratively regulated beyond the universal waste rules that apply to material handling. For this reason, the state of California has specified that e-waste can not be disposed of with regular trash.</p>
      <p className="lead">California's Department of Toxic Substances Control (DTSC) has established regulations to manage hazardous waste, including e-waste. The regulations are designed to ensure that hazardous waste is managed properly and that it does not pose a threat to human health or the environment. The regulations also require that hazardous waste be properly tracked from the point of generation to the point of final disposition. The regulations also require that hazardous waste be properly tracked from the point of generation to the point of final disposition. The regulations also require that hazardous waste be properly tracked from the point of generation to the point of final disposition. The regulations also require that hazardous waste be properly tracked from the point of generation to the point of final disposition.</p>
    </div>
    </div>
    </>
  );
};

export default Home;
