import styled from "styled-components";
import Backgound from "../../assets/background1.svg"

export const Container = styled.div`
    background: url("${Backgound}");
    background-size:cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ConteinerItens = styled.div`
    background: linear-gradient(157.44deg,
         rgba(255, 255, 255, 0.6) 0.84%, 
         rgba(255, 255, 255, 0.6) 0.85%, 
         rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    padding-bottom: 30px;
`;

export const InputLabel = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    padding-bottom: 1px;
    margin-left: 25px;
`;

export const Input = styled.input`
    width: 342px;
    height: 60px;
    padding-left: 25px;
    margin-bottom: 34px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;

    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
`;

export const Button = styled.button`
    width: 342px;
    height: 70px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;
    margin-top: 110px;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;

export const Ul = styled.ul`
    overflow-y: scroll;
`;