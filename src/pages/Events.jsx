import React from 'react';
import EventCard from '../components/EventCard';

const Events = () => {
    const sectionStyle = {
        margin: 'auto',
        background: '#8AAEFF'
    };

    const gridStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '26px',
        padding: '100px',
    };
    const eventHeadStyle = {
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundImage: 'url("/images/EventImage.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    const eventTextStyle = {
        position: 'absolute',
        width: '290px',
        height: '107px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '88px',
        lineHeight: '106px',
        color: '#FFFFFF',
    };
    return (
        <section id='events' style={sectionStyle}>
            <div id='eventHead' style={eventHeadStyle} ><p style={eventTextStyle}>Events</p></div>
            <div id='eventGrid' style={gridStyle}>
                <EventCard
                    h1="Lockout Tournament"
                    h2="26 October 2022 - 6 PM - L209"
                    dec="Recruitment Season is here! We're happy to announce that we're looking to expand our family here at the Web Enthusiasts' Club (and no, we don't do only web development related work. From CP contests to developing various apps for the college, and exploring the depths of fields like AI and Systems, we're a club where you can find and explore your interest in the field of Computer Science. Also, connect with the most exclusive tech alumni network in the college!exploring the depths of fields like AI."
                ></EventCard>
                <EventCard
                    h1="Lockout Tournament"
                    h2="26 October 2022 - 6 PM - L209"
                    dec="Recruitment Season is here! We're happy to announce that we're looking to expand our family here at the Web Enthusiasts' Club (and no, we don't do only web development related work. From CP contests to developing various apps for the college, and exploring the depths of fields like AI and Systems, we're a club where you can find and explore your interest in the field of Computer Science. Also, connect with the most exclusive tech alumni network in the college!exploring the depths of fields like AI."
                ></EventCard>
                <EventCard
                    h1="Lockout Tournament"
                    h2="26 October 2022 - 6 PM - L209"
                    dec="Recruitment Season is here! We're happy to announce that we're looking to expand our family here at the Web Enthusiasts' Club (and no, we don't do only web development related work. From CP contests to developing various apps for the college, and exploring the depths of fields like AI and Systems, we're a club where you can find and explore your interest in the field of Computer Science. Also, connect with the most exclusive tech alumni network in the college!exploring the depths of fields like AI."
                ></EventCard>
                <EventCard
                    h1="Lockout Tournament"
                    h2="26 October 2022 - 6 PM - L209"
                    dec="Recruitment Season is here! We're happy to announce that we're looking to expand our family here at the Web Enthusiasts' Club (and no, we don't do only web development related work. From CP contests to developing various apps for the college, and exploring the depths of fields like AI and Systems, we're a club where you can find and explore your interest in the field of Computer Science. Also, connect with the most exclusive tech alumni network in the college!exploring the depths of fields like AI."
                ></EventCard>
                <EventCard
                    h1="Lockout Tournament"
                    h2="26 October 2022 - 6 PM - L209"
                    dec="Recruitment Season is here! We're happy to announce that we're looking to expand our family here at the Web Enthusiasts' Club (and no, we don't do only web development related work. From CP contests to developing various apps for the college, and exploring the depths of fields like AI and Systems, we're a club where you can find and explore your interest in the field of Computer Science. Also, connect with the most exclusive tech alumni network in the college!exploring the depths of fields like AI."
                ></EventCard>
                <EventCard
                    h1="Lockout Tournament"
                    h2="26 October 2022 - 6 PM - L209"
                    dec="Recruitment Season is here! We're happy to announce that we're looking to expand our family here at the Web Enthusiasts' Club (and no, we don't do only web development related work. From CP contests to developing various apps for the college, and exploring the depths of fields like AI and Systems, we're a club where you can find and explore your interest in the field of Computer Science. Also, connect with the most exclusive tech alumni network in the college!exploring the depths of fields like AI."
                ></EventCard>
            </div>
        </section>
    );
};

export default Events;
