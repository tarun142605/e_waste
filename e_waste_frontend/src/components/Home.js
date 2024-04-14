import React, { useState, useEffect } from 'react';


const Home = () => {

  function TypingEffect() {
    const [text, setText] = useState('');
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
        <div className="min-vh-100 child-1" style={{ backgroundImage: `URL(${process.env.PUBLIC_URL + '/image21.png'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: '0 0 8px 8px white inset', opacity: 0.35, backgroundPosition: 'center' }}>
        </div>
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center child-2">
          <h1 style={{ fontSize: '100px' }}>VirtuGreen</h1>
          <h2>Reduce , Reuse , recycle</h2>
          <h3 className="text-center text-black">{TypingEffect()}</h3>
        </div>
      </div>
      <div className="constainer-fluid">

      </div>
      <div className="container-fluid wrapper" style={{ maxWidth: '95%', marginTop: '2%' }}>
        <div className="form-right" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="form-right-content" style={{ width: '60%', margin: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <hr style={{ width: '25%', border: '2px solid crimson', margin: '8px' }} />
              <h2 className="display-1 text-center my-5" style={{fontFamily:'monospace',color:'darkcyan',fontSize:'28px'}}>Welcome to VirtuGreen</h2>
              <hr style={{ width: '25%', border: '2px solid crimson', margin: '8px' }} />
            </div>
            <p style={{ fontFamily: 'sans-serif', fontSize: '20px' }}>
              VirtuGreen is a pioneering company at the forefront of sustainable solutions, dedicated to revolutionizing the way we approach environmental conservation.
              <br />
              <br />
              We are committed to providing innovative, sustainable solutions that help protect the environment and promote a greener, cleaner future for all. Our mission is to transform trash into technology, turning waste into valuable resources that can be used to power progress and create a more sustainable world for future generations.
              <br />
              <br />
              VirtuGreen is a platform that helps you recycle your e-waste. We
              provide a platform for you to recycle your e-waste in an
              environmentally friendly way. We provide a platform for you to
              recycle your e-waste in an environmentally friendly way.
              <br />
            </p>
          </div>
          <div className="form-right-content" style={{ width: '40%' }}>
            <img src={'/image2.jpg'} style={{ width: '100%' }} />
          </div>
        </div>
      </div>
      <div className="container-fluid wrapper" style={{ maxWidth: '95%', marginTop: '2%' }}>
        <div className="form-right" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className='form-right-content' style={{ width: '40%' }}>
            <img src={'/image1.jpg'} style={{ width: '100%' }} />
          </div>
        <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center',width:'50%' }}>
              <hr style={{ width: '25%', border: '2px solid crimson', margin: '8px' }} />
              <h2 className="display-1 text-center my-5" style={{fontFamily:'monospace',color:'darkcyan',fontSize:'28px'}}>Our Services</h2>
              <hr style={{ width: '25%', border: '2px solid crimson', margin: '8px' }} />
            </div>
            
        </div>
      </div>
    </>
  );
};

export default Home;
