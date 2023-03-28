import * as React from "react"
import PeopleCard from "../components/PeopleCard"
import Layout from "../components/layout"

// Importing Data from the Mock Database - Jacob
import Members from "../database/members"

import "../styles/homepage.css"





// Multi Bootstrap Imports
import MCarousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"



// Making the Carousels Responsive - Jacob
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};



// Styling for html components & Layout - Jacob
const pageStyles = {
  color: "#005091",
  padding: 96,
  paddingTop: 180,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const headingAccentStyles = {
  color: "#663399",
};

const container = {
  backgroundColor: "#003663",
  padding: "6% 5% 6% 5%",
  paddingTop: 180,
};
const header = {
  fontFamily: "Titillium Web",
  fontSize: "3vw",
  color: "white",
};
const header2 = {
  fontFamily: "Titillium Web",
  fontSize: "2vw",
  color: "white",
};
const carouselInner = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2% 0 3% 0",
};
const gapS = {
  padding: "0.5% 0 0.5% 0",
};
const gapL = {
  padding: "2% 0 2% 0",
};
const paragraph = {
  fontFamily: "Roboto",
  fontWeight: "200",
  fontSize: "1.5vw",
  color: "white",
};

// function AboutPage(props) {
//   return(
//     <Layout>
//       <div className="container">
//       <h1>Meet the Team!</h1>
//       <div className="people-container">
//         <Grid container spacing={2}>
//           {Members.map((item) => (
//                   <Grid xs={3}>
//                     <PeopleCard
//                       name={item.name}
//                       img={item.image}
//                       role={item.role}
//                     />
//                   </Grid>
//                 ))}
//         </Grid>
//       </div>
//     </div>
//     </Layout>
//   );
// }

function AboutPage() {
  return (
    <Layout>
      <div style={container}>
        <div>
          <h1 style={header}>About Us</h1>
          <p style={paragraph}>
            We are a Vertically Integrated Project team at Georgia Tech
            exploring the lives of those touched by Georgia Tech’s research and
            technology initiatives. The Vertically Integrated Project Program at
            Georgia Tech brings together teams of undergraduate students from
            various years, disciplines, and backgrounds with faculty and
            graduate students to work on long-term, large-scale,
            multidisciplinary projects. Learn more about Georgia Tech’s VIP
            program here.
          </p>
        </div>
        {/* Web Team Info - Jacob */}
        <div style={gapS}>
          <h1 style={header2}>Web Team</h1>
          <MCarousel 
            responsive={responsive} 
            autoPlay={true}
            autoPlaySpeed={7000}
            infinite={true}
            >

            {Members.map((item) => (
              <div style={carouselInner}>
                <PeopleCard
                  name={item.name}
                  img={item.image}
                  role={item.role}
                />
              </div>
            ))}
          </MCarousel>
        </div>
        {/* Media Team Info */}
        <div style={gapS}>
          <h1 style={header2}>Media Team</h1>
          <MCarousel 
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={7000}
            infinite={true}>
            {Members.map((item) => (
              <div style={carouselInner}>
                <PeopleCard
                  name={item.name}
                  image={item.image}
                  role={item.role}
                />
              </div>
            ))}
          </MCarousel>
        </div>
        {/* App Team Info */}
        <div style={gapS}>
          <h1 style={header2}>App Team</h1>
          <MCarousel 
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={7000}
            infinite={true}>
            {Members.map((item) => (
              <div style={carouselInner}>
                <PeopleCard
                  name={item.name}
                  image={item.image}
                  role={item.role}
                />
              </div>
            ))}
          </MCarousel>
        </div>
        {/* Emerging Tech Team Info */}
        <div style={gapS}>
          <h1 style={header2}>Emerging Tech Team</h1>
          <MCarousel 
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={7000}
            infinite={true}>
            {Members.map((item) => (
              <div style={carouselInner}>
                <PeopleCard
                  name={item.name}
                  image={item.image}
                  role={item.role}
                />
              </div>
            ))}
          </MCarousel>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;