//React method of importing images as variables
import dogImage from './assets/dog-image.jpg'

function App(){
 return(
  <>
   <h1>My First Customised React Page</h1>
   <p>I can put whatever I want inside this React App inside here</p>
   {/*This is the React method of importing image and using it*/}
   <img src={dogImage} alt="An image of a dog"/>
   {/*This is how you would normally use img tags. */}
   {/*The difference is that you MUST remember that the path is relative FROM index.html */}
   {/*That means you must link it ASSUMING you are from index.html's root folder */}
   {/*That is why you need to add /src first before going into /assets */}
   <img src="/src/assets/dog-image.jpg" alt="alternate way to show dog image"/>
  </>
 )
}

export default App