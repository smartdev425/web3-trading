import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BannerWrapper = styled.div`
  padding-top: 100px;
  min-height: 802px;
  overflow: hidden;
  text-align: center;

  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    min-height: 100vh;
  }
  @media only screen and (max-width: 1099px) {
    padding-top: 120px;
    min-height: 100%;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 120px;
    min-height: 100%;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(802px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      min-height: 100%;
    }
    @media only screen and (max-width: 1099px) {
      min-height: 100%;
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
      min-height: 100%;
    }
  }
`;

export const BannerContent = styled.div`
  width: 100%;
  @media only screen and (max-width: 991px) {
    flex-shrink: 0;
    max-width: 360px;
  }

  h1 {
    font-size: 48px;
    line-height: 1.25;
    font-weight: 400;
    color: ${themeGet('colors.menu', '#0D233E')};
    margin-bottom: 24px;
    letter-spacing: 0.5em;

    @media only screen and (min-width: 992px) {
      font-size: 125px;
      letter-spacing: 25px;
      margin-bottom: 20px;
    }
  }

  p {
    color: ${themeGet('colors.paragraph', '#496b96')};
    font-size: 18px;
    line-height: 33px;
    font-weight: 400;

    @media only screen and (min-width: 992px) {
      font-size: 26px;
    }
  }
`;

export const DiscountLabel = styled.div`
  display: flex;
  border-radius: 4em;
  background-color: rgb(26, 29, 95);
  box-shadow: 0px 5px 15px 0px rgba(22, 53, 76, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.03);
  padding: 7px 25px;
  margin-bottom: 15px;
  width: 80%;
  @media (max-width: 767px) {
    padding: 7px 15px;
    width: 100%;
  }
  .discountAmount {
    font-size: 14px;
    color: rgb(64, 224, 219);
    margin-bottom: 0;
    margin-right: 0.6em;
    font-weight: 700;
  }
  .discountText {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.902);
    margin-bottom: 0;
    font-weight: 700;
  }
`;

export const BannerImage = styled.div`
  flex-shrink: 0;
  width: calc(100% - 425px);
  img {
    margin-left: 80px;
    @media only screen and (max-width: 1600px) {
      margin-left: 0;
    }
    @media only screen and (max-width: 480px) {
      max-width: 70%;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 35px;

  a:first-child {
    margin-left: 0;
  }

  .social-icon {
    margin-left: 15px;
    margin-bottom: 15px;
  }

  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;

    &.primary {
      background-image: linear-gradient(to right, #4ba1d8, #4464bd 95%);
      &:hover {
        box-shadow: rgba(75, 109, 235, 0.78) 0px 12px 24px -10px;
      }
    }

    &.text {
      margin-right: 15px;
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.302);
    }
  }
`;

export default BannerWrapper;
