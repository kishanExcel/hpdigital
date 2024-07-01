
"use server"
import axios from 'axios';
export async function getConversations(id: any, token: any) {
    try {
        const response = await axios.get(`${process.env.NEXTAUTH_BASEURL}/api/v1/coversation?pageId=${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });

        if (response.status !== 200) {
            let errorDetails;
            try {
                errorDetails = JSON.stringify(response.data);
            } catch (jsonError) {
                errorDetails = 'Unable to access the pages at this moment';
            }
            console.error(`Error in fetching the pages details: Status ${response.status}, Details: ${errorDetails}`);

        } else {
            return response.data
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
             console.error('Error data:', error.response.data);
            } else if (error.request) {
                console.error('Error request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
            console.error('Error config:', error.config);
        } else {
            console.error('Unexpected error:', error);
        }
    }
}


