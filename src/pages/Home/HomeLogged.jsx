import React from 'react'

const HomeLogged = () => {
  return (
    <div className="ml-[320px] p-4 h-dvh bg-light-background dark:bg-dark-background">
    <>
      <LanguageSelector onSelectLanguage={handleSelectLanguage} />
      {selectedLanguage && <p className="mt-4">Selected Language: {selectedLanguage}</p>}
    </>
  </div>
  )
}

export default HomeLogged