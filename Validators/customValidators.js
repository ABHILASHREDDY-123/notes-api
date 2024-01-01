const titleValidator = (s) => {
  if (!s) {
    return "Title is required";
  }
  if(typeof(s)!='string'){
    return "Title must be of String type"
  }
  if (s.length < 3) {
    return "Title must have atleast 3 characters";
  }
  if (s.length > 15) {
    return "Title must have atmost 15 characters";
  }
  return null;
};

const contentValidator = (s) => {
    if (!s) {
      return "Content is required";
    }
    if(typeof(s)!='string'){
      return "Content must be of String type"
    }
    if (s.length < 1) {
      return "Content must have atleast 1 character";
    }
    if (s.length > 500) {
      return "Content must have atmost 500 characters";
    }
    return null;
  };

const postValidator = (req, res, next) => {
         let message = titleValidator(req.body.title);
         if(message){
             res.send({error:message});
         }
         else {
         message = contentValidator(req.body.content);
         if(message){
            res.send({error:message});
        }
        else {
            next();
        }  
    }
};

const putValidator =  (req, res, next) => {
    let message = contentValidator(req.body.content);
    if(message){
       res.send({error:message});
   }
   else {
       next();
   }  
};


module.exports = {postValidator,putValidator}
