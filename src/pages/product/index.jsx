import { useParams, useLocation } from 'react-router-dom';

function Product() {
  const { title } = useParams();
  console.log(title)
  const value = useLocation();
  console.log(value)


  return (
    <>
      <h1>Some food {title}</h1>
    </>
  )
}

export default Product;