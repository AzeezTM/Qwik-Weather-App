import { component$, useStore, useWatch$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  
const myCity = useStore({
  city: "",
});

const myWeather = useStore({
  
})

const state = useStore({
  url: `https://api.openweathermap.org/data/2.5/weather?q=${myCity.city}&units=imperial&appid=${ATM_KEY}`
  ,
  responseJson: undefined,
});




  const ATM_KEY = "3b762aabb1ab28c97b70d949ba859ad4"
  //  const url =  `https://api.openweathermap.org/data/2.5/weather?q=${myCity.city}&units=imperial&appid=${ATM_KEY}`
   


   useWatch$(async ({ track }) =>{
    track(() =>state.url);
    const res = await fetch(state.url);
    const json = await res.json();
    state.responseJson = json;
    
   })
  return (
    
    <div>
    <h1></h1>
    </div>
  );
});

// export const head: DocumentHead = {
//   title: 'Welcome to Qwik',
// };
