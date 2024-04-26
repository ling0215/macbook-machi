import { useEffect } from 'react'
import Detail from './[pid]'


export default function List() {
  // Toggle the side navigation
  useEffect(() => {
    // fix next issue
    if (typeof window !== 'undefined') {
      const sidebarToggle = document.body.querySelector('#sidebarToggle')

      if (sidebarToggle) {
        // 在localStorage中儲存目前sidebar情況
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
          document.body.classList.toggle('sb-sidenav-toggled')
        }

        sidebarToggle.addEventListener('click', (event) => {
          event.preventDefault()

          document.body.classList.toggle('sb-sidenav-toggled')

          localStorage.setItem(
            'sb|sidebar-toggle',
            document.body.classList.contains('sb-sidenav-toggled')
          )
        })
      }
    }
  }, [])

  return (
    <>
      <div className="row mt-2 mb-3">
        <h5 className="card-text d-flex justify-content-between align-items-center">
          <span className="ps-3"></span>
          <div className="d-flex p-2 justify-content-end align-items-center">
            <div className="toolbar">
              <button className="btn" id="sidebarToggle">
                隱藏篩選條件 <i className="bi bi-toggles"></i>
              </button>
            </div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                排序依據
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    最新
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    價格：由高至低
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    價格：由低至高
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </h5>
      </div>
      <div class="class-list">
        <img src="/images/product/list/p1-thumb.webp" sizes='(max-width: 960px) 100vw, 960px'/>
      </div>
    </>
  )
}
