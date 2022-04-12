export interface Person {
    name: string
    height: string
    mass: string
    gender: string
    home_world: HomeWorld
}

export interface Page {
    count: number
    next: string
    previous: string
}

export interface PeoplePayload {
    data: [Person]
    page: Page
}
export interface lookUp {
  name: string
  page: number
}


export interface PeoplePayloadData {
    getPeople: PeoplePayload
}

export interface PageFilterData {
    filter: lookUp
}
export interface PageFilterVariables {
    variables: PageFilterData
}
    
    
export interface HomeWorld {
    name: string
    rotation_period: string
    orbital_period: string
    diameter: string
    climate: string
    gravity: string
    terrain: string
    surface_water: string
    population: string
}
    
    
    
////// 


// type Person {
//     name: String
//     height: String
//     mass: String
//     gender: String
//     home_world: HomeWorld
// }


// "lookup for name and page "
// input lookUp {
//     name: String,
//     page: Int
// }


// type PeoplePayload {
//     data: [Person]
//     page: Page
// }

// type Page {
//     count: Int
//     previous: String
//     next: String
// }

// type HomeWorld {
//     name: String
//     rotation_period: String
//     orbital_period: String
//     diameter: String
//     climate: String
//     gravity: String
//     terrain: String
//     surface_water: String
//     population: String
// }

// type Query {
//     getPeople(filter: lookUp): PeoplePayload
// }