const BASE_URL = import.meta.env.VITE_MAIN_BACKEND_URL_USER

export const CreateUser ={
    createuser:BASE_URL+"/Create-User"
}

export const CreateOtp = {
    createotp:BASE_URL+"/Create-Otp"
}

export const login ={
    login:BASE_URL+"/Login"
}

export const UpdatePersonalDetails = {
    UpdateUsername:BASE_URL+"/Update-userName",
    UpdatePassword:BASE_URL+"/Update-Password",
    UpdateImage:BASE_URL+"/Update-Image",
    UpdateNumber:BASE_URL+"/Update-Number",
    CurrentUserDetails:BASE_URL+"/Current-UserDetails"
}


export const ResetPassword = {
    LinkSend:BASE_URL+"/Send-Link",
    ResetPassword:BASE_URL+"/Change-Password"
}

export const GetAllShows = {
    AllShows:BASE_URL+"/Shows"
}

export const SpecificShow = {
    SpecificShow:BASE_URL+"/Specific-Show"
}

export const Comment = {
    Comment:BASE_URL+"/Comment-Banner"
}

export const PersonalChoice = {
    LikeBanner:BASE_URL+"/Like-Banner",
    DislikeBanner:BASE_URL+"/Dislike-Banner",
}

export const SendMessage = {
    SendMessage:BASE_URL+"/Send-Message"
}

export const TicketData = {
    TicketPurchased:BASE_URL+"/Ticket-Purchased",
    TicketPurchasedFullDetails:BASE_URL+"/Ticket-Purchased-FullDetails"
}

export const Ratings = {
    CreateRating:BASE_URL+"/createRating",
    GetAverageRating:BASE_URL+"/getAverageRating",
    GetAllRatingReview:BASE_URL+"/getReviews"
}
