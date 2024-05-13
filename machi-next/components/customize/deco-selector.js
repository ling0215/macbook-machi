import React from 'react'
import styles from './customize.module.css'

export default function DecoSelector({
  decoTitle,
  decoSubtitle,
  options,
  displayType,
  onClick,
  onFileChange,
}) {
  const handleClick = (event) => {
    onClick(event.target.value)
  }

  const handleFileChange = (event) => {
    onFileChange(event.target.files[0])
  }
  return (
    <div className={styles['deco-overview']}>
      <div className={styles['deco-titles']}>
        <p>{decoTitle}</p>
        <p>{decoSubtitle}</p>
      </div>
      <hr className={styles['hr-brown']} />
      <div className={styles['deco-options']}>
        <div className={styles['deco-options']}>
          {options.map((option) => (
            <div className={styles['deco-select']} key={option.value}>
              <div className={styles['deco-radio']}>
                <input
                  onClick={() => option.onClick(option.label)}
                  type={displayType}
                  id={option.value}
                  name={option.name}
                  value={option.label}
                  style={{ display: displayType === 'radio' ? 'flex' : 'none' }}
                />
              </div>
              <div className={styles['deco-checkbox']}>
                <input
                  onClick={() => option.onClick(option.label)}
                  type="checkbox"
                  id={option.value}
                  name="decos"
                  value={option.label}
                  style={{
                    display: displayType === 'checkbox' ? 'flex' : 'none',
                  }}
                />
              </div>
              <div className={styles['label-and-upload']}>
                {option.value === 'photo' ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <label htmlFor={option.value}>{option.label}</label>
                    <input
                      className="form-control form-control-sm ms-3"
                      id="formFileSm"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </div>
                ) : (
                  <label htmlFor={option.value}>{option.label}</label>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
