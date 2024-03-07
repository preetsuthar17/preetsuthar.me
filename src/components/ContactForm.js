import { useState } from "react";
import toast from "react-hot-toast";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        if (!name || !email || !subject || !description) {
            setLoading(false);
            toast.error("Please fill all details!")
            return;
        }
    
        try {
            const response = await fetch("/api/sendMail", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, subject, description }),
            });
    
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
    
            const data = await response.json();
    
            if (data.error === null) {
                toast.success("Message sent! We'll soon get back to you!")
            } else {
                toast.error("Something went wrong!")
            }
    
            setLoading(false);
            if (data && data.data && data.data.id) {
                toast.success("Message sent! We'll soon get back to you!")
                // setName("");
                // setEmail("");
            } else {
                toast.error("Something went wrong!")
            }
        } catch (error) {
            setLoading(false);
            toast.error("Something went wrong!")
        }
    };
    

    return (
        <main >
            <div >
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email-address">Email address</label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="subject">Subject</label>
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        autoComplete="false"
                        required
                        value={subject}
                        placeholder="subject"
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        autoComplete="false"
                        required
                        value={description}
                        placeholder="description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button
                        type="submit"
                    >
                        {loading ? (
                            <div
                                style={{
                                    borderTopColor: "transparent",
                                }}
                            ></div>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            </div>
        </main>
    );
};
