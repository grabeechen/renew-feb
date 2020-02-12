import styled from 'styled-components';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &[data-page=home] {
    align-items: center;
    justify-content: center;
  }
`;

export default Page;
