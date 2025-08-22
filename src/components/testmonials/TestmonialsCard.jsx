import "./Testmonials.css";

const TestmonialsCard = ({test}) => {
  return (
    <>
      <div className="test-member-content">
        <img
          src={test.imageURL}
        />
        <p>{test.comment}</p>
        <h3>{test.name}</h3>
      </div>
    </>
  );
};

export default TestmonialsCard;
