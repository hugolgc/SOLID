import { User } from "./shared/user.model";
import { UserService } from "./shared/user.service";
import { useEffect, useState } from "react";
import "./users.component.css";

export function UsersComponent() {
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
    <>
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
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.isConnected() ? "Oui" : "Non"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </figure>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </>
  );
}
