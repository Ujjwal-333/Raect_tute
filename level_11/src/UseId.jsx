import React, { useId } from 'react'

const UseId = () => {

    const nameId = useId()
    const emailId = useId()
    const passwordId = useId()
    // e.preventDefault() = "Browser ka default kaam rok do, ab main khud handle karunga."
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Form Submitted")
        console.log("Name ID:", nameId)
        console.log("Email ID:", emailId)
        console.log("Password ID:", passwordId)
    }

    return (
        <>
            <h1>useId Hook in React</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor={nameId}>
                    Name:
                </label>
                <input
                    id={nameId}
                    type="text"
                    placeholder="Enter your name"
                />

                <br />
                <br />

                <label htmlFor={emailId}>
                    Email:
                </label>
                <input
                    id={emailId}
                    type="email"
                    placeholder="Enter your email"
                />

                <br />
                <br />

                <label htmlFor={passwordId}>
                    Password:
                </label>
                <input
                    id={passwordId}
                    type="password"
                    placeholder="Enter your password"
                />

                <br />
                <br />

                <button type="submit">
                    Submit
                </button>

            </form>
        </>
    )
}

export default UseId