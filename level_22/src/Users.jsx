
// import { useEffect, useState } from "react";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Component render hone ke baad API se data fetch hoga
//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const response = await fetch(
//           "https://dummyjson.com/users"
//         );

//         const result = await response.json();

//         // API ke users ko state mein save karna
//         setUsers(result.users);
//       } catch (error) {
//         console.log("Error fetching users:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getUsers();
//   }, []);

//   if (loading) {
//     return <h3>Loading API Data...</h3>;
//   }

//   return (
//     <div>
//       <h2>Users List</h2>

//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.firstName} {user.lastName} - {user.age} years
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Users;









import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Button click hone par API call hogi
  const getUsers = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://dummyjson.com/users"
      );

      const result = await response.json();

      setUsers(result.users);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Users List</h2>

      <button onClick={getUsers}>Fetch API Data</button>

      {loading && <h3>Loading API Data...</h3>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
