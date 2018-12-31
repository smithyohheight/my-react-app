import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <h1>A bespoke design agency in Fenton, Michigan</h1>
      <p>Specializing in web design, graphic design, print design, and branding.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Check out my work here! :)</Link>
    </div>
  </Layout>
)

export default IndexPage
