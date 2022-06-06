import './landing.css'

export function LandingPage() {
    return <main className='landing'>
        <div className='heroContainer'>
        <section className='heroTextSection'>
            <h1 className='brandName'>In<span style={{ color: "var(--prime-blue)" }}>Scrire</span></h1>
            <div>
                <h2>Inscrire when it has to get done.</h2>
                <h2 style={{ color: "var(--prime-blue)" }}>It's How Inscrire Is Done.</h2>
                <p>Manage your daily tasks and workflow in a modern way and <br /> boost your efficiency without any efforts</p>
            </div>
            <div>
                <button className='btn btn-primary'>Join Now</button>
                <p>Already have an account?</p>
            </div>

        </section>
        <section className='heroImageSection'>
            <img className='heroImg' src='https://res.cloudinary.com/doo5jbomi/image/upload/v1652961346/NotesApp/notebook_l1jjfx.png' alt="Notebook" />
        </section>
        </div>
    </main>
}
