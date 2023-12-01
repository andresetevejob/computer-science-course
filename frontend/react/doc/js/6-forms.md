# REACT FORMS


## 1 - Controlled Form
```
type Contact = {
    firstname : string,
    lastName: string,
    email: string,
    message: string
    phoneNumber : string,
    reason:string
}
const Contact = ()=>{
 const [contact,setContact] = useState<Contact>({
    firstname:'',
    lastName:'',
    email:'',
    message:'',
    phoneNumber:'',
    reason:''
 });

 return (
    <>
        <form>
            <div>
            <label htmlFor="name">Your name</label>
                <input type="text" id="name" value={contact.name} onChange={(e) =>setContact({ ...contact, name: e.target.value })}/>
            </div>
            <div>
                <label htmlFor="email">Your email address</label>
                <input type="email" id="email" />
            </div>
            <div>
                <label htmlFor="reason">Reason you need to contact       us</label>
                <select id="reason">
                    <option value=""></option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="notes">Additional notes</label>
                <textarea id="notes" />
            </div>
        </form>

    </>
 )

}

```
## 2 - UnControlled Form
```
 * UseRef
 


```