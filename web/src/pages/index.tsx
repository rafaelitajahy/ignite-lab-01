import { getAccessToken, useUser } from '@auth0/nextjs-auth0'
import type { GetServerSideProps, NextPage } from 'next'

const Home: NextPage = () => {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const token = getAccessToken(req, res);

  console.log(token);

  return {
    props: {},
  }
}

export default Home
