import React from "react";
import "./index.css";

const RoadmapList = [
  {
    heading: "WE OFFER A HEALTHY COMMUNITY FOR YOUR GROWTH",
    description:
      "In our Discord channel there are different groups available where you can train with our community on the topics that you are most passionate about (NFT'S, Blockchain, Cryptocurrencies, etc.)",
    percentage: "10%",
  },
  {
    heading: "CONFERENCES AND TRAINING",
    description:
      "The Metapunks team is already working on hiring conferences from the most popular people in the crypto world, names like Vitalik Buterin (creator of Ethereum), Chris Larsen (creator of Ripple), Sebastián Borget (chief developer of The Sandbox) or David Finzer ( founder of OpenSea) are some of the people we are contacting, getting availability and who would always be willing to speak for our community." +
      "\r\n\r\n" +
      "We also have the best courses for the professional training of our holders. In the 'COURSES' section you can check what we have available at the moment.",
    percentage: "30%",
  },
  {
    heading: "Whitelist",
    description:
      "After building the foundations of our project, we will be able to announce the release date of the MetaPunks collection. 10% of the supply (1,000 NFTs) will be available to WhiteList members at a special discount. Do not forget to follow us on all our social networks and join our Discord.",
    percentage: "50%",
  },
  {
    heading: "Pre-sale and public sale",
    description:
      "After the presale, the definitive Discord groups will be created in which only the holders will be, thus allowing the community to interact with each other and where you can access by obtaining a MetaPunk either from our website or from Opensea. Having a Metapunk in your possession will allow you to enter a unique community where the goal is to grow.",
    percentage: "70%",
  },
  {
    heading: "The road just begins",
    description:
      "We will continue to grow our community and let the world know who we are, this team is sure of the power that this project has and that no entrepreneur can afford to be left out. Supporting emerging talent is a very important part of us and that is why anyone in our community will be able to develop the project of their dreams and we would all benefit from it. For all this and much more... MetaPunks to the moon!!!!",
    percentage: "100%",
  },
];

const Roadmap = () => {
  return (
    <div className="roadmap-sec row d-flex align-items-center justify-content-center flex-column">
      <div className="heading_2 purple_font">RoadMap</div>
      <div class="timeline">
        <ul>
          {RoadmapList.map((item, index) => {
            return (
              <li key={index}>
                <div className="content">
                  <div className="heading_4 mb-3">{item.heading}</div>
                  <div className="text_2">{item.description}</div>
                </div>
                <div
                  class="time "
                  style={index < 2 ? { color: "#30C53F" } : { color: "black" }}
                >
                  <div
                    className="row"
                    style={{ position: "relative", width: "500px" }}
                  >
                    <span className={"roadmap_star_" + (index + 1)}></span>
                  </div>
                  <div>{item.percentage}</div>
                </div>
              </li>
            );
          })}
          {/* <li>
            <div class="content">
              <h3>WE OFFER A HEALTHY COMMUNITY FOR YOUR GROWTH</h3>
              <p>
                In our Discord channel there are different groups available
                where you can train with our community on the topics that you
                are most passionate about (NFT'S, Blockchain, Cryptocurrencies,
                etc.){" "}
              </p>
            </div>
            <div class="time">
              <h4>10%</h4>
            </div>
          </li>

          <li>
            <div class="content">
              <h3>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
            </div>
            <div class="time">
              <h4>February 2018</h4>
            </div>
          </li>

          <li>
            <div class="content">
              <h3>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
            </div>
            <div class="time">
              <h4>March 2018</h4>
            </div>
          </li>

          <li>
            <div class="content">
              <h3>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
            </div>
            <div class="time">
              <h4>April 2018</h4>
            </div>
          </li>

          <li>
            <div class="content">
              <h3>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
            </div>
            <div class="time">
              <h4>May 2018</h4>
            </div>
          </li> */}

          <div style={{ clear: "both" }}></div>
        </ul>
      </div>
    </div>
  );
};

export default Roadmap;
