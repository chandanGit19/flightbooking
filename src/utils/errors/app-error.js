class AppError extends Error {
    constructor(message, statuscode) {
        super(message);
        this.message = message;
        this.status = statuscode;
        this.explanation = message;
    }
};



module.exports = AppError;


