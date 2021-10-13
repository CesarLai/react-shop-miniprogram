import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'

import './index.scss'

type PageStateProps = {

}

type PageOwnProps = {}

type UserPageProps = PageStateProps & PageOwnProps

export default function UserPage(props: UserPageProps)  {
    return (
      <View className='index'>

      </View>
    )
}

