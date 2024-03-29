import { Box } from "@mui/material";
import { useContext } from "react";
import { IBaseCurrencyProps } from "../../types/types";
import { CONTEXT } from "../../libs/constants";
import NameCurrency from "../NameCurrency/NameCurrency";
import styles from "./BaseCurrency.module.scss";
import BaseMoneyField from "../BaseMoneyField/BaseMoneyField";

function BaseCurrency(props: IBaseCurrencyProps) {
  const { baseCurrency, setBaseCurrency } = props;
  const { currenciesAllNames, amount, setMoney } = useContext(CONTEXT);
  return (
    <>
      <NameCurrency>
        Base currency: {currenciesAllNames[baseCurrency.shortName]}
      </NameCurrency>
      <Box className={styles.inputCurrency__wrapper}>
        <BaseMoneyField
          setMoney={setMoney}
          currencyValue={baseCurrency}
          setCurrencyValue={setBaseCurrency}
          amount={amount}
        />
      </Box>
    </>
  );
}

export default BaseCurrency;
