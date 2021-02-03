import React from "react"
// import { Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
// @ts-ignore
import InstagramLogin from "react-instagram-login"

const responseInstagram = (response: any) => {
  console.log(response);
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <InstagramLogin
      clientId="246732703715540"
      buttonText="Continue with Instagram"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
    />
  </Layout>
)

export default IndexPage
