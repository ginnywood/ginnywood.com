import React from 'react'
import Switch from 'react-switch'
import { useColorMode } from 'theme-ui'

const ThemeSwitch = () => {
  const [colorMode, setColorMode] = useColorMode()

  function changeTheme() {
    if (colorMode === 'light') {
      setColorMode('dark')
    } else {
      setColorMode('light')
    }
  }

  return (
    <div className="switch-theme">
      <label htmlFor="switch-theme">
        <Switch
          checked={colorMode === 'light' ? true : false}
          onChange={() => changeTheme()}
          offColor={'#FFF'}
          offHandleColor={'#232323'}
          onColor={'#232323'}
          onHandleColor={'#FFF'}
          id="switch-theme"
          handleDiameter={6}
          height={24}
          width={48}
          activeBoxShadow={'0 0 1px 2px #FB575E'}
          uncheckedIcon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
            >
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="#000"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7.2V6M12 18v-1.2M16.8 12H18M6 12h1.2M15.394 15.394l.849.849M7.757 7.757l.849.849M8.606 15.394l-.849.849M16.243 7.757l-.849.849"
                stroke="#000"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          checkedIcon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
            >
              <path
                d="M13.275 7a4.98 4.98 0 0 1 .56 2.304c0 2.794-2.346 5.098-5.305 5.098-.51 0-1.02-.098-1.53-.196C7.867 15.873 9.653 17 11.693 17 14.601 17 17 14.745 17 11.902c.05-2.353-1.53-4.265-3.724-4.902z"
                stroke="#FFF"
                strokeMiterlimit="10"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </label>
    </div>
  )
}

export default ThemeSwitch
