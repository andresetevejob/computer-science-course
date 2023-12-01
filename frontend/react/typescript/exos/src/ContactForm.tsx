import { FormEvent, useState } from "react";

type Contact = {
    firstname : string,
    email: string,
    notes: string
    reason:string
}
const ContactForm = ()=>{
 const [contact,setContact] = useState<Contact>({
    firstname:'',
    email:'',
    notes:'',
    reason:''
 });
 const handleSubmit= (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(contact)
 }
 // console.log("rerender");

 return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Your name</label>
                <input type="text" id="name" value={contact.firstname} onChange={(e) =>setContact({ ...contact, firstname: e.target.value })}/>
            </div>
            <div>
                <label htmlFor="email">Your email address</label>
                <input type="email" id="email" value={contact.email} onChange={(e) =>setContact({ ...contact, email: e.target.value })}/>
            </div>
            <div>
                <label htmlFor="reason">Reason you need to contact us</label>
                <select id="reason"
                value={contact.reason}
                onChange={(e) =>
                  setContact({ ...contact, reason: e.target.value })
                }
                >
                    <option value=""></option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="notes">Additional notes</label>
                <textarea id="notes" value={contact.notes}
                    onChange={(e) =>
                        setContact({ ...contact, notes: e.target.value })
                }/>
            </div>
            <div>
        <button
          type="submit"
          className="mt-2 h-10 px-6 font-semibold             bg-black text-white"
        >
          Submit
        </button>
      </div>
        </form>

    </>
 )

}
export default ContactForm