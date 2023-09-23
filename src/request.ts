export async function makePostRequest(data: string): Promise<string> {
  try {
    const response = await fetch('https://t75lx9rthk.execute-api.eu-north-1.amazonaws.com/reduce', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let responseText = await response.text();
    responseText = responseText.replace(/\n+$/, ''); //strip trailing newlines
    responseText = padData(responseText, 1, 1, 2, 2); //pad out text so it's scrollable in the textarea

    return responseText;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

const padData = (data: string, top: number, bottom: number, left: number, right: number): string => {
  return ("\n".repeat(top) + (data.split("\n").map(line => ' '.repeat(left) + line + ' '.repeat(right)).join("\n")) + "\n".repeat(bottom));
}



