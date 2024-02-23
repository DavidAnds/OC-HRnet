import { useState } from "react"
import { Modal, Paper, Button } from "@mui/material"
import styles from "./Popup.module.css"

function Popup({ open, onClose, text }) {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal" aria-describedby="modal-modal-description">
      <Paper className={styles.paper}>
        <p className={styles.text}>{text}</p>
        <Button className={styles.closeButton} onClick={onClose} color="inherit">
          x
        </Button>
      </Paper>
    </Modal>
  )
}

export default Popup
