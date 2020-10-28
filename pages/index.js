import Layout from "../components/layout"
import Fetch from 'isomorphic-unfetch';
import Prices from '../components/prices';

const Index= (props)=> (
    <Layout><div> 
   <h1>
    Welcome to Next JS 
           </h1>
           <p>Check current Bitcoin rate</p>
           <Prices bpi={props.bpi}/>
           </div></Layout>
)
Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
  
    return {
      bpi: data.bpi
    }}
export default Index