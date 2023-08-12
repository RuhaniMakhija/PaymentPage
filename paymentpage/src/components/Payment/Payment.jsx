import React, {useState} from 'react';
import "./payment.css";
import courses from "../../images/icon1.png";
import timer from "../../images/icon2.png";
import live from "../../images/icon3.png";
import scholarship from "../../images/icon4.png";
import ads from "../../images/icon5.png";
import one from "../../images/one.png";
import two from "../../images/two.png";
import { GrRadialSelected } from 'react-icons/gr';
import { BsCheckCircleFill } from 'react-icons/bs';
import {  MdRadioButtonUnchecked } from 'react-icons/md';
import IconClock from "../../images/IconClock2.png";




const Payment = () => {
  const [select, setSelect] = useState({
    12: true,
    6: false,
    3: false,
})
const [value, setValue] = useState(179)
const [discount, setDiscount] = useState(18401)
const [total, setTotal] = useState(278);
  return (
    
    <div className='pricing-section'>
        <div className='detail-container'>
          <div className='main-heading'>
              <h1 className='heading'>Access curated courses worth <br/> <span className='cross-line'>₹ 18,500</span> at just <span className='blue'>₹ 99</span> per year!</h1>
          </div>

          <div>
            <div className='icon-p-wrap'>
              <img src={courses} className="left-icon" alt='courses'/>
              <p className='left-para'><span className='blue'>100+</span> Job relevant courses </p>
            </div>
            <div className='icon-p-wrap'>
              <img src={timer} className="left-icon" alt='courses'/>
              <p className='left-para'><span className='blue'>20,000+</span> Hours of content </p>
            </div>
            <div className='icon-p-wrap'>
              <img src={live} className="left-icon" alt='courses'/>
              <p className='left-para'><span className='blue'>Exclusive</span> webinar access </p>
            </div>
            <div className='icon-p-wrap'>
              <img src={scholarship} className="left-icon" alt='courses'/>
              <p className='left-para'>Scholarship worth <span className='blue'>₹94,500</span></p>
            </div>
            <div className='icon-p-wrap'>
              <img src={ads} className="left-icon" alt='courses'/>
              <p className='left-para'><span className='blue'>Ad Free</span> learning experience </p>
            </div>
          </div>


        </div>
        <div className='payment-container'>
          <div className='payment-card'>
              <div className='signup-subscribe'>
                  <div className='onetwo-icon'>
                    <img src={one} alt=''/>
                    <p>Sign Up</p>
                  </div>
                  <div className='onetwo-icon'>
                    <img src={two} alt=''/>
                    <p>Subscribe</p>
                  </div>
                 
              </div>
              <div>
                <h1 className='payment-heading'>Select your subcription plan</h1>
              </div>




              <div>
                  <div className='expired month-ex'>
                        <div className='radio-div'>
                          <p className='offer-expired'><span className='span-ex'>Offer expired</span></p>
                          <p><GrRadialSelected size={15} className='select-icons' /> 12 Months Subscription</p>
                        </div>

                        <div>
                          <p className="total_price">Total ₹99</p>
                          <p className="total_month">₹8 /mo</p>
                        </div>
                    </div>


                    <div className={`${select[12] ? 'subscription2' : 'subscription'}`} onClick={() => {
                            setSelect({
                                12: true,
                                6: false,
                                3: false
                            })
                            setTotal(0)

                            setValue(179);
                            setDiscount(18401)
                            setTotal(value + (18500 - discount))
                        }}>
                        <div className='radio-div rem'>
                            <p className='offer-recommended'><span className='span-ex'>Recommended</span></p>
                            <p className='months_p'>
                            <div className={` ${select[12] ? 'checkFill' : 'checkEmpty'}`}>
                                        {select[12] ? <BsCheckCircleFill /> : <MdRadioButtonUnchecked />}
                                    </div>
                              <span className="recommend_text" >12 Months Subscription</span>
                            </p>

                        </div>

                        <div className="pricing_div">
                            <p className="total_price">Total <span className="black">₹179</span></p>
                            <p className="total_month">₹15 /mo</p>
                        </div>

                    </div>

                    <div className={`${select[6] ? 'subscription2' : 'subscription'}`} onClick={() => {
                            setSelect({
                                12: false,
                                6: true,
                                3: false
                            })
                            setTotal(0)

                            setValue(149);
                            setDiscount(18301)
                            setTotal(value + (18500 - discount))


                        }}>
                        <div className='radio-div rem'>
                            
                            <p className='months_p'>
                            <div className={`${select[6] ? 'checkFill' : 'checkEmpty'}`}>
                                    {select[6] ? <BsCheckCircleFill /> : <MdRadioButtonUnchecked />}

                                </div>
                              <span className="recommend_text" >6 Months Subscription</span>
                            </p>

                        </div>

                        <div className="pricing_div">
                            <p className="total_price">Total <span className="black">₹149</span></p>
                            <p className="total_month">₹25 /mo</p>
                        </div>

                    </div>
                    <div className={`${select[3] ? 'subscription2' : 'subscription'}`} onClick={() => {
                            setSelect({
                                12: false,
                                6: false,
                                3: true
                            })
                            setTotal(0)
                            setValue(199);
                            setDiscount(18201)
                            setTotal(value + (18500 - discount))
                        }}>
                        <div className='radio-div rem'>
                            
                            <p className='months_p'>
                            <div className={`${select[3] ? 'checkFill' : 'checkEmpty'}`}>
                                    {select[3] ? <BsCheckCircleFill /> : <MdRadioButtonUnchecked />}

                                </div>
                              <span className="recommend_text" >3 Months Subscription</span>
                            </p>

                        </div>

                        <div className="pricing_div">
                            <p className="total_price">Total <span className="black">₹179</span></p>
                            <p className="total_month">₹33 /mo</p>
                        </div>

                    </div>
                    <hr />
                    <div className="subscription_fee_div">
                            <p className="subscription_fee">Subscription Fee</p>
                            <p className="subscription_price"><span className="black">₹18,500</span></p>
                    </div>
                    <div className="limited_time_div">

                          <div className="limited_time_text_side">

                              <p className="limited_time_offer">Limited time offer</p>

                              <div className="limited_time_text_div2">
                                  <img className="timer_img" src={IconClock} alt="timer" />
                                  <p className="limited_time_date">
                                      Offer valid till 25th March 2023
                                  </p>
                              </div>
                          </div>

                          <div className="limited_time_price_side">
                              <p className="limited_time_price"><span className="black">- ₹{discount}</span></p>
                          </div>

                    </div>
              </div>
              <div className="total_fee_div">
                            <p className="total_fee"><span className="black">Total</span> (Incl. of 18% GST)</p>
                            <p className="total_price"><span className="black">₹{total}</span></p>
                        </div>
                        <div className="btn-container">
                            <button className="cancel-btn">CANCEL</button>
                            <button className="pay-btn">PROCEED TO PAY</button>
                        </div>
                        <img src="https://cdn.razorpay.com/static/assets/merchant-badge/badge-dark.png" className='razorpay-logo' alt="logo" />





          </div>
        </div>
    </div>
  )
}

export default Payment
