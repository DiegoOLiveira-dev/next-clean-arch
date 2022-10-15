import type { GetServerSideProps, NextPage } from 'next'
import { http } from '../utils/http'
import { Produtos } from '../utils/models'

type HomeProps = {
  produtos: Produtos[]
}
const Home: NextPage<HomeProps> = ({produtos}) => {


  return (
    <div>
      <h1>Eccomerce full cycle</h1>
      <ul>
        {produtos.map((produto, key) => (
          <li key={key}>
            <label htmlFor="">Nome:</label>
            {produto.nome} |
            <a href="#">Ver</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {

  const {data: produtos} = await http.get("produtos");

  return {
    props: {
      produtos
    }
  };
};
