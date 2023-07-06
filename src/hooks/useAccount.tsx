import { useEffect, useState } from "react";
import { type AccountResponse } from "~/types/types";

function useAccount() {
    const [accountResponse, setAccountResponse] = useState<AccountResponse | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/account', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    console.error(response);
                    throw new Error('API request failed');
                }

                const fetchedData = await response.json() as AccountResponse;
                setAccountResponse(fetchedData);
            } catch (error) {
                console.error(error);
                setAccountResponse(null);
            }
        };

        void fetchData();
    }, []);

    return accountResponse;
}

export default useAccount;
