import { createContext, useEffect, useRef, useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import { Outlet } from 'react-router-dom'
import Loading from './components/Loading'
import { triggerEventNameOfScroll } from './DumpData'

export const AppContext = createContext<string>('')
function App() {
  const [loading,setLoading] = useState(true)
  const [messageEvent,setMessageEvent] = useState<string>("")
  const sectionIndex = useRef(0)

  function handleScroll(event){
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    const scrollRatio = scrollTop / (scrollHeight - clientHeight);

    // considering ratio for each level
    if(scrollRatio > 0.15 && sectionIndex.current < 1){
      setMessageEvent(triggerEventNameOfScroll.aboutPage.teamSection.section1)
      sectionIndex.current = 1
    } else if(scrollRatio > 0.35 && sectionIndex.current < 2){
      setMessageEvent(triggerEventNameOfScroll.aboutPage.teamSection.section2)
      sectionIndex.current = 2
    } else if(scrollRatio > 0.7 && sectionIndex.current < 3){
      setMessageEvent(triggerEventNameOfScroll.aboutPage.teamSection.section3)
      sectionIndex.current = 3
    }
  }
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  })
  if(loading){
    return <Loading/>
  }
  return (
    <AppContext.Provider value={messageEvent}>
      <div className='app' onScroll={handleScroll}>
        <TopBar/>
        <Outlet/>
      </div>
    </AppContext.Provider>
  )
}

export default App
