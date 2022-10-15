import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = (props) => {


  return (
    <div>
      <h1>Eccomerce full cycle</h1> {props.name}
      <ul>
        <li>
          <label htmlFor="">Nome: produto 1</label>
          <a href="#">Ver</a>
          </li>
      </ul>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      name: 'product 1'
    }
  };
};
