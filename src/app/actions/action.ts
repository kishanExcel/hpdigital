import axios from 'axios';

export async function getData() {
    // handle using server actions
    try {
        const response = await axios.get(`${process.env.NEXTAUTH_BASEURL}/api/v1/pages`, {
            headers: {
                'Authorization': `Bearer ${process.env.NEXTAUTH_USER_TOKEN}`
            }
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
            return response.data.data
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {

                console.error('Error data:', error.response.data);
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
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
export async function getConversations() {
    // handle using server actions
    try {
        const response = await axios.get(`${process.env.NEXTAUTH_BASEURL}/api/v1/coversation?pageId=322980254230386`, {
            headers: {
                'Authorization': `Bearer ${process.env.NEXTAUTH_PAGE_TOKEN}`
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
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
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
export async function getConversationsById() {
    try {
        const response = await axios.get(`${process.env.NEXTAUTH_BASEURL}/api/v1/messages?conversationId=t_122095210520350454`, {
            headers: {
                'Authorization': `Bearer ${process.env.NEXTAUTH_PAGE_TOKEN}`
            }
        });

        if (response.status !== 200) {
            let errorDetails;
            try {
                errorDetails = JSON.stringify(response.data);
            } catch (jsonError) {
                errorDetails = 'Unable to access the chats at this moment';
            }
            console.error(`Error in fetching in chats details: Status ${response.status}, Details: ${errorDetails}`);

        } else {
            return response.data
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {

                console.error('Error data:', error.response.data);
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
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