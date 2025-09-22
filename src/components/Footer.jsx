import React from "react";
import { FaShieldAlt, FaShippingFast, FaHeadset } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";

const features = [
  {
    icon: <GiMaterialsScience size={32} />,
    heading: "High Quality",
    subtext: "crafted from top materials",
  },
  {
    icon: <FaShieldAlt size={32} />,
    heading: "Warranty Protection",
    subtext: "over 2 years",
  },
  {
    icon: <FaShippingFast size={32} />,
    heading: "Free Shipping",
    subtext: "orders over $150",
  },
//   {
//     icon: <FaHeadset size={32} />,
//     heading: "24/7 Support",
//     subtext: "dedicated support",
//   },
];

const Footer = () => {
  return (
    <footer style={{
      background: "#FDF5ED",
      fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
      padding: "48px 0 16px 0",
      marginTop: "48px",
      borderTopLeftRadius: "24px",
      borderTopRightRadius: "24px",
      boxShadow: "0 -2px 16px rgba(0,0,0,0.04)",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "48px",
        maxWidth: "900px",
        margin: "0 auto 32px auto",
        flexWrap: "wrap"
      }}>
        {features.map((feature, idx) => (
          <div
            key={feature.heading}
            style={{
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              padding: "32px 24px",
              minWidth: "180px",
              textAlign: "center",
              transition: "box-shadow 0.2s",
              cursor: "pointer",
            }}
            onMouseOver={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)"}
            onMouseOut={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)"}
          >
            <div style={{
              background: "#FDF5ED",
              borderRadius: "50%",
              width: "56px",
              height: "56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px auto",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              transition: "background 0.2s"
            }}>
              {feature.icon}
            </div>
            <div style={{
              fontSize: "1.1rem",
              fontWeight: 500,
              marginBottom: "6px",
              color: "#3B2F23"
            }}>{feature.heading}</div>
            <div style={{
              fontSize: "0.95rem",
              color: "#A89F91",
              fontWeight: 400,
              letterSpacing: "0.01em"
            }}>{feature.subtext}</div>
          </div>
        ))}
      </div>
      <hr style={{border: "none", borderTop: "1px solid #F0E6DA", margin: "0 0 16px 0"}} />
      <div style={{
        textAlign: "center",
        color: "#A89F91",
        fontSize: "0.95rem",
        fontWeight: 400,
        letterSpacing: "0.01em"
      }}>
        © 2025 www.furniro.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
