function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call or asynchronous operation
    const success = true;  // You can change this to false to simulate a rejection

    if (success) {
      resolve("API call successful");
    } else {
      reject("API call failed");
    }
  });
}
