import { useState } from 'react';
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header'

import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransaction() {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransaction() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal = {handleOpenNewTransaction} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransaction}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>

  );
}
