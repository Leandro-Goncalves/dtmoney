import { useTransactions } from "../hooks/UseTransactions";
import { Container } from "./style";
import ReactLoading from 'react-loading';
import { TransactionItem } from "../TransactionItem";
import { TransactionTable } from "../TransactionTable";

export function Transaction() {
  return(
    <Container>
      {window.screen.width > 720
      ?<TransactionTable/>
      :<TransactionItem/>
      }
    </Container>
  )
}