import { useEffect, useState } from "react";

function currency( currency ) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/add37205c63361de01896e91/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates))
  }, [currency]);
  console.log(data);

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   convertCurrency();
  // }, []);

  // const convertCurrency = async () =>{
  //   const abc = await fetch(`https://v6.exchangerate-api.com/v6/add37205c63361de01896e91/latest/${currency}`);
  //   const json = abc.json();

  //   setData(json);
  //   console.log(data);
  // }
  // console.log(data);
  return data;
}
export default currency;
