import styled from "styled-components";
import {darken} from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: .25rem;

    border: 1px solid #d7d7d7;
    background: #e8e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    background: var(--green);
    color: var(--shape);

    border: 0;
    border-radius: .25rem;
    font-size: 1rem;
    margin-top: 1.5rem;

    font-weight: 600;

    transition: filter .2s;

    &:hover {
      filter: brightness(.9);
    }
  }

`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem;
`

interface RadioBoxProps {
  isActive: boolean
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: .25rem;

    background: ${(props) => props.isActive ? '#ccc' : 'transparent'};
    align-items: center;
    justify-content: center;

    transition: border-color .2s;

    &:hover {
      /* border-color: #aaa; // normal*/
      border-color: ${darken(0.2, '#d7d7d7')}; //utilizando darken
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
`