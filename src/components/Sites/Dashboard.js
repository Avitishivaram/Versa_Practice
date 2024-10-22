import React from 'react';


let Dashboard = () =>{
  return(
    <div>
      <center>
        <h1>*****This is Dashboard*****</h1>
        <p>
        Lazy loading in React allows you to split your code into smaller chunks, loading only the code that is needed for a particular part of your application when it is actually required. This can improve the initial loading time of your application.
        </p><br/><br/>
<p>React provides a feature called dynamic import, along with React’s Suspense component, to achieve lazy loading.</p><br/><br/>

<p>lazy() is used to dynamically import components only when they’re needed.</p><br/><br/>

<p>Suspense is a component provided by React that lets you “wait” for the dynamic import to load, showing a fallback UI in the meantime (in this case, a simple “Loading…” message).</p><br/><br/>


<p>Different ways to implement Lazy Loading</p><br/><br/>
<p>
   <h4> 1) With Conditional Rendering</h4> <br/>

    <h4> 2) With Routing </h4>

        </p>
      </center>
    </div>
  )
}

export default Dashboard