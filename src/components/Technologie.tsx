import React from 'react';
import '../styles/Technologie/Technologie.css';
//import Card from './Card';
//import technologies from "../techno.json";

const Technologie: React.FC = () => {
  
    
    //const [technologies, setTechnologies] = useState<Record<string, string>[]>([]);

    //const [technologies, setTechnologies] = useState([]);
    /*
    const urlTechnoFile = "../techno.json";

    const recupererTechnologies = async(url: string) : Promise<Record<string, string>[]> => {

        try
        {
            const response = await fetch(url);

            if(!response)
            {
                throw new Error("Impossible de récupérer les technologies");
            }

            const result = await response.json(); 

            return result;


        } 
        catch(error) 
        {
            console.log(error);   
            return [];
        }
    }

    useEffect( () => {



        recupererTechnologies(urlTechnoFile)
        .then( (techs) => setTechnologies(techs))
        .catch( error => console.log({error}) )

    }, [])*/
    
    return (

        <section className="technologie">
            <h3 className="technologie__title">Techno<span className="technologie__title--lightblue">logies</span></h3>
            <div className="technologie__desc">
                {/*
                    
                    technologies.map( (techno,index) => (
                        <Card image={techno.image} alt={techno.alt} key={index}/>
                    ))  */ 
                }
            </div>
        </section>
  )
}

export default Technologie