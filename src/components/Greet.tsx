type GreetProps = {
    name: string
    location : string
    age: number
    isLoggedIn : boolean
}

type PersonProps = {
    name:{
        first: string
        last: string
    }
}

type PersonListProps = {
    names : {
        title: string
        name: string
    }[]
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
         {
            props.isLoggedIn && <div>My Name is {props.name}, I live in {props.location}, I am {props.age} years old </div> 
        }
    </div>
   
  )
}

export const Person = (props: PersonProps) => {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}

export const PersonList = (props: PersonListProps) => {
    return(
        <div>
            {
                props.names.map((name) => {
                    return(
                    <div>{name.title} {name.name}</div>
                    )
                })
            }
            {/* <h2>Miss Celestina</h2>
            <h2>Mr Ayomikun</h2>
            <h2>Miss Moyosore</h2>
            <h2>Miss Toyosi</h2> */}
        </div>
    )
}