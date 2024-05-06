import React from 'react'
import styles from './customize.module.css'

export default function DecoSelector({
  decoTitle,
  decoSubtitle,
  options,
  displayType,
}) {
  return (
    <div className={styles['deco-overview']}>
      <div className={styles['deco-titles']}>
        <p>{decoTitle}</p>
        <p>{decoSubtitle}</p>
      </div>
      <hr className={styles['hr-brown']} />
      <div className={styles['deco-options']}>
        {/* {options.map((option) => (
          <div className={styles['deco-select']} key={option.value}>
            <input
              type={displayType}
              id={option.value}
              name="layer"
              value={option.label}
              style={{ display: displayType === 'radio' ? 'flex' : 'none' }}
            />
            <input
              className={styles['deco-checkbox']}
              type="checkbox"
              id={option.value}
              name="decos"
              value={option.label}
              style={{
                display: displayType === 'checkbox' ? 'flex' : 'none',
              }}
            />
            <label htmlFor={option.value}>{option.label}</label>
            {option.value === 'photo' && (
              <input type="file" id="deco-photo" name="deco-photo" accept="*" />
            )}
          </div>
        ))} */}
        <div className={styles['deco-options']}>
          {options.map((option) => (
            <div className={styles['deco-select']} key={option.value}>
              <div className={styles['deco-radio']}>
                <input
                  type={displayType}
                  id={option.value}
                  name={option.name}
                  value={option.label}
                  style={{ display: displayType === 'radio' ? 'flex' : 'none' }}
                />
              </div>
              <div className={styles['deco-checkbox']}>
                <input
                  type="checkbox"
                  id={option.value}
                  name={option.label}
                  value={option.label}
                  style={{
                    display: displayType === 'checkbox' ? 'flex' : 'none',
                  }}
                />
              </div>
              <div className={styles['label-and-upload']}>
                <label htmlFor={option.value}>{option.label}</label>
                {option.value === 'photo' && (
                  <input
                    type="file"
                    id="deco-photo"
                    name="deco-photo"
                    accept="*"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
