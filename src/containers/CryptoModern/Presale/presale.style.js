import styled from 'styled-components'

const BannerWrapper = styled.div`
    min-height: 802px;
    overflow: hidden;
    text-align: center;

    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
        min-height: 90vh;
    }
    @media only screen and (max-width: 1099px) {
        padding-top: 120px;
        padding-bottom: 150px;
        min-height: 100%;
    }
    @media only screen and (max-width: 480px) {
        padding-top: 120px;
        padding-bottom: 180px;
        min-height: 100%;
    }
    > div.container {
        display: flex;
        align-items: center;
        justify-content: center;

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
`

export const BannerContent = styled.div`
    width: 100%;
    margin-top: 60px;
    @media only screen and (max-width: 991px) {
        flex-shrink: 0;
        max-width: 360px;
    }

    p {
        font-size: 18px;
        font-weight: 400;

        @media only screen and (min-width: 992px) {
            font-size: 26px;
        }
    }

    .tagline {
        font-family: var(--fontDosis);
        font-size: 48px;
        font-weight: 500;

        @media only screen and (max-width: 992px) {
            font-size: 26px;
        }
    }

    .notBegunPresale {
        padding: 10px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 50px;
        border-radius: 10px;
        width: clamp(350px, 80%, 700px);
        background-color: #004fbf;
    }

    .presale-module {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        width: clamp(350px, 80%, 700px);
        padding: 30px 50px;
        border-radius: 10px;
        background-color: #004fbf;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 50px;

        > * {
            margin-bottom: 15px !important;
        }

        > div {
            width: 100%;
        }

        .field-wrapper {
            input {
                border-radius: 6px;
            }
        }

        div.is-material.is-focus {
            label {
                top: -25px;
                font-size: 14px;
                color: var(--primaryTextColor);
            }
        }
        label {
            padding-left: 10px;
        }
        button {
            background-color: #f9df00;
            span {
                font-weight: 500;
                color: var(--primaryBackgroundColor);
            }
        }

        &.dapp-disabled {
            justify-content: center;
        }

        .available-bnb-value {
            text-decoration: underline;
            cursor: pointer;
        }
    }

    .presaleBar {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    .presaleProgressBar {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: clamp(375px, 100%, 800px);
        height: 50px;
        border: 1px solid var(--primaryTextColor);

        .progressText {
            margin-bottom: 0;
            z-index: 1;
        }

        .filledBar {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background: #004fbf;
        }
    }

    button {
        background-color: transparent;
        border: 1px #f9df00 solid;
        span {
            font-weight: 500;
            color: #f9df00;
        }
    }

    .highlight {
        color: #f9df00;
    }

    .available-bnb {
        font-size: 20px;
        display: flex;
        flex-direction: column;

        .balance-row {
            display: flex;
            flex-direction: row;
        }
    }

    .wallet-address,
    .max-contribution,
    .current-balance {
        font-size: 18px;
    }
`

export const ButtonGroup = styled.div`
    margin-top: 75px;
    display: flex;
    justify-content: center;

    a:first-child {
        margin-left: 0;
    }

    .reusecore__button {
        width: 250px;
        text-transform: inherit;
        border-radius: 10px;
        padding-left: 16px;
        padding-right: 16px;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;

        &.primary {
            color: var(--primaryBackgroundColor);
            background-color: #00dee6;
            &:hover {
                box-shadow: #00dee6 0px 0px 24px 5px;
            }

            span {
                color: var(--primaryBackgroundColor);
            }
        }

        &.text {
            margin-right: 15px;
            color: #00dee6;
            border: 2px solid #00dee6;
            &:hover {
                box-shadow: #00dee6 0px 0px 24px 5px;
            }
        }

        @media only screen and (min-width: 992px) {
            font-size: 20px;
        }
    }
`

export default BannerWrapper
