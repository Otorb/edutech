import { useState, useEffect } from "react";
import style from "../styles/slide.module.css";

const SlideLogin = () => {
  const [select, setSelect] = useState(1);

  useEffect(() => {
    const intervalo = setInterval(() => {    
      setSelect(prevSelect => (prevSelect === 3 ? 1 : prevSelect + 1));
    }, 5000); 
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className={style.containerSlider}>
      <div className={style.slider}>
        <input type="radio" name="slider" id="slideOne" checked={select === 1} readOnly />
        <input type="radio" name="slider" id="slideTwo" checked={select === 2} readOnly/>
        <input type="radio" name="slider" id="slideThree" checked={select === 3} readOnly/>

        <div className={style.buttons}>
          <label htmlFor="slideOne" onClick={() => setSelect(1)}></label>
          <label htmlFor="slideTwo" onClick={() => setSelect(2)}></label>
          <label htmlFor="slideThree" onClick={() => setSelect(3)}></label>
        </div>

        <div className={style.contentSlider}>
          {select === 1 && (
            <div className={style.firstslide}>
              <img src="https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
          )}
          {select === 2 && (
            <div className={style.secondslide}>
              <img src="https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
          )}
          {select === 3 && (
            <div className={style.thirdslide}>
              <img src="https://images.pexels.com/photos/4498037/pexels-photo-4498037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideLogin;