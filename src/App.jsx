import './App.css'
import { messages } from './translations/messages'
import { IntlProvider } from 'react-intl';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { useStore } from './zustand/store';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  const locale = useStore(state => state.lang) == "ltr" ? 'en' : 'ar';
  const translation = messages[locale];

  return (
    <IntlProvider locale={locale} messages={translation} defaultLocale='en' >
      <RouterProvider router={router} />
      <ToastContainer position={"top-right"} autoClose={2000} />
    </IntlProvider>
  )
}

export default App
