import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './MenuList.scss'

export function MenuList ({ children, className, items }: InferProps<typeof MenuList.propTypes>) {
  const list = items.map((item: any) => {
    return (<div key={item} className={'--ItemContainer'}>{ item }</div>)
  })

  return (
    <div className={['Base--MenuList', className].join(' ')}>
      <>{ list }</>
    </div>
  )
}

MenuList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.any,
  children: PropTypes.any
}
