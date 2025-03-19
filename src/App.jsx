import './App.css'
import HeroBackground from './Components/HeroBackground'
import PricingTable from '/src/Components/PricingTable.jsx'
import ContactForm from '/src/Components/ContactForm.jsx'
import UsersList from './Components/UsersList'
function App() {

  return (
    <>
      <HeroBackground />
      <div className='md:flex gap-12 p-[2rem] md:px-[5rem]'>
        <PricingTable />
        <ContactForm />
      </div>
      <UsersList />
    </>
  )
}

export default App
