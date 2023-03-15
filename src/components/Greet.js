
export const Greet = (props) => {
    return (
        <div>
            <h1>
                Hello { props.name }, or {props.heroName}! 
            </h1>
            {props.children[1]}
            {props.children[0]}
        </div>
        );
}

