import { useTransactions } from "../hooks/UseTransactions";
import { Container, Loading, Item } from "./style";
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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 10
    }
  }
}

export function TransactionItem() {

  const {transactions} = useTransactions();

  return(
    <motion.div initial="initial" animate="animate" variants={stagger}>
      <Container>
        {
          transactions.length
          ?
          <>
            <header>
              <span>Listagem</span>
              <span>{transactions.length} iten{transactions.length !== 1 && "s"}</span>
            </header>
            <body>
              {transactions.map((transaction: transaction) => (
                <motion.div
                  initial={{y: 60, opacity: 0}}
                  animate={{y:0, opacity: 1}}
                >
                  <Item>
                    <div>
                      <div className="title">{transaction.title}</div>
                      <div className={`amount ${transaction.type}`}>
                        {transaction.type === 'withdraw' && '- '}
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                          }).format(transaction.amount)}
                      </div>
                      <div className="date">
                        <span>{transaction.category}</span>
                        <span>{new Intl.DateTimeFormat('pt-BR').format(
                          new Date(transaction.createAt)
                          )}</span>
                      </div>
                    </div>     
                  </Item>
                </motion.div>
              ))}
            </body>
          </>
          :
          <Loading><ReactLoading type="spin" color="#6d6d6d" className="loading"/></Loading>

        }
        
      </Container>
    </motion.div>
  )
}