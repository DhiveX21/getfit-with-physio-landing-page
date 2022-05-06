import React from "react";
import "./CardFullImageTitle.css";
import styled from "styled-components";
import useBreakpoints from "../../_helper/breakpoint";

export default function CardFullImageTitle({
  rowsItem = 3,
  rowsGap = "10px",
  cardPadding = "10px",
  title = "Please Import some title",
  image = "",
  button = function () {},
}) {
  const mediaSize = useBreakpoints();
  const Button = styled.div`
    transition-duration: 0.3s;
    transform: translateY(50px);
    opacity: 0;
    button {
      background-color: #22a8ba;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      padding: 10px;
      border: none;
      border-radius: 10px;
      /* identical to box height */

      color: #ffffff;
      @media screen and (min-width: 576px) {
        font-size: 16px;
        line-height: 20px;
      }
      @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 26px;
      }
      @media screen and (min-width: 992px) {
        font-size: 22px;
        line-height: 32px;
      }
    }
  `;
  const Title = styled.div`
    transition-duration: 0.3s;
    transform: translateY(50px);
    h2 {
      font-style: normal;
      font-weight: 900;
      font-size: 14px;
      line-height: 20px;

      color: #ffffff;
      @media screen and (min-width: 576px) {
        font-size: 16px;
        line-height: 20px;
      }
      @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 26px;
      }
      @media screen and (min-width: 992px) {
        font-size: 22px;
        line-height: 32px;
      }
    }
  `;
  const Wrapper = styled.div`
    transition-duration: 0.3s;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    padding: ${cardPadding};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: calc((90vw / ${rowsItem}));
    overflow: hidden;
  `;
  const Outer = styled.div`
    width: calc(((100% / ${rowsItem}) - ${rowsGap}));
    @media screen and (max-width: 450px) {
      width: calc(((100% / ${rowsItem - 1}) - ${rowsGap}));
    }

    border-radius: 20px;
    &:hover ${Wrapper} {
      transition-duration: 0.3s;

      box-shadow: 0px -176px 77px -58px #102b3f inset;
      -webkit-box-shadow: 0px -176px 77px -58px #102b3f inset;
      -moz-box-shadow: 0px -176px 77px -58px #102b3f inset;
    }
    &:hover ${Button} {
      transition-duration: 0.3s;
      transform: translateY(0px);
      opacity: 1;
    }
    &:hover ${Title} {
      transition-duration: 0.3s;
      transform: translateY(0px);
    }
  `;

  return (
    <>
      <Outer className="card-full-image-title">
        <Wrapper
          className="card-full-image-title__wrapper"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        >
          <Title className="card-full-image-title__title">
            <h2>{title}</h2>
          </Title>
          {button ? (
            <Button className="card-full-image-title__button">
              <button onClick={button}>Detail</button>
            </Button>
          ) : (
            ""
          )}
        </Wrapper>
      </Outer>
    </>
  );
}
