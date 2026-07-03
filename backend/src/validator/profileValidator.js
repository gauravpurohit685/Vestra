// This is the validator for profile data

const profileValidator = (data) => {
    const {firstName, lastName} = data;
    if(firstName){
        if(firstName.length > 50){
            throw new Error("Maximum length exceeded!");
        }
    }

    if(lastName){
        if(lastName.length > 50){
            throw new Error("Maximum length exceeded!");
        }
    }
    

    if(firstName){
        if(firstName.length < 2){
            throw new Error("Maximum length exceeded!");
        }
    }

    if(lastName){
        if(lastName.length < 2){
            throw new Error("Maximum length exceeded!");
        }
    }
};

module.exports = profileValidator;