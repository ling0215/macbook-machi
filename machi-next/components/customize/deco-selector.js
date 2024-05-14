import { useState, useEffect } from 'react'
import styles from './customize.module.css'
import { useCustomize } from '@/hooks/use-customize'

export default function DecoSelector({
  decoTitle,
  decoSubtitle,
  options,
  displayType,
  onClick,
  onFileChange,
}) {
  // 選擇的檔案
  const [selectedFile, setSelectedFile] = useState(null)
  // 是否有檔案被挑選
  const [isFilePicked, setIsFilePicked] = useState(false)
  // 預覽圖片
  // const [preview, setPreview] = useState('')
  const { customize, setPreview } = useCustomize()

  const handleClick = (event) => {
    onClick(event.target.value)
  }

  const handleFileChange = (event) => {
    // onFileChange(event.target.files[0])
    const file = event.target.files[0]

    if (file) {
      setIsFilePicked(true)
      setSelectedFile(file)
      setPreview('')
    } else {
      setIsFilePicked(false)
      setSelectedFile(null)
      setPreview('')
    }
  }

  // 當選擇檔案更動時建立預覽圖
  useEffect(() => {
    if (!selectedFile) {
      setPreview('')
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    console.log(objectUrl)
    setPreview(objectUrl)

    // 當元件unmounted時清除記憶體
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])
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
