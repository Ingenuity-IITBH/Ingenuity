import React from "react";
import Block from "../components/Block";

const teamMemberStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  postion: "relative",
  justifyContent: "space-between",
  textAlign: "center",
  alignItems: "center",
  marginTop: "100px",
};

const dummy = "https://images.squarespace-cdn.com/content/v1/55fc0004e4b069a519961e2d/1442590746571-RPGKIXWGOO671REUNMCB/image-asset.gif";
const hofintro = "Our great alumni";

const HallOfFame = () => {
  return (
    <div>
      <div className="hallOfFame">
        <div
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 88,
            fontFamily: "Julius Sans One",
            fontWeight: "400",
            paddingTop: 60,
          }}
        >
          Hall of Fame
        </div>
        <div
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 24,
            fontFamily: "Inter",
            fontWeight: "300",
            wordWrap: "break-word",
            paddingTop: 60,
          }}
        >
          {hofintro}
          <br />
        </div>
      </div>
      <div className="alumni">
        <div style={{ ...teamMemberStyle, flexWrap: "wrap" }} className="cores">
          <Block
            name="Alumni 1"
            imageSrc={dummy}
            linkedin="https://www.linkedin.com/profile1"
          />
          <Block
            name="Alumni 2"
            imageSrc={dummy}
            linkedin="https://www.linkedin.com/profile2"
          />
          <Block
            name="Alumni 3"
            imageSrc={dummy}
            linkedin="https://www.linkedin.com/profile2"
          />
          <Block
            name="Alumni 4"
            imageSrc={dummy}
            linkedin="https://www.linkedin.com/profile2"
          />
          <Block
            name="Alumni 5"
            imageSrc={dummy}
            linkedin="https://www.linkedin.com/profile2"
          />
          <Block
            name="Alumni 6"
            imageSrc={dummy}
            linkedin="https://www.linkedin.com/profile2"
          />
          <Block
            name="Alumni 7"
            imageSrc={dummy}
            linkedin="https://www.linkedin.com/profile2"
          />
          <Block
            name="Alumni 8"
            imageSrc={dummy}
            linkedin="https://www.linkedin.com/profile2"
          />
          <Block
            name="Alumni 9"
            imageSrc={dummy}
            linkedin="https://www.linkedin.com/profile2"
          />
          <Block
            name="Alumni 10"
            imageSrc={dummy}
            linkedin="https://www.linkedin.com/profile2"
          />
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;
