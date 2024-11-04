import React from 'react'

export default function NavMessage() {
  return (
    <li className='nav-item dropdown'>
      <a className='nav-link nav-icon' href="#" data-bs-toggle="dropdown">
        <i className='bi bi-chat-left-text'></i>
        <span className='badge bg-success badge-number'>3</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>
          You have 3 new messages
          <a href="#">
            <span className='badge rounded-pill bg-primary p-2 ms-2'>
              View all
            </span>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='message-item'>
          <i className='bi bi-exclamation-circle text-warning'></i>
          <div className=''>
            <h4>lorem ipsum</h4>
            <p>Quae dolrem earum veritatis</p>
            <p>30 min. ago</p>
          </div>
        </li>


        <li>
          <hr className='dropdown-divider' />
        </li>


        <li className='notification-item'>
          <i className='bi bi-x-circle text-danger'></i>
          <div>
            <h4>lorem ipsum</h4>
            <p>Quae dolrem earum veritatis</p>
            <p>1 hr. ago</p>
          </div>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>


        <li className='notification-item'>
          <i className='bi bi-check-circle text-success'></i>
          <div>
            <h4>lorem ipsum</h4>
            <p>Quae dolrem earum veritatis</p>
            <p>2 hrs. ago</p>
          </div>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>


        <li className='notification-item'>
          <i className='bi bi-info-circle text-primary'></i>
          <div>
            <h4>lorem ipsum</h4>
            <p>Quae dolrem earum veritatis</p>
            <p>4 hrs. ago</p>
          </div>
        </li>


        <li>
          <hr className='dropdown-divider' />
        </li>


        <li className='dropdown-footer'>
          <a href="#">Show all notifications</a>
        </li>

      </ul>

    </li>
  )
}
