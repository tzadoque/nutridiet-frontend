import styled from 'styled-components';

const CustomCard = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 32px;
  user-select: none;
  font-family: Inter;

  .icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #f4f4f4;
    background-repeat: no-repeat;
    background-position: center center;

    background-image: url(${props => props.icon});
  }

  .number {
    font-weight: 500;
    font-size: 3rem;
  }

  .caption {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 16px;

    .icon {
      width: 48px;
      height: 48px;
    }

    .number {
      font-size: 2rem;
    }
  }
`;

export default function Card({ number, caption, icon }) {
  return (
    <CustomCard icon={icon}>
      <div className='icon'></div>
      <span className='number'>{number}</span>
      <p className='caption'>{caption}</p>
    </CustomCard>
  );
}
