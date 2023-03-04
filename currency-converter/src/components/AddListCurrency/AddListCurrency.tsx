import { List, ListItem, ListItemText } from "@mui/material";
import { useContext } from "react";
import { ICurrency } from "../../types/types";
import { Context, saveCurrencyToList } from "../../utils/utils";
import styles from "./AddListCurrency.module.scss";

function AddListCurrency(props: {
  listCurrencies: ICurrency[];
  setListCurrencies: Function;
}) {
  const { listCurrencies, setListCurrencies } = props;
  const { currenciesAllNames } = useContext(Context);

  function addToList(elem: string) {
    saveCurrencyToList(listCurrencies, setListCurrencies, elem);
  }

  return (
    <List className={styles.list__name}>
      {Object.keys(currenciesAllNames).map((elem) => (
        <ListItem key={elem}>
          {!listCurrencies.some((currency) => currency.shortName === elem) && (
            <ListItemText
              className={styles.name__currency}
              primary={`${elem}: ${currenciesAllNames[elem]}`}
              onClick={() => addToList(elem)}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
}

export default AddListCurrency;