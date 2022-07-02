import useCounter from '../../hooks/useCounter';
import './styles.css';

const CustomHook1 = () => {

    const { count, add, sub } = useCounter(100);

    return (
        <div className='container'>
            <h1 onClick={add}>Counter 1 @ {count} </h1>
            <h1 onClick={sub}>Counter 1 @ {count} </h1>
        </div>
    )
}

export default CustomHook1;