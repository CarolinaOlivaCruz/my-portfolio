import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;

  li {
    width: 300px;
    height: 200px;
    padding: 10px 15px;
    border: 1px solid #8a1b63;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-weight: bold;
    }

    span {
      overflow: hidden;
      text-overflow: clip ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    a {
      padding: 5px 0;
      text-align: center;
      color: #ffff;
      background-color: #8a1b63;
      border: 1px solid #8a1b63;
      border-radius: 8px;
    }
  }
`;
