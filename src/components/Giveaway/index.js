import React from "react";
import "./index.css";

const giveawaysList = [
  {
    icon: require("../../assests/School-1.png"),
    header: "THANKS FOR THE CONFIDENCE",
    description:
      "10% of benefits in secondary sales will be distributed among the first holders, thanking them for their trust in the project and generating passive income for life.",
  },
  {
    icon: require("../../assests/School-2.png"),
    header: "Take the money",
    description:
      "When the collection is SOLD OUT, we will raffle among the holders a prize of $100,000 that will go directly to your checking account so that you can spend it however you want.",
  },
  {
    icon: require("../../assests/School-3.png"),
    header: "Training of the holders",
    description:
      "Holders will have access to meetings and conferences where they can learn and discuss topics such as Blockchain, SmartContracts, Metaverse, etc.",
  },
  {
    icon: require("../../assests/School-4.png"),
    header: "Parties and concerts",
    description:
      "Tickets for concerts of the best artists in the world, private parties in dream places and yacht rides with the sunset in the background will be raffled.",
  },
];

const Giveaway = () => {
  return (
    <>
      <div className="giveaway-sec section_margin d-flex align-items-center justify-content-center flex-column">
        <div className="purple_font heading_1">Giveaways</div>
        <div className="row mt-5">
          {giveawaysList.map((item, index) => {
            return (
              <div
                className="col-xl-6 col-lg-12 col-md-12 mb-5 d-flex align-items-center"
                key={index}
              >
                <img
                  className="img-fluid p-5"
                  src={item.icon}
                  alt={"school" + index}
                />
                <div>
                  <div className="mb-4 heading_4">{item.header}</div>
                  <div className="text_2">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Giveaway;
