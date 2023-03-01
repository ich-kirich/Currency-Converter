import { Typography, Box, TextField } from "@mui/material";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { AllCurrencies, ICurrency } from "../../types/types";
import SelectCurrencyList from "../SelectCurrencyList/SelectCurrencyList";
import styles from "./Currency.module.scss";
import { changePropertyCurrency, favouriteProperty } from "../../utils/utils";

function Currency(props: {
  currencies: AllCurrencies;
  currency: ICurrency;
  listCurrencies: ICurrency[];
  setListCurrencies: Function;
}) {
  const { currencies, currency, listCurrencies, setListCurrencies } = props;
  const [amountMoney, setAmountMoney] = useState(0);

  const updateListCurrency = () => {
    changePropertyCurrency(
      listCurrencies,
      favouriteProperty,
      currency.shortName,
      setListCurrencies,
    );
  };
  return (
    <>
      <Typography variant="h6" component="h1" className={styles.text}>
        {currencies[currency.shortName]}
      </Typography>
      <Box className={styles.wrapperInpCurrency}>
        <StarIcon
          className={
            currency.favourite ? styles.isFavorite : styles.notFavorite
          }
          onClick={updateListCurrency}
        />
        <SelectCurrencyList
          currencies={currencies}
          chooseCurrency={currency.shortName}
          currenciesValue={listCurrencies}
          setCurrencies={setListCurrencies}
        />
        <TextField
          id="currecny"
          label="Enter a number"
          variant="filled"
          size="medium"
          type="number"
          fullWidth
          onChange={(e) =>
            Number(e.target.value) < 0
              ? setAmountMoney(0)
              : setAmountMoney(Number(e.target.value))
          }
          className={styles.inputCurrency}
        />
      </Box>
    </>
  );
}

export default Currency;
