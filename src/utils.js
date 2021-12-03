const defaultOptions = {
    method: 'GET',
    // mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'include', // include, *same-origin, omit
    // headers: {
    //   Authorization:
    //     'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTg3MDI0NjUsIm5iZiI6MTU5ODcwMjQ2NSwianRpIjoiYmYzZWNmNzAtOTFjYi00MmI0LWI2MTUtNWNjNmY5MWI1MzY1IiwiZXhwIjoxNjMwMjM4NDY1LCJpZGVudGl0eSI6eyJlbWFpbCI6ImFiY0BkcmlzaHlhLmFpIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.f-qQyyb5STMfT1zzhnEoDwR3BZcZ-oE33SesmRM8Ups',
    // },
    redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin,
    // origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin,
    // unsafe-url
    // body: JSON.stringify(data), // body data type must match "Content-Type" header
  };
  
  export default function fetchApi(path, opts) {
    const options = { ...defaultOptions, ...opts };
    return fetch(path, options)
      .then((r) => r.json())
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Fetch Error', error);
        return {
          success: false,
          error,
        };
      });
  }