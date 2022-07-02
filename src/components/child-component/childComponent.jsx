const ChildComponent = ({ name }) => {
    console.log("Child render");
    return (
      <div>
        <h2>{name}</h2>
      </div>
    );
}

export default ChildComponent;