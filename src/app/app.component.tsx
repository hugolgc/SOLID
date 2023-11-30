import { User } from "./shared/models/user.model";
import { UserService } from "./shared/services/user.service";
import { useEffect, useState } from "react";
import "./app.component.css";

export function AppComponent() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const usersFromService = await UserService.getUsers();
      setUsers(usersFromService);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="container">
      <h1>Liste des utilisateurs</h1>
      <figure>
        <table role="grid">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Âge</th>
              <th>Connecté</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.fullName}</td>
                <td>{user.getAge()}</td>
                <td>{user.isConnected() ? "Oui" : "Non"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </figure>
    </main>
  );
}
