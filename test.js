function capital(capitals) {
  return capitals.map((item) => `The capital of ${item['state'] || item['country']} is ${item['capital']}`);
}

