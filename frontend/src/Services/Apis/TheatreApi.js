const BASE_URL = import.meta.env.VITE_MAIN_BACKEND_URL

export const CreateTheatrere = {
    CreateTheatre:BASE_URL+"/Create-Theatre"
}

export const Theatreinfo = {
    Theatreinfo:BASE_URL+"/Theatre-info"
}

export const AllTheatres = {
    AllTheatres:BASE_URL+"/All-Theatres"
}

export const TheatreCreationRequest = {
    TheatreCreationRequest:BASE_URL+"/Theatre-Creation-request"
}

export const DistributeTickets = {
    DistributeTickets:BASE_URL+"/Distribute-Tickets"
}

export const UpdateticketTime = {
    UpdateticketTime:BASE_URL+"/Update-TicketsTime"
}

export const TicketsCreated = {
    TicketsCreated:BASE_URL+"/Tickets-Created"
}

export const TheatreDetails = {
    TheatreDetails:BASE_URL+"/Theatre-Details"
}

export const totalsale = {
    totalsale:BASE_URL+"/CalculateTotalSale"
}


export const GetShowAllotedDetails = {
    GetShowAllotedDetails:BASE_URL+"/Show-Alloted-Details"
}

export const GetAllTicketsDetails = {
    GetAllTicketsDetails:BASE_URL+"/All-Tickets-Details"
}

export const GetSingleShowDetails = {
    GetSingleShowDetails:BASE_URL+"/GetSingleShowDetails"
}
