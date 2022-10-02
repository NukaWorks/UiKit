import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import './MenuList.scss'

export function MenuList ({ children, className, items, title }: InferProps<typeof MenuList.propTypes>) {
  const list = items.map((item: any) => {
    return (<div key={item} className={'Base--MenuList__ItemContainer'}>{ item }</div>)
  })

  return (
    <div className={['Base--MenuList', className].join(' ')}>
      <div className={'Base--MenuList__Title'}>
        { title }
      </div>
      <div className={'Base--MenuList__ListContainer'}>
        <div className={'Base--MenuList__ListContainer__C'}> { list } </div>
      </div>
    </div>
  )
}

MenuList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.any
}
