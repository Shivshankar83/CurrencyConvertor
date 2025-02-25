import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch currency data");
                }
                const result = await response.json();
                setData(result.rates || {});
            } catch (error) {
                console.error("Error fetching currency data:", error);
                setData({});
            }
        };

        fetchData();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
