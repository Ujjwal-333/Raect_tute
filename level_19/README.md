
/*
================ API CRUD LOGIC REVISION ================

1. GET → API se data lana
----------------------------------------------------------
fetch("/posts")
     ↓
response.json()
     ↓
setPosts(result)
     ↓
posts.map()
     ↓
UI par data show


2. POST → Naya data add karna
----------------------------------------------------------
Input se data lo
     ↓
state me store karo
     ↓
fetch("/posts", { method: "POST" })
     ↓
body me data bhejo
     ↓
API me new data add


3. DELETE → Data delete karna
----------------------------------------------------------
Delete button click
     ↓
deleteUser(post.id)
     ↓
DELETE "/posts/id"
     ↓
Server se data delete
     ↓
setPosts(posts.filter(post => post.id !== id))
     ↓
UI se bhi data remove


IMPORTANT:
----------------------------------------------------------
API par change karna = Server/Database change
setPosts() = React ki UI/state change

Dono karna important hai.

GET    = Data Lao
POST   = Data Add
PUT    = Pura Data Update
PATCH  = Kuch Data Update
DELETE = Data Delete


IMPORTANT LINE:
----------------------------------------------------------
onClick={() => deleteUser(post.id)}

Jis post ke button par click hua,
usi post ki ID deleteUser() me jayegi.


DELETE LOGIC:
----------------------------------------------------------
posts.filter(post => post.id !== id)

Matlab:
"Jo ID delete karni hai usko chhodkar
baaki saare posts rakh do."


===========================================================


UserList
├── GET     → data dikhana
└── DELETE  → data delete karna

UserAdd
└── POST    → data add karna

*/

