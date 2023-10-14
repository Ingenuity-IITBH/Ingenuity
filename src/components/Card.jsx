import React from 'react';

const cardContainerStyle = {
  width: 303,
  height: 281,
  position: 'relative',
  marginLeft: '25px',
  marginRight: '25px',
};

const frameStyle = {
  width: 303,
  height: 245,
  left: 0,
  top: 36,
  position: 'absolute',
  background: 'white',
  boxShadow: '7px 7px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 8,
  overflow: 'hidden',
};

const titleStyle = {
  left: 112,
  top: 82,
  position: 'absolute',
  textAlign: 'center',
  color: 'black',
  fontSize: 24,
  fontFamily: 'Inter',
  fontWeight: '700',
  wordWrap: 'break-word',
};

const contentStyle = {
  width: 290,
  height: 48,
  left: 7,
  top: 130,
  position: 'absolute',
  textAlign: 'center',
  color: 'black',
  fontSize: 20,
  fontFamily: 'Inter',
  fontWeight: '400',
  wordWrap: 'break-word',
};

const frame83Style = {
  width: 303,
  height: 44,
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 5,
  paddingBottom: 5,
  left: 0,
  top: 201,
  position: 'absolute',
  background: '#EBF6FF',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  display: 'inline-flex',
};

const valueStyle = {
  textAlign: 'center',
  color: '#4B58E1',
  fontSize: 23,
  fontFamily: 'Inter',
  fontWeight: '500',
  wordWrap: 'break-word',
};

const ellipseStyle = {
  width: 101,
  height: 102,
  left: 102,
  top: 0,
  position: 'absolute',
  background: 'white',
  boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 9999,
};

const Card = ({ title, content, value }) => {
  return (
    <div className="CardContainer" style={cardContainerStyle}>
      <div className="Frame" style={frameStyle}>
        <div className="Title" style={titleStyle}>
          {title}
        </div>
        <div className="Content" style={contentStyle}>
          {content}
        </div>
        <div className="Frame83" style={frame83Style}>
          <div className="Value" style={valueStyle}>
            {value}
          </div>
        </div>
      </div>
      <div className="Ellipse13" style={ellipseStyle} />
    </div>
  );
};

export default Card;