export default function ProductCard(props){

    return(

        <div>
            <h1>{props.name}</h1>    
   
    <img src={props.img} />
    <p>price : {props.price}</p>
   
        </div>
    
   

    );

}