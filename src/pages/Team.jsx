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
  marginTop: "100px"
};

const meetTheTeamStyle = {
  textAlign: "center", // Center the text horizontally
  fontSize: "24px", // Increase the font size
  marginTop: "10px",
};

const dummy = "https://media.licdn.com/dms/image/C4D0BAQHprNbjAwUNuQ/company-logo_200_200/0/1668014253223?e=2147483647&v=beta&t=ac8S7Zdz8XvOUmSHXh8SRSf2_zMMoVHN4Hec6rvsBBU";

const Team = () => {
  return (
    <div className="meet-the-team" style={meetTheTeamStyle}>
      <h2>Meet The Team</h2>
      <h4>We are glad to introduce our dedicated family</h4>

      <div style={{ ...teamMemberStyle}} className="coordinators">
        <Block
          name="Coordinator 1"
          imageSrc= {dummy}
          linkedin="https://www.linkedin.com/profile1"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Coordinator 2"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
      </div>

      <h2>Mentors</h2>
      <div style={{ ...teamMemberStyle, flexWrap: "wrap" }} className="mentors">
        <Block
          name="Mentor 1"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile1"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Mentor 2"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Mentor 3"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
      </div>

      <h2>Core Members</h2>
      <div style={{ ...teamMemberStyle, flexWrap: "wrap" }} className="cores">
        <Block
          name="Core Member 1"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile1"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Core Member 2"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Core Member 3"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Core Member 4"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Core Member 5"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Core Member 6"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Core Member 7"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Core Member 8"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Core Member 9"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
      </div>
    </div>
  );
};

export default Team;
