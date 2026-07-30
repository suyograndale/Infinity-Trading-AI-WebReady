export async function smartApiPost(data: unknown) {

  const response = await fetch("/api/smartapi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();

}
