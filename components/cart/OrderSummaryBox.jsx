import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLanguage } from "../../hooks/useLanguage";
import ProductPrice from "../UI/ProductPrice";
const OrderSummaryBox = () => {
  const { t, locale } = useLanguage();

  const [success, setSuccess] = useState(false);
  const [auth, setAuth] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    setAuth(userInfo ? true : false);
  }, [userInfo]);
  const totalAmount = useSelector((state) => state.cart);
  const userInfo = useSelector((state) => state.userInfo.userInformation);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const userEmail = auth ? userInfo.email : null;


  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: userEmail,
    City: "",
    PostCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/checkout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData,
        totalAmount,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.success) {
      setSessionId(data.sessionId);
      window.history.pushState({}, "", "/Success?session_id=" + data.sessionId);
    }

    if (sessionId) {
      window.location.href = "/Success?session_id=" + sessionId;
    }
  };

  if (!auth) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Link href="/login">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            You Need to Login First
          </a>
        </Link>
      </div>
    );
  }

  return (
    <>
      {totalQuantity > 0 ? (
        <div className="flex-grow sticky bottom-0 left-0 right-0 md:top-36 shadow-lg bg-palette-card border-2 rounded-lg py-4 xl:py-12 px-4 xl:px-8 -mx-[1rem] md:mx-4 xl:mx-8 mt-2 w-[100vw] md:w-auto  md:min-w-[300px] md:max-w-[400px]">
          <h3 className="text-md sm:text-lg md:text-xl">{t.orderSummary}</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-2 pt-2">
              <label htmlFor="name" className="text-palette-mute">
                {t.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="full name"
                value={formData.name}
                onChange={handleChange}
                className="border border-palette-base rounded px-2 py-1"
              />
            </div>
            {/* Address field */}
            <div className="mb-2">
              <label htmlFor="address" className="text-palette-mute">
                {t.address}
              </label>
              <input
                type="text"
                id="address"
                placeholder="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border border-palette-base rounded px-2 py-1"
              />
            </div>
            {/* Phone field */}
            <div className="mb-4">
              <label htmlFor="phone" className="text-palette-mute">
                {t.phone}
              </label>
              <input
                type="text"
                id="phone"
                placeholder="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-palette-base rounded px-2 py-1"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="City" className="text-palette-mute">
                {t.phone}
              </label>
              <input
                type="text"
                id="City"
                placeholder="City"
                name="City"
                value={formData.City}
                onChange={handleChange}
                className="border border-palette-base rounded px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="PostCode" className="text-palette-mute">
                {t.phone}
              </label>
              <input
                type="text"
                id="PostCode"
                placeholder="PostCode"
                name="PostCode"
                value={formData.PostCode}
                onChange={handleChange}
                className="border border-palette-base rounded px-2 py-1"
              />
            </div>
            <div className="flex flex-col my-1 sm:my-2">
              <div className="flex items-center justify-between md:my-4">
                <p className="text-sm sm:text-base text-palette-mute md:text-palette-base">
                  {t.totalQuantity}
                </p>
                <p className="rtl:ml-1 ltr:mr-1 font-bold">{totalQuantity}</p>
              </div>
              <div className="flex flex-wrap items-baseline justify-between flex-grow md:my-4">
                <p className="text-sm sm:text-base text-palette-mute md:text-palette-base">
                  {t.totalAmount}
                </p>
                <ProductPrice price={totalAmount.totalAmount} />
              </div>
            </div>
            <button className="w-full" type="submit">
              <div className="block bg-palette-primary md:mt-8 py-3 rounded-lg text-palette-side text-center shadow-lg">
                {t.order}
              </div>
            </button>
          </form>
        </div>
      ) : (
        <p className="text-palette-mute text-lg mx-auto mt-12">
          {t.cartIsEmpty}
        </p>
      )}
    </>
  );
};

export default OrderSummaryBox;
