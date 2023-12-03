import { useState } from "react";
import { UsersComponent } from "./users/users.component";
import { TournamentsComponent } from "./tournaments/tournaments.component";
import "./app.component.css";

export function AppComponent() {
  const [context, setContext] = useState<"user" | "tournament">("user");

  return (
    <>
      <nav className="container">
        <ul>
          <li>
            <button onClick={() => setContext("user")}>Utilisateurs</button>
          </li>
          <li>
            <button onClick={() => setContext("tournament")}>Tournois</button>
          </li>
        </ul>
      </nav>
      <main className="container">
        {context === "user" && <UsersComponent />}
        {context === "tournament" && <TournamentsComponent />}
      </main>
    </>
  );
}
