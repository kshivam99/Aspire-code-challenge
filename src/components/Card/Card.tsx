import React from 'react'
import { Box } from '@mantine/core'
import styles from './Card.module.css';

function Card(): JSX.Element {
  return (
    <Box className={styles.container}>
      <Box className={styles.badge}>
        Show card number
      </Box>
    </Box>
  )
}

export default Card