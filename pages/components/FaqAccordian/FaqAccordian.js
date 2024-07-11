import React, { useState } from 'react';

const FaqAccordion = () => {
  const faqData = [
    {
      question: 'What are the requirements for renting a car?',
      answer: "<p><b>Age 18+</b></p><p>After Booking Successful you can Upload your selfie photo & Aadhar card & Driving License in App one time only from next booking documents not required.</p><p>Our team will verify & Approve your documents.</p><p>You must upload your documents before your pickup time otherwise your booking will be Auto canceled no refund.</p>"
    },
    {
      question: 'What Incase Of Any Damage To A Car?',
      answer: "<b>Rental Agreement:</b><p>No refunds or adjustments for another car booking in case of damage.</p><b>Damage Coverage</b><p>Up to 2 lakhs: Customer responsible for full cost.<p>Over 2 lakhs:</p><p>Basic protection Customer pays 20,000.</p></p><p>Premium protection: Customer pays ₹10,000.</p><b>Insurance Claim Process:</b><p>Customer required to:</p><p>File an FIR (police report)</p><p>Submit driver's license</p><p>Visit police station and insurance company for verification (multiple visits may be required)</p><p><span><b>Important Note:</b></span> Insurance not applicable for damages under ₹2 lakhs.</p> "
    },
    {
      question: 'What is the cost of Extension ?',
      answer: "    <p><b>Free Extension: </b>You can extend your rental for free up until your pickup time by modifying your reservation through 'My Trips' in the app.</p><b>Return After Pickup Time:</b><p>Up to 23 Hours: The engine will automatically shut off after your rental period ends. You can extend your rental for an additional fee:</p><p>₹400 per hour for a 5-seater vehicle.</p><p>₹600 per hour for a 7-seater vehicle.</p><b>24 Hours or More:</b><p>Both the rental amount and damage protection fee will be doubled for the extended period.</p><b>Extensions Beyond 7 Days:</b><p>You will only be charged the regular rental rate and damage protection fee for the extended period. There is no additional hourly charge.</p>"
    },
    {
      question: 'what is the cancellation policy',
      answer:"<p>50% Refund before 12hrs pickup</p><p>25% Refund before 6hrs pickup</p><p>10% Refund before 2hrs pickup</p><p>0% Refund after that</p>",
    },
    {
      question: 'How Do Unlimited Kilometers And Zero Deposit Work?',
      answer: "All of our rental cars at Long Drive Cars come with an unlimited mileage policy and a zero deposit. This implies that when you rent a car from us, there is no upfront security deposit required, and you are free to drive as much as you like without incurring any further fees. It's how we give our clients a hassle-free, reasonably priced rental car experience."
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto">
      {faqData.map((item, index) => (
        <div key={index} className="border-b-[2px] border-gray-300 rounded mb-2">
          <div
            className="flex justify-between items-center px-4 py-3 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <span className=" lg:w-full xs:text-sm font-semibold capitalize text-base w-64">{item.question}</span>
            <svg
              className={`lg:w-6 lg:h-6 w-4 h-4 rounded bg-[#7c92f4] transition-transform ${
                activeIndex === index ? 'transform rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={`overflow-y-scroll transition-max-height ${
              activeIndex === index ? 'max-h-40' : 'max-h-0'
            }`}
          >
            {/* <div className="px-4 py-3">{item.answer}</div> */}
            <div className='px-4 text-sm leading-6' dangerouslySetInnerHTML={{ __html: item.answer }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
