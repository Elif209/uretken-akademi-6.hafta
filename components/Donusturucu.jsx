import React, { useState } from 'react';

function Donusturucu() {
  const [celsiusValue, setCelsiusValue] = useState('');
  const [kelvinResult, setKelvinResult] = useState('');
  const [fahrenhaytResult, setFahrenhaytResult] = useState('');

  const onChange = (e) => setCelsiusValue(e.target.value);

  function handleClickKelvin() {
    console.log("Kelvin'e çevrildi");
    const celsius = parseFloat(celsiusValue);
    if (!isNaN(celsius)) {
      const kelvin = celsius + 273.15;
      setKelvinResult(`Kelvin: ${kelvin.toFixed(2)}`);
      console.log('Kelvin: ', kelvin.toFixed(2));
    } else {
      console.error('Geçersiz giriş. Lütfen sayı giriniz.');
    }
  }

  function handleClickFahrenhayt() {
    console.log("Fahrenhayt'e çevrildi");
    const celsius = parseFloat(celsiusValue);
    if (!isNaN(celsius)) {
      const fahrenheit = (celsius * 9/5) + 32;
      setFahrenhaytResult(`Fahrenheit: ${fahrenheit.toFixed(2)}`);
      console.log('Fahrenheit: ', fahrenheit.toFixed(2));
    } else {
      console.error('Geçersiz giriş. Lütfen sayı giriniz.');
    }
  }

  return (
    <div>
      <input id='input'
        type="number"
        className='input-celsius'
        placeholder="C"
        value={celsiusValue}
        onChange={onChange}
      />
      <br />
      <button id='kelvin' onClick={handleClickKelvin}>Kelvin'e Çevir</button>
      <br />
      <button id='fahrenhayt' onClick={handleClickFahrenhayt}>Fahrenhayt'a Çevir</button>
      
      <div>
        <p id='kelvinsonuc'>{kelvinResult} Kelvin</p>
        <p id='fahrenhaytsonuc'>{fahrenhaytResult} Fahrenhayt</p>
      </div>
    </div>
  );
}

export default Donusturucu;
