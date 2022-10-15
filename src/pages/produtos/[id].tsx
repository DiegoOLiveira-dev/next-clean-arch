// @flow 
import {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import { http } from '../../utils/http';
import { Produtos } from '../../utils/models';

type ProductDetailPageProps = {
    produto: Produtos
}

export const ProductDetailPage: NextPage<ProductDetailPageProps> = ({produto}) => {
    return (
        <div>
            <h3>{produto.nome}</h3>
            <label htmlFor="">Preço</label>{produto.price}
            <br />
            <button>Adicionar ao carrinho</button>
        </div>
    );
};

export default ProductDetailPage

export const getStaticPaths: GetStaticPaths = async () => {
    //const {data: produtos}  = await http.get(`produtos?featured=true`)
    return {
        paths: [
            // produtos.map((produtos: Produtos) => ({
            //     params: {
            //         id: produtos.id.toString()
            //     }
            // }))
        ],
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {id} = context.params || {};
    const {data: produto} = await http.get(`produtos/${id}`);

    return {
        props: {
            produto
        }
    }
}