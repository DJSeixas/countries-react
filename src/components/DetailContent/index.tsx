import { Container, Img, Info, InfoLista, Loading } from "./styles"

export type ItemProps = {
    countryDetail: any; 
}

interface languages{
    name: string;
}

const DetailContent = ({countryDetail}: ItemProps) => {
    
    return(
        
        <Container>
            {Object.keys(countryDetail).length === 0 ?
            (<Loading>...loading</Loading>) 
            :
            (
            <>
            <Img>
                <img src={countryDetail[0]?.flags?.png} alt="flag"/>
            </Img>
            <Info>
                <h1>{countryDetail[0]?.name}</h1>

                <InfoLista>
                    <li><strong>Native Name: </strong>{countryDetail[0]?.nativeName}</li>
                    <li><strong>Population: </strong>{countryDetail[0]?.population?.toLocaleString()}</li>
                    <li><strong>Region: </strong>{countryDetail[0]?.region}</li>
                    <li><strong>Sub Region: </strong>{countryDetail[0]?.subregion}</li>
                    <li className="space"><strong>Capital: </strong>{countryDetail[0]?.capital}</li>
                    <li><strong>Top Level Domain: </strong>{countryDetail[0]?.topLevelDomain}</li>
                    <li><strong>Currencies: </strong>{countryDetail[0]?.currencies[0].name}</li>
                    <li><strong className="languages">Languages: </strong>{
                    countryDetail[0]?.languages?.map((l:languages, i:number) => (
                        <span key={i}>{l.name}</span>
                    ))}</li>
                </InfoLista>

                <div className="borders"><strong>Border Countries:</strong>
                    {countryDetail[0]?.borders?.map((b:string, i:number) => {
                        return(
                            <span className="bordersItem" key={i}>{b}</span>
                        )
                    })}
                    </div>
            </Info>
            </>
            )
            }
        </Container>
    )
}

export default DetailContent