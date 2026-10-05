# /*

```
            CUSTOM HOOK — LOGIC
```

============================================================

Sabse pehle problem samjho:

Maan lo mere component mein koi aisa logic hai
jisme STATE + usestate ko change karne wala FUNCTION hai.

Agar mujhe wahi logic doosre components mein bhi chahiye,
to har component mein same logic dobara likhna padega.

Yahan CODE REPEAT ho raha hai.

---

## CUSTOM HOOK KI NEED YAHIN SE AATI HAI

Hum common logic ko component ke andar rakhne ke bajay
component se BAHAR nikaal dete hain.

Us common logic ko ek alag function ke andar rakhte hain.

Ye special function "Custom Hook" kehlata hai.

Custom Hook ka naam generally "use" se start hota hai.

Example soch:

useToggle
useCounter
useFetch

---

## AB SABSE IMPORTANT FLOW

Component kehta hai:

"Mujhe toggle wala logic chahiye."

```
    ↓
```

Component Custom Hook ko call karta hai.

```
    ↓
```

Custom Hook ke andar state aur us state se
related saara logic hota hai.

```
    ↓
```

Custom Hook apna useful data aur functions
Component ko WAPAS de deta hai.

```
    ↓
```

Component unko use karke apna UI chalata hai.

Yaani:

Component
↓
Custom Hook se logic maango
↓
Custom Hook state + logic handle kare
↓
Custom Hook result wapas de
↓
Component us result ko UI mein use kare

---

## TOGGLE EXAMPLE KO DIMAGH MEIN AISE SOCHO

Hume ek aisi value chahiye jo:

TRUE  → Heading dikhao
FALSE → Heading chhupa do

Is value ko manage karne ka kaam Custom Hook karega.

Custom Hook ke andar:

1. Current value rakhi jayegi.

2. Value ko change karne ka function banega.

3. Jab function chalega:

   TRUE  → FALSE
   FALSE → TRUE

4. Phir Custom Hook:

   "Ye current value hai"
   "Aur ye value change karne wala function hai"

   Component ko wapas de dega.

---

## COMPONENT KA KAAM KYA HAI?

Component ko ye nahi sochna:

"State kaise manage karni hai?"
"True ko false kaise karna hai?"
"False ko true kaise karna hai?"

Ye saara kaam Custom Hook karega.

Component sirf ye dekhega:

"Current value kya hai?"

Aur:

"Jab button click ho to toggle function chala do."

Isliye Custom Hook ka main fayda hai:

LOGIC ALAG
UI ALAG

---

## EK BAHUT IMPORTANT BAAT

Custom Hook koi naya magic nahi hai.

Custom Hook basically:

"Common React logic ko ek reusable function mein
nikal kar rakhna"

hai.

Matlab agar mujhe same stateful logic 5 components mein
chahiye, to main 5 baar same logic copy nahi karunga.

Main ek Custom Hook banaunga.

Phir jitne components ko woh logic chahiye,
woh Custom Hook ko use kar lenge.

---

## YAAD RAKHNE KA SABSE SIMPLE FORMULA

COMPONENT = UI

CUSTOM HOOK = REUSABLE LOGIC

Aur poora flow:

Problem
↓
Same logic baar-baar likhna pad raha hai
↓
Common logic ko component se bahar nikalo
↓
Ek "use..." function banao
↓
Ye Custom Hook hai
↓
Custom Hook logic handle karega
↓
Result Component ko dega
↓
Component us result se UI chalाएगा

---

## INTERVIEW MEIN YAAD RAKHNA

"Custom Hook ka use common stateful logic ko
different components mein reuse karne ke liye hota hai."

Bas ye sentence yaad rahe to Custom Hook ka
basic concept kabhi nahi bhulega.
=================================

*/
