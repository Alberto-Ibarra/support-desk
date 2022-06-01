import { useState } from "react"
import { useSelector } from "react-redux"

const NewTicket = () => {
    const {user} = useSelector((state) => state.auth)
    const [name] = useState(user.name)
    const [email] = useState(user.email)
    const [product, setProduct] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(product);
    }

    return (
        <>
            <section className="heading">
                <h1>Create New Ticket</h1>
                <p>Please fill out form below</p>
            </section>
            <section className="form">
                <div className="form-group">
                    <label htmlFor="name">Customer Name</label>
                    <input type="text" className="form-control" value={name} disabled/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Customer Email</label>
                    <input type="text" className="form-control" value={email} disabled/>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                    <label htmlFor="product">Product</label>
                    <select name="product" id="product" value={product} onChange={(e) => setProduct(e.target.value)}>
                        <option value="Xbox Series X">Xbox Series X</option>
                        <option value="PlayStation 5">PlayStation 5</option>
                        <option value="Nitendo Switch">Nitendo Switch</option>
                        <option value="DELL Computer">DELL Computer</option>
                    </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description of the issue</label>
                        <textarea name="description" id="decription" className="form-control" placeholder="Descreiption" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default NewTicket