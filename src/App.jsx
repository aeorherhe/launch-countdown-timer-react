// import { useState } from "react";

import { TimersCenter } from "./components/TimersCenter";
import { SocialLinks } from "./components/SocialLinks";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main className="main">
      <TimersCenter />
      <SocialLinks />
    </main>
  );
}

export default App;
