import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { Axios } from "axios";

function Productpage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function() {
    axios
      .get(
        `https://79d99228-4344-4c38-a22f-50301091c299.mock.pstmn.io/products/${id}`
      )
      .then(function(result) {
        setProduct(result.data);
        console.log(result);
      })
      .catch(function(error) {
        console.error(error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={`/${product.imageUrl}`}></img>
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box"></div>
      <div id="name">{product.name}</div>
      <div id="price">{product.price}원</div>
      <div id="createdat">2022년 7월 30일</div>
      <div id="description">{product.description}</div>
    </div>
  );
}
export default Productpage;
