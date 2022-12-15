import styled from 'styled-components';

export const Contacts = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 10px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 5px 0;
    box-shadow: 0 0 5px gray;
  }
  button {
    margin-left: 10px;
    font-size: 12px;
    width: 70px;
    height: 20px;
    border: none;
    background: rgba(5, 85, 96, 0.918);
    border-radius: 5px;
    color: white;

    &:hover {
      background: rgba(5, 85, 96, 0.65);
    }
  }
`;
