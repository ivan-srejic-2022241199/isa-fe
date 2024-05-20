import {useCallback, useState} from "react";
import axios from "axios";

const useListData = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const getData = useCallback(async () => {
        setLoading(true);
        let result = await axios.get(url);
        setData(result.data);
        setLoading(false);
    }, [url]);

    return {getData, loading, data};
}

export default useListData;