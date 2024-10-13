import useFetch from './UseFetch'

function App() {
  const {data,loading} = useFetch('https://dummyjson.com/products')

  if(loading){
    return <div><h1>loading....</h1></div>
  }

  if(!data){
    return <div><h1>data is not found</h1></div>
  }

  return(
  <>
    <ul>
      {data.map((item)=>{
        return (
        <li>
          <h1>{item.title}</h1>
        </li>
      )})}
    </ul>
  </>
  )
}

export default App
