import React from 'react';
import styled from 'styled-components';

const EventCard = styled.div`
  width: 388px;
  height: 470px;
  border: 1px solid #000000;
  border-radius: 25px;
  transition: all 0.5s ease;
  background: white;
  overflow: hidden;

  img {
    width: 388px;
    height: 360px;
  }

  .details {
    position: relative;
    transition: top 0.5s ease-in-out;
    background: white;
    height: 100%;
    padding: 15px;
    color: '#000000';
    text-align: justify;
    top: 0;
  }

  &:hover .details {
    top: -80%;
  }
`;

const EventCardComponent = (props) => {
  const headingStyle = {
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '29px',
    letterSpacing: '0em',
    textAlign: 'center',
  };

  const dateStyle = {
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '22px',
    letterSpacing: '0em',
    textAlign: 'center',
  };

  const aboutStyle = {
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: '22px',
    letterSpacing: '0em',
    textAlign: 'justified',
  };

  return (
    <EventCard>
      <img src="/images/LockOut.jpg" alt="" />
      <div className="details">
        <p style={headingStyle}>{props.h1}</p>
        <p style={dateStyle}>{props.h2}</p>
        <hr style={{ width: '90%', border: '1px solid #000', margin: '20px auto' }} />
        <p style={aboutStyle}>{props.dec}</p>
      </div>
    </EventCard>
  );
};

export default EventCardComponent;
