export async function makePostRequest(data: string): Promise<string> {
  try {
    const response = await fetch('https://yvt2o2z081.execute-api.eu-north-1.amazonaws.com/reduce', {
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

export function downloadTextFile(title: string, data: string) {
  // Create a Blob containing the text data
  const blob = new Blob([data], { type: 'text/plain' });

  // Create a download link
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = title;

  // Trigger the download
  document.body.appendChild(a);
  a.click();

  // Clean up
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

const padData = (data: string, top: number, bottom: number, left: number, right: number): string => {
  return ("\n".repeat(top) + (data.split("\n").map(line => ' '.repeat(left) + line + ' '.repeat(right)).join("\n")) + "\n".repeat(bottom));
}



