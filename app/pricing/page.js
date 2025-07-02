import React from "react";

const Pricing = () => {

    const data = {
        title: "IB Programs — Designed for Global Excellence",
        subtitle: "Achieve more with structured support, top-tier mentoring, and IB-specific resources.",
        badges: ["EMI Available", "Batch Starts Aug 1, 2025", "Bonuses till July 10"],
        plans: [
            {
                name: "IB1",
                duration: "11 months",
                price: "₹49,000"
            },
            {
                name: "IB2",
                duration: "12 months",
                price: "₹56,000"
            },
            {
                name: "Full IB Pack",
                duration: "2 years",
                price: "₹95,000"
            }
        ],
        bonusList: [
            "IA/EE Review Support",
            "1-on-1 Mock Sessions",
            "Monthly Parent Reports"
        ]
    }


    return (
        <>

            <div className="parent py-[100px] bg page">
                <div className="container flex flex-col gap-4 items-center justify-center">

                    <h2 className="heading h2 tc">
                       IB Programs — <span>Designed for Global Excellence</span>
                    </h2>
                    <p className="tc">Achieve more with structured support, top-tier mentoring, and IB-specific resources.</p>


                </div>
            </div>


            <div className="parent py-[100px]  page">
                <div className="container"></div>
            </div>


            <div className="parent py-[100px] bg page">
                <div className="container"></div>
            </div>


            <div className="parent py-[100px] bgdark page">
                <div className="container"></div>
            </div>
        </>
    );
};

export default Pricing;
