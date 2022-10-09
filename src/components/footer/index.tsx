import React, { memo } from 'react'

import { footerList } from '@/assets/data/footer'

import { FooterWrapper } from './style'

const Footer = memo(() => {
  return (
    <FooterWrapper>
      <div className="footer">
        {
          footerList.map(list => (
            <div className='list' key={list.name}>
              <div className="list-title">{list.name}</div>
              {
                list.items.map((item, index) => (
                  <a className='list-item' key={index}>{item}</a>
                ))
              }
            </div>
          ))
        }
      </div>
    </FooterWrapper>
  )
})

export default Footer
