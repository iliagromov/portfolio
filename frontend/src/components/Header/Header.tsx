import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import gatsbyPng from '../../images/icon.png';

const Header = (isHomePage: any, ) => {
    // const title = ' ';
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


//   const {site } = useStaticQuery(graphql`
//         query {
//             site{
//                 siteMetadata{
//                     title
//                     description
//                     author
//                     blog
//                 }
//             }
//         }`
//         );
//         console.log('site', site)

    return (
  
      <header className="global-header">
        <img src={gatsbyPng} alt="test" />

        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header>

  );
}


export default Header;


