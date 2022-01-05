import React ,{useState,useEffect}from 'react';
import './App.css';
import AppHeader from './AppHeader/AppHeader';
import { RootState } from './app/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './slice/appImageSlice';


function App() {
  const [image,setImage] = useState<any>();
  const count = useSelector((state: RootState) => state.appImageSlice.value)
  const dispatch = useDispatch()
  useEffect(() => {
    const headers = new Headers();
    headers.append('Authorization',"Client-ID 0YXvBUDsUvbQMMP-903ave0zSI9_7CEBX8Ti9TReIew")
    fetch('https://api.unsplash.com/photos/random',{
      headers:{
        'Authorization':process.env.REACT_APP_ACCESS_KEY as string
      }
    })
      .then(response => response.json())
      .then(async imagesData => {
        console.log('Images Data',imagesData)
      })
      .catch(err => {
        
      })
    return () => {
      
    }
  }, [])
  return (
    <div>
      <AppHeader />
      <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
