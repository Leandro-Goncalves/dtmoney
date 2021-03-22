import styled from "styled-components";

export const Container = styled.div`

  
  header {
    font-size: 1.25rem;
    color: var(--text-title);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    span:last-child {
      font-weight: 500;
      font-size: 0.85rem;
      color: var(--text-body)
    }
  }
`;

export const Item = styled.div`

  padding: 1rem 1.5rem;
  background-color: white;
  margin-bottom: 0.5rem;

  div{
    &.title{
      color: var(--text-title);
    }

    &.amount{
      font-size: 1.25rem;
      margin-bottom: 1rem;
      color: var(--green);
      &.withdraw {
        color: var(--red)
      }
    }

    &.date{
      display: flex;
      justify-content: space-between;
      color: var(--text-body);
    }
  }
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
`;