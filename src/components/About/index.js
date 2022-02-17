import React from "react";

const About = () => {
  return (
    <div className="row d-flex align-items-center section_margin">
      <div className="col-xl-6 col-md-12">
        <img
          className="img-fluid"
          src={require("../../assests/about.png")}
          alt="about"
        />
      </div>

      <div className="col-xl-6 col-md-12 pl-5">
        <div className="heading_2 purple_font">About US</div>
        <div className="text_2 mt-5">
          MetaPunks is a collection of 10,000 NFTs hosted on the Ethereum
          blockchain. Having a Metapunk in your wallet gives you access to the
          MetaPunksClub. An exclusive club where you will have access to
          conferences from the greatest personalities related to the metaverse,
          blockchain and cryptocurrencies, training courses and exclusive
          information for members.
          <br />
          <br />
          The objective of this collection is the creation of the future leaders
          in the crypto world, the financial growth of the holders and to create
          a new powerful collection of NFTs for those who were not in time in
          projects like CryptoPunks or BoredApes.
          <br />
          <br />
          MetaPunks is not limited to just creating a collection of NFTs and
          promise a community in the metaverse.
          <b> WE ARE SUPPORTED BY THE FACTS!</b>
          <br />
          <br />
          At the time of the creation of the collection we have already closed
          more than 5 conferences and numerous training courses on the crypto
          world, the metaverse and blockchains.
        </div>
      </div>
    </div>
  );
};

export default About;
