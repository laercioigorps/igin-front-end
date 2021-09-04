export function fetcher(url, token) {
	console.log("asdasd")
  return fetch(url, {
    method: "POST",
    headers: { 
    	"Content-Type": "application/json",
    	"Authorization ": "Token "+ token, 
    },
  }).then(res => res.json());
}