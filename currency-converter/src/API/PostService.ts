import axios from "axios";

export async function getRateCurrency(currency = "usd") {
  const response = await axios.get(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
  );
  return response;
}

export async function getAllCurrencies(currency = "usd") {
  const response = await axios.get(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`,
  );
  return response;
}
