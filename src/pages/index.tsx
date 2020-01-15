import * as React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import { useStatefulResource } from '@rest-hooks/legacy';

import FondResource from "src/resources/fond";

const IndexPage: NextPage = () => {
  const fonds = useStatefulResource(FondResource.listShape(), {})

  console.log('FONDS', fonds)

  return (
    <>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </>
  )
}

export default IndexPage
