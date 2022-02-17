import React from "react";

const giveawaysList = [
  {
    icon: require("../../assests/logo.png"),
    header: "THANKS FOR THE CONFIDENCE",
    description:
      "10% of benefits in secondary sales will be distributed among the first holders, thanking them for their trust in the project and generating passive income for life.",
  },
  {
    icon: require("../../assests/logo.png"),
    header: "THANKS FOR THE CONFIDENCE",
    description:
      "10% of benefits in secondary sales will be distributed among the first holders, thanking them for their trust in the project and generating passive income for life.",
  },
  {
    icon: require("../../assests/logo.png"),
    header: "THANKS FOR THE CONFIDENCE",
    description:
      "10% of benefits in secondary sales will be distributed among the first holders, thanking them for their trust in the project and generating passive income for life.",
  },
  {
    icon: require("../../assests/logo.png"),
    header: "THANKS FOR THE CONFIDENCE",
    description:
      "10% of benefits in secondary sales will be distributed among the first holders, thanking them for their trust in the project and generating passive income for life.",
  },
];

const Giveaway = () => {
  return (
    <>
      <div className="row">
        {giveawaysList.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.icon} />
              <div>
                <div>{item.header}</div>
                <div>{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Giveaway;
