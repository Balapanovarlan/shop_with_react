import { useEffect, useState } from "react";

const useDebounce = (value,  delay) => {
    const [debouncesValue, setDebouncesValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncesValue(value);
        }, delay);

        return () => {
            clearTimeout(timeout);
        }

    }, [value, delay]);

    return debouncesValue;
}

export default useDebounce;