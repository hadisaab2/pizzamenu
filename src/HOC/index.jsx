import React from 'react'
import { PageLayout } from './styles'

export default function HOC(WrappedComponent) {
    return (
        <PageLayout>{<WrappedComponent/>}</PageLayout>
  )
}
