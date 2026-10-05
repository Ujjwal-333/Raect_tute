import { useFormStatus } from "react-dom"

const CustomerForm = () => {

  const { pending } = useFormStatus()

  console.log(pending)

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="Enter Name"
      />

      <br />
      <br />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
      />

      <br />
      <br />

      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </div>
  )
}

const Useformstatus = () => {

  const handleSubmit = async (formData) => {

    await new Promise((res) => setTimeout(res, 2000))

    console.log("Submit")
    console.log(formData)
  }

  return (
    <>
      <h1>useFormStatus Hook in React 19</h1>

      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </>
  )
}

export default Useformstatus











/*
===========================================================
              useFormStatus() — React 19
===========================================================

useFormStatus() ek React Hook hai jo FORM ki current
submission status ke baare mein information deta hai.

Iska sabse common use "pending" status check karna hai.

-----------------------------------------------------------
1. useFormStatus() kya return karta hai?
-----------------------------------------------------------

const { pending } = useFormStatus();

pending:
    true  → Form submit ho raha hai
    false → Form submit nahi ho raha

Example:

<button disabled={pending}>
    {pending ? "Submitting..." : "Submit"}
</button>


-----------------------------------------------------------
2. useFormStatus() KAHAN use karna hai?
-----------------------------------------------------------

IMPORTANT:

useFormStatus() ko form ke ANDAR rendered CHILD
component mein use karna chahiye.

Correct structure:

<form action={handleSubmit}>
    <CustomerForm />
</form>


CustomerForm:

const CustomerForm = () => {

    const { pending } = useFormStatus();

    return (
        <button disabled={pending}>
            Submit
        </button>
    );
};


Kyun?

Kyuki useFormStatus() nearest parent <form> ki
submission status ko read karta hai.


-----------------------------------------------------------
3. Parent aur Child ka flow
-----------------------------------------------------------

<form action={handleSubmit}>
        ↓
   CustomerForm
        ↓
useFormStatus()
        ↓
     pending
        ↓
Button ka UI change


-----------------------------------------------------------
4. Submit karne par kya hota hai?
-----------------------------------------------------------

User Submit button click karta hai
            ↓
handleSubmit() call hota hai
            ↓
Form pending state mein chala jata hai
            ↓
pending = true
            ↓
"Submitting..." dikha sakte hain
            ↓
Button disable kar sakte hain
            ↓
Form action complete hota hai
            ↓
pending = false


-----------------------------------------------------------
5. Practical Example
-----------------------------------------------------------

const CustomerForm = () => {

    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
        </button>
    );
};


Iska fayda:

Normal state mein:
    [ Submit ]

Submit karte waqt:
    [ Submitting... ]  ← button disabled


-----------------------------------------------------------
6. useState ki zarurat kyun nahi?
-----------------------------------------------------------

Normally loading status ke liye hum useState use kar sakte hain:

const [loading, setLoading] = useState(false);

Lekin form submission ke status ke liye React 19 mein
useFormStatus() directly form ka pending status provide
karta hai.

Isliye is particular use case mein manually loading
state manage karne ki zarurat nahi padti.


-----------------------------------------------------------
7. IMPORTANT DIFFERENCE
-----------------------------------------------------------

useFormStatus()
        ↓
Form ki submission status ko track karta hai

useState()
        ↓
General application state ko manage karta hai


-----------------------------------------------------------
8. YAAD RAKHNE KA SIMPLE FORMULA
-----------------------------------------------------------

<form>
    ↓
Child Component
    ↓
useFormStatus()
    ↓
pending
    ↓
Loading UI


⭐ ONE LINE:

"useFormStatus() batata hai ki nearest parent FORM
abhi submit ho raha hai ya nahi."


-----------------------------------------------------------
⚠️ COMMON MISTAKE
-----------------------------------------------------------

Wrong:

const App = () => {

    const { pending } = useFormStatus();

    return (
        <form>
            ...
        </form>
    );
};


Correct:

const App = () => {

    return (
        <form>
            <CustomerForm />
        </form>
    );
};


const CustomerForm = () => {

    const { pending } = useFormStatus();

    return (...);
};


===========================================================
              QUICK REVISION
===========================================================

useFormStatus()
      ↓
Form ka status
      ↓
pending
      ↓
true = submitting
false = not submitting
      ↓
Button disable / Loading text / Spinner


⭐ MAIN POINT:
useFormStatus() ko form ke child component mein
use karo, taaki wo parent form ka status read kar sake.
===========================================================
*/