import { fakeNames } from "./fakeNames";
import { FilterList } from "./FilterList";

// Example usage of useCallback -> when function is used as dependency to useEffect
const UseCallbackExample3 = () => {

  return (
    <FilterList names={fakeNames} />
  );
}

export default UseCallbackExample3;