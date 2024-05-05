import React from 'react'
import styles from './customize.module.css'
import Link from 'next/link'

export default function StepTitle({
  title,
  prvLink,
  shouldHide1,
  nextLink,
  shouldHide2,
}) {
  return (
    <>
      <div>
        <h6 className={styles['step-title']}>
          {title}
          <Link href={prvLink} passHref>
            <button
              className={styles['prv-step-button']}
              style={{ display: shouldHide1 ? 'none' : 'flex' }}
            >
              上一步
            </button>
          </Link>

          <Link href={nextLink} passHref>
            <button
              className={styles['next-step-button']}
              style={{ display: shouldHide2 ? 'none' : 'flex' }}
            >
              下一步
            </button>
          </Link>
        </h6>
      </div>
    </>
  )
}
