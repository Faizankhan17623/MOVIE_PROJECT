const BASE_URL = import.meta.env.VITE_MAIN_BACKEND_URL

export const MakePayment = {
    MakePayment:BASE_URL+"/Make-Payment"
}

export const Verifypayment = {
    Verifypayment:BASE_URL+"/Verify-Payment"
}

export const DownloadTicketdata = {
    DownloadTicketdata:BASE_URL+"/download/:ticketId"
}
