import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../Container";
import MainButton from "../MainButton";
import { FaCreditCard, FaLock, FaCheckCircle, FaSpinner, FaShieldAlt, FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { total, games } = location.state || { total: 0, games: [] };

  const [step, setStep] = useState(1); // 1: Form, 2: Processing, 3: Success
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleProcessPayment = () => {
    try{
      axios.post(`${import.meta.env.VITE_API_LINK}/api/addtolib`,{} , {withCredentials : true})
    .then((res)=> alert(res.data.message))
    }
    catch(err){
      alert("Something went wrong")
    }
    setStep(2);
    setTimeout(() => {
      setStep(3);
    }, 2500);
  };

  const handleComplete = () => {
    navigate("/library");
  };

  if (!total && step !== 3) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-red-500 font-bold mb-4 uppercase">Cart Data Not Found</p>
          <MainButton text="Back to Cart" onClick={() => navigate("/cart")} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 font-Jakarta">
      <Container className="max-w-4xl">
        {step === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Box: Payment Details */}
            <div className="space-y-6">
              <button 
                onClick={() => navigate("/cart")}
                className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase"
              >
                <FaArrowLeft /> Back to Cart
              </button>

              <h1 className="text-3xl font-black uppercase">Checkout</h1>

              <div className="space-y-4">
                <p className="text-xs font-bold text-gray-400 uppercase">Payment Method</p>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setPaymentMethod("card")}
                    className={`flex-1 p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${paymentMethod === 'card' ? 'border-[#00F2FF] bg-[#00F2FF]/5' : 'border-white/5 bg-[#111317]'}`}
                  >
                    <FaCreditCard className={paymentMethod === 'card' ? 'text-[#00F2FF]' : 'text-gray-500'} />
                    <span className="text-[10px] font-bold">CREDIT CARD</span>
                  </button>
                  <button 
                    onClick={() => setPaymentMethod("vault")}
                    className={`flex-1 p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${paymentMethod === 'vault' ? 'border-[#00F2FF] bg-[#00F2FF]/5' : 'border-white/5 bg-[#111317]'}`}
                  >
                    <FaShieldAlt className={paymentMethod === 'vault' ? 'text-[#00F2FF]' : 'text-gray-500'} />
                    <span className="text-[10px] font-bold">PLAY VAULT</span>
                  </button>
                </div>
              </div>

              <div className="bg-[#111317] border border-white/5 rounded-2xl p-6 space-y-4">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase">Card Number</label>
                    <input type="text" readOnly value="**** **** **** 4452" className="w-full bg-black/40 border border-white/5 rounded-xl p-3 text-white font-mono outline-none" />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-500 uppercase">Expiry</label>
                        <input type="text" readOnly value="12/28" className="w-full bg-black/40 border border-white/5 rounded-xl p-3 text-white font-mono outline-none" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-500 uppercase">CVV</label>
                        <input type="password" readOnly value="***" className="w-full bg-black/40 border border-white/5 rounded-xl p-3 text-white font-mono outline-none" />
                    </div>
                 </div>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase px-2">
                <FaLock className="text-green-500" /> Secure encrypted payment
              </div>
            </div>

            {/* Right Box: Order Summary */}
            <div className="lg:mt-16">
                <div className="bg-[#111317] border border-white/5 rounded-2xl p-8">
                    <h3 className="font-bold text-sm uppercase mb-6 text-gray-400">Items summary</h3>
                    
                    <div className="space-y-4 mb-8 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                        {games.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                                <span className="text-gray-300 font-medium truncate max-w-[150px]">{item.games.title}</span>
                                <span className="font-bold">${item.games.price}</span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-white/5 pt-6 mb-8">
                        <div className="flex justify-between items-end">
                            <span className="text-gray-500 text-sm font-bold uppercase">Total Price</span>
                            <span className="text-4xl font-black text-[#00F2FF]">${total}</span>
                        </div>
                    </div>

                    <MainButton 
                      text="PAY NOW"
                      onClick={handleProcessPayment}
                      className="w-full py-4 text-lg font-black"
                    />
                </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-md mx-auto py-32 text-center bg-[#111317] border border-white/5 rounded-3xl">
            <FaSpinner className="text-[#00F2FF] text-5xl animate-spin mx-auto mb-6" />
            <h2 className="text-2xl font-bold uppercase">Processing Payment</h2>
            <p className="text-gray-500 text-sm mt-2">Please do not close this window...</p>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-md mx-auto py-24 text-center bg-[#111317] border border-white/5 rounded-3xl px-10">
            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                <FaCheckCircle className="text-5xl text-green-500" />
            </div>
            <h2 className="text-3xl font-black uppercase mb-2">Success!</h2>
            <p className="text-gray-500 text-sm mb-10">Your games have been added to your library.</p>
            
            <MainButton 
                text="Go to Library" 
                onClick={handleComplete}
                className="w-full py-4 text-lg font-black"
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Checkout;
