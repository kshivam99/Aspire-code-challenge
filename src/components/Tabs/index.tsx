import React from 'react'
import { Flex, Text } from '@mantine/core'
import classes from './Tabs.module.css';

function Tabs(): JSX.Element {
  return (
    <Flex gap='30px' mt={24}>
        <Flex className={classes.active}>
            <Text fw={700}>My debit cards</Text>
        </Flex>
        <Flex className={classes.inActive}>
            <Text>All company cards</Text>
        </Flex>
  </Flex>
  )
}

export default Tabs