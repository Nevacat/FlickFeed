import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const testPost = async () => {
    const result = await axios.delete('/comments/1',{
      data:{
        postId : 2
      }
    });
    console.log({ result: result.data });
  };

  useEffect(() => {
    testPost();
  }, []);
  return <div className="App"></div>;
}

export default App;
