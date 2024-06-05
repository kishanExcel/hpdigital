import { cookies, headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import axios, { AxiosResponse } from 'axios';

interface AccountData {
    access_token: string;
}

interface AccountsData {
    data: AccountData[];
}

interface ApiResponse {
    success: boolean;
    data: {
        accounts: AccountsData;
    };
}

export async function GET(request: NextRequest) {
    try {
        const response: AxiosResponse<ApiResponse> = await axios.get(`${process.env.NEXTAUTH_BASEURL}/api/v1/pages`, {
            headers: {
                'Authorization': `Bearer ${process.env.NEXTAUTH_USER_TOKEN}`
            }
        });

        if (response.data.success && response.data.data.accounts.data.length > 0) {
            return NextResponse.json({ data: response.data.data.accounts.data[0].access_token });
        } else {
            console.error(`Error in fetching the pages details: Status ${response.status}`);
            return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}