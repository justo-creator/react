import '../style/datos.css'

const Datos = ({ datos }) => {
    
    return( 

        <>
        <main className='main-content'>
        { datos.map((item) => (
          <div key={item.id}>
            <img src={item.image} />
            <section className='section-content'> 
                <div>
            <h3>{item.name}</h3>
            <p>{item.gender}</p>
                </div>
                <div>
                    <a href='#'>Detail</a>
                </div>
            </section>
          </div>
        ))
    }
        </main>
        </>
        
)}
 
export default Datos;
