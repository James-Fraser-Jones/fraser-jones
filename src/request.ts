export async function makePostRequest(data: string): Promise<string> {
  try {
    const response = await fetch('http://16.16.67.144:3000/reduce', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseText = await response.text();

    return responseText;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}




