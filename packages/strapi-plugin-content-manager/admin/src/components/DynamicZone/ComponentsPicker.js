import styled from 'styled-components';

const ComponentsPicker = styled.div`
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.2s ease-out;

  > div {
    margin-top: 15px;
    padding: 23px 18px 21px 18px;
    background-color: #f2f3f4;
  }

  ${({ isOpen }) =>
  isOpen &&
    `
    max-height: none;
    overflow: visible;
  `}

  .componentPickerTitle {
    margin-bottom: 15px;
    color: #919bae;
    font-weight: 600;
    font-size: 13px;
    line-height: normal;
  }
  .componentsListTitle {
    margin: 25px 0 15px;
    color: #919bae;
    font-weight: 600;
    font-size: 13px;
    line-height: normal;
    text-align: left;

    &:first-letter {
      text-transform: uppercase;
    }
  }
  .componentsList {
    display: flex;
    overflow-x: auto;
    flex-wrap: wrap;
  }
`;

export default ComponentsPicker;
