import Header from '../../components/Header/Header'

const BaseLayout: React.FC = ({children}: any) => {
  return (
    <>
      <Header/>
      <div>
        {children}
      </div>
    </>

  )
}

export default BaseLayout
