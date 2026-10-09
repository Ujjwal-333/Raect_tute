
import { useActionState } from "react";

function App() {
  const handleLogin = (preData, formData) => {
    const name = formData.get("name");
    const password = formData.get("password");

    // Password mein sirf capital letters aur numbers allowed hain
    const regex = /^[A-Z0-9]+$/;

    if (!name || name.length > 10) {
      return {
        error: "Name should not contain more than five characters",
        name,
        password,
      };
    } else if (!regex.test(password)) {
      return {
        error: "Password can contain only capital letters and numbers",
        name,
        password,
      };
    } else {
      return {
        message: "Login Done",
        name,
        password,
      };
    }
  };

  // useActionState component ke andar call hoga
  const [data, action, pending] = useActionState(handleLogin, null);

  return (
    <>
      <h1>Validation with useActionState in React</h1>

      {data?.message && (
        <span style={{ color: "green" }}>{data.message}</span>
      )}

      {data?.error && (
        <span style={{ color: "red" }}>{data.error}</span>
      )}

      <form action={action}>
        <input
          defaultValue={data?.name}
          type="text"
          name="name"
          placeholder="Enter name"
        />

        <br />
        <br />

        <input
          defaultValue={data?.password}
          type="password"
          name="password"
          placeholder="Enter password"
        />

        <br />
        <br />

        <button disabled={pending}>
          {pending ? "Please wait..." : "Login"}
        </button>
      </form>
    </>
  );
}

export default App;

