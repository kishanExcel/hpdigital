
export async function getData() {
    // handle using server actions
    try {
        const jsonResponse = await fetch(`https://graph.facebook.com/me?fields=id,name,accounts&access_token=${process.env.FACEBOOK_GRAPH_API}`);
        if (!jsonResponse.ok) {
            let errorDetails;
            try {
                const errorData = await jsonResponse.json();
                errorDetails = JSON.stringify(errorData);
            } catch (jsonError) {
                errorDetails = 'Unable to parse error details from JSONPlaceholder API';
            }
            console.error(`Error from JSONPlaceholder API: Status ${jsonResponse.status}, Details: ${errorDetails}`);

        } else {
            const responseData = await jsonResponse.json();
            console.log('response data', responseData);
            return responseData
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error('Unexpected error:', error.message);

        } else {
            console.error('Unexpected error:', error);
        }
    }
}