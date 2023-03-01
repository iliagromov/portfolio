import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Header from "../../components/Header/Header";

const Layout = ({ children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `);

  return (
    <main className="page" >
      <section className="theme">
        <div className="theme-color theme-color-3"></div>
        <div className="theme-color theme-color-2"></div>
        <div className="theme-color theme-color-1"></div>
      </section>
      <section className="bg">
        <div className="wrapper">
          <div className="bg-grid">
            <div className="bg-grid__line"></div>
            <div className="bg-grid__line"></div>
            <div className="bg-grid__line"></div>
            <div className="bg-grid__line"></div>
          </div>
        </div>
      </section>
      
      <Header />
      
   
      {children}

      <footer>
        © {new Date().getFullYear()},
      </footer>
    </main>
  );
}

export default Layout;
