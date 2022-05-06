import React from "react";
import "./CardFullHalfImage.css";
import styled from "styled-components";
import useBreakpoints from "../../_helper/breakpoint";

export default function CardFullHalfImage({
  cardPadding = "10px",
  title = null,
  image = "",
  desc = null,
  button = function () {},
}) {
  const mediaSize = useBreakpoints();
  const Button = styled.div`
    transition-duration: 0.3s;

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
    width: 50%;

    h2 {
      font-style: normal;
      font-weight: 900;
      font-size: 14px;
      line-height: 20px;

      color: #333333;
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
  const Desc = styled.div`
    width: 50%;
    transition-duration: 0.3s;

    p {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;

      color: #5a5a5a;
      @media screen and (min-width: 576px) {
        font-size: 14px;
        line-height: 20px;
      }
    }
  `;
  const Wrapper = styled.div`
    transition-duration: 0.3s;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 100% 50%;
    border-radius: 20px;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: center;
    height: calc(100vw / 4);
    box-shadow: -10px -10px 15px #ffffff, 10px 10px 15px #bebebe;
    border-radius: 20px;

    @media screen and (min-width: 992px) {
      padding: 60px 40px;
    }
  `;
  const Outer = styled.div`
    width: 100%;

    border-radius: 20px;
    &:hover ${Wrapper} {
      transition-duration: 0.3s;
      transform: scale(1.02);
    }
  `;

  return (
    <>
      <Outer className="card-full-image-title">
        <Wrapper
          className="card-full-image-title__wrapper"
          style={{
            backgroundImage: `linear-gradient(90deg, #E2E2E2 40%, rgba(244, 244, 244, 0) 70%),url('${image}')`,
          }}
        >
          {title ? (
            <Title className="card-full-image-title__title">
              <h2>{title}</h2>
            </Title>
          ) : (
            ""
          )}

          {desc ? (
            <Desc>
              <p>{desc}</p>
            </Desc>
          ) : (
            ""
          )}
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
