import { useTransactions } from "../hooks/UseTransactions";
import { Container, Loading } from "./style";
import ReactLoading from 'react-loading';
import { motion } from "framer-motion";

interface transaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createAt: string
}

export function TransactionTable() {

  const {transactions} = useTransactions();

  return(
    <Container>
      {
        transactions.length 
        ? <motion.table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction: transaction) => (
              <motion.tr
                initial={{y: 60, opacity: 0}}
                animate={{y:0, opacity: 1}}
              key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === 'withdraw' && '- '}
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createAt)
                    )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
        : <Loading><ReactLoading type="spin" color="#6d6d6d" className="loading"/></Loading>
      }
    </Container>
  )
}