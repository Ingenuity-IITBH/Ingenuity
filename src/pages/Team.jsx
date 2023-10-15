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
          name="Arnav Gautam"
          imageSrc= {dummy}
          linkedin="https://www.linkedin.com/profile1"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Omm Prakash Sahoo"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
      </div>

      <h2>Mentors</h2>
      <div style={{ ...teamMemberStyle, flexWrap: "wrap" }} className="mentors">
        <Block
          name="Pravin Shankhapal"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile1"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Manish Salunkhe"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Akshay Wairagade"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
      </div>

      <h2>Core Members</h2>
      <div style={{ ...teamMemberStyle, flexWrap: "wrap" }} className="cores">
        <Block
          name="JV Aditya"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile1"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Mitul Vardhan"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile1"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Dhruv Gupta"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile1"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Ayudh Abhale"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Nikhil Shrey"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Lasya"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Mohd Adil"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Garima Tata"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Anjali Patil"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Manopriya Mondal"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Raj Mohammad"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Naga Yashwanth"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
        <Block
          name="Ayush Kumar Mishra"
          imageSrc={dummy}
          linkedin="https://www.linkedin.com/profile2"
          codeforces="https://codeforces.com"
        />
      </div>
    </div>
  );
};

export default Team;
