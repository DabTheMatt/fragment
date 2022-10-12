import { Link } from "react-router-dom";

export default function HomePage() {
    return (
      <div>
        <h1>Hello from Fragment</h1>
        <div>
            <Link to="/fragment/read">Read</Link>
        </div>
       
        <div>v0.1-apollo-1</div>
      </div>
    );
  }