class CustomErrorHandler extends Error{
    constructor(status, msg){
        super();
        this.statusCode = status;
        this.message = msg;
    }


    static emailAlreadyExists(message){
        return new CustomErrorHandler(409, message);
    }

    static wrongCredentials(message = "Password is wrong"){
        return new CustomErrorHandler(401, message);
    }
    

    static notFound(message = "User Not Found."){
        return new CustomErrorHandler(404, message);
    }

    static invalidToken(message = "Invalid token."){
        return new CustomErrorHandler(404, message);
    }

    static serverError(message = "Internal Server error"){
        return new CustomErrorHandler(500, message);
    }

}

export default CustomErrorHandler;